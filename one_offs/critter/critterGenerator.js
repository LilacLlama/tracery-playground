var grammar = tracery.createGrammar(critterGrammar);

var toggle = true;

function makeCritters(num){
    for(var i = 0; i < num; i++){
        var critterText = grammar.flatten("#origin#");

        var color = toggle ? "bg-light" : "bg-dark text-white";
        toggle = !toggle;

        var smsLink = $("<a>").attr({
            "href":"sms:?&body=" + "I found a '"+critterText+"' in this whackadoodle critter generator!" +
            "(https://bit.ly/2pEkzWv)"
        }).append($("<i>").attr({
            class:"far fa-comments fa-3x d-block d-sm-none"
        }));

        var tweetLink = $("<a>").attr({
            "href":"https://twitter.com/intent/tweet?" +
            "text=I found a '"+critterText+"' in this whackadoodle critter generator!" +
            '&via=thelilacllama' +
            '&url=https://bit.ly/2pEkzWv' +
            '&hashtags=procgenfun,tracery,lilacllamacode'
        }).append($("<i>").attr({
            class:"fab fa-twitter fa-3x"
        }));

        var critterDiv = $("<div>").attr({
            class : "critter-div col-12 col-md-4 card " +color
        })
            .append($("<div class='row justify-content-center align-items-center'>")
                .append(smsLink)
                .append(tweetLink)
                .append($("<h3>").attr({
                    class:"card-body text-center"

                }).text(critterText))
            );

        $("#critter-pen").prepend(critterDiv);
    }
}

$(document).ready(function (){
    makeCritters(30);
});
