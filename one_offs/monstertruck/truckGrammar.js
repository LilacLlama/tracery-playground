// [garbage, box, dump, refrigerator, tank, tow, panel, flatbed, fire, haul] truck
// [mini, panel] van
// tractor unit
// cab forward
// log carrier
// ballast tractor
// heavy hauler


var grammar = {
    "truck":["#extra# #truck-type# truck","#truck-type# truck"],
    "truck-type" : [ "#tuple# semi", "#tuple# carrier", "#length# pickup", "#length# flatbed"],
    "length" : [ "10ft", "20ft", "40ft", "mile-long", "1 km", "endless"],
    "tuple" : ["", "double", "triple", "quadruple", "quintuple"],
    "extra" : ["", "flying", "submersible", "temporally-shifted", "hover", "refrigerated", "quantum"],

    "weatherRating":["#weather#,<br/> #weather#,<br/> & #weather#"],
    "weather" : [ "#weather-adj# #precipitation#", "#depth# flooding", "#weather-adj# #tornado-type#", "#hail-size#-sized hail"],
    "tornado-type" : [ "water-devils", "dust-devils", "tornadoes", "hurricanes"],
    "precipitation" : ["rain", "sleet", "monsoons"],
    "hail-size" : [ "pea", "golf-ball", "bowling-ball", "beach-ball"],
    "weather-adj" : ["", "flaming", "acid", "freezing", "blood", "squid", "frog", "locust"],
    "depth" : ["minor", "major", "apocalyptic"],

    "monsterRating":["#monster#,<br/> #monster#, <br/>& #monster#"],
    "age" : [ "baby", "young", "full-grown", "elder"],
    "monster" : [ "#personality# #age# kraken",
        "#size# #age# nessie",
        "#size# squid",
        "#personality# jellyfish",
        "#eel-type# eels",
        "#age# #eel-type# #whale-type#",
        "#size# #personality# shark",

    ],
    "whale-type":["orcas", "dolphins", "whales"],
    "size" : [ "miniature", "miniscule", "regular", "giant", "gargantuan", "monstrous"],
    "personality" : [ "friendly", "sluggish","angry", "wrathful", "passive", "domesticated"],
    "eel-type" : ["electric", "magnetic", "invisible", "toothed", "frilled", "vampire",]
};