const truckSet = new Set(["regular pick-up"]);

var generator = tracery.createGrammar(grammar);

function makeTruck(num){
    for(var i = 0; i < num; i++){
        var truckText = generator.flatten("#truck#");
        var weatherText = generator.flatten("#weatherRating#");
        var monsterText = generator.flatten("#monsterRating#");

        while(truckSet.has(truckText)){
            truckText = generator.flatten("#truck#");
        }

        truckSet.add(truckText);

        var truckRow = $("<tr>").attr({
            class : "truck-row "
        }).append($("<td>").text(truckText))
            .append($("<td>").append(monsterText))
            .append($("<td>").append(weatherText));

        $("#truck-shed").prepend(truckRow);

    }
}



$(document).ready(function (){
    makeTruck(15);
});
