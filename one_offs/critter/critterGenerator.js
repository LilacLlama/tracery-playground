$.fn.exists = function () {
    return this.length !== 0;
}

var grammar = tracery.createGrammar(critterGrammar);

var toggle = true;

function makeHiddenImg(critterText){

    var makeId = critterText.replace(/ /g,"-");
    makeId = makeId.replace(/&/g,"-");

    if(!$("#"+makeId).exists()){
        var hiddenImg = $("<img>").attr({
            src:"http://fleurdellama.com/llamacode/imagemaker.php?critter="+critterText,
            class:"d-none",
            id:makeId
        });

        $("#critter-pen").prepend(hiddenImg);
    }

    return true;
}

function makeCritters(num){
    for(var i = 0; i < num; i++){
        var critterText = grammar.flatten("#origin#");

        var iconColor = toggle ? "text-dark" : "text-light";
        var color = toggle ? "bg-light" : "bg-dark text-white";
        toggle = !toggle;

    //<a href="sms://+14035550185?body=I%27m%20interested%20in%20your%20product.%20Please%20contact%20me.">Send a SMS message</a>
    //<i class="fas fa-mobile"></i>

    //<a href="https://www.pinterest.com/pin/create/button/"
        //    data-pin-do="buttonBookmark"
        //        data-pin-custom="true">
        //            --YOUR CUSTOM HTML--
        //    </a>




        var pinLink = $("<a>").attr({
            "onclick":"makeHiddenImg('"+critterText+"');",
            "href":"https://www.pinterest.com/pin/create/button/",
            "data-pin-do":"buttonPin",
            "data-pin-custom":"true",
            "data-description":"I just generated a '"+critterText+"' in this whackadoodle critter generator!",
            "data-pin-media":"http://fleurdellama.com/llamacode/imagemaker.php?critter="+critterText,
            "data-pin-url":"https://bit.ly/2pEkzWv"
        }).append($("<i>").attr({
            class:"fab fa-pinterest fa-3x text-danger"
        }));


        var smsLink = $("<a>").attr({
            "href":"sms://+1234567890?" +
            "body=I found a '"+critterText+"' in this whackadoodle critter generator!" +
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

        //<svg height="30" width="200" xmlns:xlink="http://www.w3.org/1999/xlink">
    //<a xlink:href="https://www.w3schools.com/graphics/" target="_blank">
    //        <text x="0" y="15" fill="red">I love SVG!</text>
    //    </a>
    //    Sorry, your browser does not support inline SVG.
    //    </svg>

        var critterDiv = $("<div>").attr({
            class : "critter-div col-12 col-md-4 card align-items-center p-3 " +color
        }).append($("<div class='row justify-content-center'>")
            .append($("<svg>").attr({
                class:"card-body text-center"
            })
                .append($("<text>")
                    .attr({
                        x:0,
                        y:0,
                        fill:"black",
                        "font-size": "48px",
                        "font-weight":"bold"

                    })
                    .text(critterText)
                )
            )
        )
        .append($("<div class='row justify-content-center'>")
                .append(pinLink)
                .append(smsLink)
                .append(tweetLink)
                //.append(hiddenImg)

        );

        $("#critter-pen").prepend(critterDiv);
    }
}

$(document).ready(function (){
    makeCritters(15);
});
