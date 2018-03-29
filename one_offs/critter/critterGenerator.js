function makeHiddenImg(critterText){

    var id = makeCritterId(critterText);

    if(!$("#"+id).exists()){
        var hiddenImg = $("<img>").attr({
            src:"http://fleurdellama.com/llamacode/imagemaker.php?critter="+critterText.replace(/&/g,"and"),
            class:"d-none",
            id:id+"-img"
        });

        $("#"+id+"-div").prepend(hiddenImg);
    }

    return true;
}

var grammar = tracery.createGrammar(critterGrammar);

var toggle = true;

function makeCritterId(critterText){
    var id = critterText.replace(/ /g,"-");
    id = id.replace(/&/g,"-");
    return id;
}

function makeCritters(num){
    for(var i = 0; i < num; i++){
        var critterText = grammar.flatten("#origin#");

        var iconColor = toggle ? "text-dark" : "text-light";
        var color = toggle ? "bg-light" : "bg-dark text-white";
        toggle = !toggle;

        var pinterestId = makeCritterId(critterText) + "-pinterest";

        var pinLink = $("<a>").attr({
            //"onclick":"makeHiddenImg('"+critterText+"');",
            "href":"https://www.pinterest.com/pin/create/button/",
            "data-pin-do":"buttonBookmark",
            "data-pin-custom":"true",
            "data-description":"Procedural Generated Critter. I found a '"+critterText+"' in this procedural critter generator powered by Tracery! Check out https://lilacllama.github.io/tracery-playground/one_offs/critters.html to find your own!",
            "data-pin-media":"http://fleurdellama.com/llamacode/imagemaker.php?critter="+critterText.replace(/&/g,"and"),
            "data-pin-url":"https://lilacllama.github.io/tracery-playground/one_offs/critters.html",
            "id":pinterestId
        }).append($("<i>").attr({
            class:"fab fa-pinterest fa-3x text-danger"
        }));

        pinLink.click(function(e, f) {

            console.log(e.currentTarget.getAttribute('data-media-pin'));

            PinUtils.pinOne({
                'url': e.currentTarget.getAttribute('data-pin-url'),
                'media': e.currentTarget.getAttribute('data-pin-media'),
                'description': e.currentTarget.getAttribute('data-description')
            });

        });


        var smsLink = $("<a>").attr({
            "href":"sms:?&body=" + "I found a '"+critterText+"' in this whackadoodle critter generator!" +
             "(https://bit.ly/2pEkzWv)"
        }).append($("<i>").attr({
            class:"far fa-comments fa-3x d-block d-sm-none " + iconColor
        }));

        var tweetLink = $("<a>").attr({
            "href":"https://twitter.com/intent/tweet?" +
            "text=I found a '"+critterText+"' in this whackadoodle critter generator!" +
            '&via=thelilacllama' +
            '&url=https://bit.ly/2pEkzWv' +
            '&hashtags=procgenfun,tracery,lilacllamacode'
        }).append($("<i>").attr({
            class:"fab fa-twitter fa-3x text-primary"
        }));

        var critterDiv = $("<div>").attr({
            class : "critter-div col-12 col-md-4 card align-items-center p-3 " +color
        }).append($("<div class='row justify-content-center'>")
            .append(
                $("<h3>").attr({
                        class:"card-body text-center"
                    }).text(critterText)
        ))
        .append($("<div class='row justify-content-center'>")
                .append(pinLink)
                .append(smsLink)
                .append(tweetLink)
        );

        $("#critter-pen").prepend(critterDiv);


    }
}



$(document).ready(function (){
    makeCritters(15);
});
