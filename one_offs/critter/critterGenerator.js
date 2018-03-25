var grammar = tracery.createGrammar(critterGrammar);

function makeCritters(num){
    for(var i = 0; i < num; i++){
        var critterDiv = $("<div>").attr({
            class : "critter-div col-4 card"
        }).text(grammar.flatten("#origin#"));

        $("#critter-pen").append(critterDiv);
    }
}

$(document).ready(function (){
    makeCritters(6);
});
