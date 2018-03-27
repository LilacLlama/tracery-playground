// Inspiration animals: 
// naked mole-rat, sapsucker, polarbear, muffalo, spoonbill, peacock
// elephant-seal, mountain lion, jelly-fish, dogfish, wallaby, komodo dragon
// emperor penguin, fairy penguin, lapwing, muskox, ruby throated hummingbird
// sunfish, hedgehog

// Doesn't do yet: sugar glider, golden doodle

var critterGrammar = {
        "origin":[
                "#adj-simple# #adj-location# #noun-prefix##animal#", // emperor mountain peagoose
                "#adj-simple# #animal#-#noun-prefix##animal#", // red dog-peahen
                
                "#adj-regular# #animal#", // ex: giant red panda, miniature antique white whale
                "#adj-regular# #adj-location##noun-doer#", // ex: red prickled pondhopper
                "#adj-regular# #animal#-#noun-doer#", // ex: screaming red dog-hopper  
                "#adj-regular# #animal#-#animal#", // ex: red striped dog-goose
                "#adj-regular# #adj-location##noun-postfix#", // ex: pink diamond mountainwing
                "#adj-regular# #animal##noun-postfix#", // ex: red spotted elephantseal
                "#adj-regular# #noun-prefix##noun-postfix#", // ex: screaming arctic pealing
                "#adj-regular# #noun-obj##noun-part#", // ex: silver striped spoonbill
//                 "#adj-regular# #noun-obj#-#animal#", // ex: giant blue spoongoose
                
                "#adj-complex# #animal#",  // ex: giant peruvian red-striped cockatoo
                "#adj-complex# #noun-prefix##noun-postfix#", // ex: screaming mountain fairy peawing
                "#adj-complex# #noun-prefix##animal#", // ex: giant red-scaled jellymoose
                "#adj-complex# #animal##noun-postfix#", // ex: metallic silver tufted komodo mooseling
                
        ],
        "adj-simple":[
                "#adj-importance#",
                "#adj-size#",
                "#adj-color#", 
                "#adj-texture#", 
                "#adj-location#", 
                "#adj-doing#",
                "#adj-pattern#",
                "#adj-no-texture#"
        ],
        "adj-regular":[
                "#adj-size# #adj-color#", // ex: giant red, miniature antique white
                
                "#fancy-color# #adj-doing#", // ex: red gold hopping
                "#fancy-color# #adj-doing#", // ex: red gold hopping
                "#normal-color# & #normal-color# #adj-pattern#", // ex: green & blue striped
                "#normal-color# & #normal-color# #adj-location#", // ex: green & blue pond
                "#adj-color# #adj-location#", // ex: green mountain, metallic silver river
                "#adj-color# #adj-pattern#", // ex: purple striped, red-orange striped
                "#adj-color# #adj-texture#", // ex: rose spiked, red diamond prickled

                "#adj-texture-modifiers# #adj-texture#", // ex: thick crested
                "#adj-no-texture# #adj-color#" // ex: bald metallic silver
        ],
        "adj-complex":[
                        "#adj-size# #adj-location# #normal-color#-#adj-pattern#", // miniature blue scaled shrub
                        "#adj-size# #normal-color# #adj-texture# #adj-location#", // giant blue scaled shrub
                        "#adj-size# #normal-color# #adj-location#", // small green pond
                        "#adj-size# #normal-color# #adj-importance#", // miniature red queen
                        "#adj-size# #adj-texture# #adj-importance#", // miniature tufted polar
                        "#adj-doing# #adj-location# #adj-importance#", // screaming arctic emperor
                        "#fancy-color# #adj-texture# #adj-location#", // antique white frizzled mountain
                        "#adj-size# #normal-color#-#adj-pattern#", // giant purple-striped
                        "#gem-color# #adj-pattern# #adj-importance#", // ruby striped emperor
                        "#adj-no-texture# #fancy-color# #adj-location#", // naked blue-green mountain
                        "#adj-no-texture# #fancy-color# #adj-importance#", // naked blue-green king
                        "#normal-color#-#adj-pattern# #adj-texture-modifiers#-#adj-texture#", // ex: red-striped thick-crested
                        "#adj-texture-modifiers#-#adj-texture# #fancy-color#", // ex: thin-horned antique white
                    ],
        "adj-texture-modifiers":[
                "thick", "sparse", "thin"
        ],
        "adj-texture":[
                "fluffy", "fuzzy", "spikey", "frizzy",
                "tufted", "crested", "frizzled",
                "scaled", "prickled", "spiked",
                "horned"
        ],
        "adj-no-texture" : [
                "bald", "naked", "nude"
        ],
        "adj-pattern":[
                "striped", "spotted", "ticked",
                "calico", "roan", "merle", "pointed", "brindlse",
                "#normal-color# throated",
                "patchwork", "painted"
        ],   
        "gem-color":[
                "diamond", "sapphire", "topaz", "emerald", "ruby"
        ],
        "metal-color":[ "gold", "silver", "copper", "bronze", "platinum","brass"],
        "metallic-color":[ 
                                "metallic #metal-color#",
                                "shiny #metal-color#",
                                "dull #metal-color#",
                                "oxidized #metal-color#",
                                "#warm-color#-copper", "#warm-color#-gold", "#warm-color#-bronze", "#warm-color#-brass",
                                "#cold-color#-silver", "#cold-color#-platinum"
                         ],
        "primary-color":["red", "blue", "yellow"],
        "secondary-color":["green", "violet", "orange"],
        "warm-color":["red", "yellow", "orange"],
        "cold-color":["blue", "violet", "white"],
        "brown-color":["brown", "taupe", "tan", "sepia", "sand", "coffee", "chocolate", "smoke", "wheat", "amber", "cream", "dun"],
        "normal-color":[
                                "#primary-color#", "#secondary-color#",
                                "pink", "purple", "lavender", "orchid",
                                "maroon", "rose", "rust", "cerise", "fuchsia", "peach", "mauve", "magenta",
//                                 "wine", 
                                "teal", "aqua", "turquoise", "indigo", "azure", "cyan",
                                "olive", "puce", "sage",
                                "lemon",
                                "white", "black", "grey"
                       ],
        "adj-doing" : [
                "jumping", "burrowing", "flying", "screaming", 
                "dancing", "hopping", "gliding", "humming", 
                "stinging", "biting", "stinking",
                "draft"
//                , "sucking"
        ],
        "adj-size" : [
                "miniature", "small", "tiny", "petite", "pocket", "short", "nano", "mini",
                "giant", "jumbo", "large", "mammoth", "monstrous", "gigantic", "colossal", "hulking", "mega"
        ],
        "adj-importance" : [
                "king", "queen", "emperor", "fairy", "elder", "great", "minor", "poor", "lesser", "true"
        ],
        "adj-nation" : [
                "guinea", "komodo", "chilean", "peruvian", "american", "african", "european",
        ],
        "adj-location" :[
                "mountain", "hill", "plains", "cave", "ridge",
                "prairie", "grass", "hedge", "tree", "scrub", "bush",
                "arctic", "polar", "ice",
//                 "space-faring", 
                "space", "moon", "sun", "star", "galactic",
                "sea", "river", "pond", "lake", "puddle", "mud",
                "water", "wood", "rock", "stone", "rain", "sand"
        ],
        "noun-doer" :[
                "hopper", "jumper", "runner", 
                "singer", "dancer", "burrower", 
                "glider", "fisher", "eater", 
                "piper", "wanderer", "wader",
                "babbler", "glider",
//                ,"sucker", "pecker"
        ],
        "noun-prefix":[
                "nut", "sap", "honey",
                "pea", "nar",
//                 "mag", "mon", 
                "bat", "ham", "jelly", "gos",
                "wild", "stink", "sting", "musk",
                "kooka", "meer", "lap",
                "war", 
//                 "peace",
                "octo", "septa",
                "puff", "muff"
        ],
        "noun-postfix":[
                "ling", "wing", "burra", "roo", "coon", "dillo", "alo", "aby",
                "eater", "fisher", "flyer"
        ],
        "noun-part":[
                "tail", "bill", "beak", "back", "foot", "mouth", "crest", "chest", "wing", "eye", "nose"
        ],
        "noun-obj":[
                "spoon", "box", "wax", "fan", "spade"
        ],
        "adj-color" :[
                "#fancy-color#",
                "#normal-color#",
                "#brown-color#",
                "#metal-color#",
                "#metallic-color#",
                "#gem-color#",
                "#primary-color#-#secondary-color#",
                "#secondary-color#-#primary-color#",
        ],
        "fancy-color" :[
                "rainbow",
                "prismatic #normal-color#",
                "#normal-color# pearl",
                "pearled #normal-color#",
                "#normal-color# #gem-color#",
                "royal #normal-color#",
                "sandy #brown-color#",
                "sea-#cold-color#",
                "frost-#cold-color#",
                "vivid #normal-color#",
                "hot #warm-color#",
                "cool #cold-color#",
                "neon #normal-color#",
                "white #brown-color#",
                "black #brown-color#",
                "antique #normal-color#",
                "antique #metallic-color#",
                "bright #normal-color#",
                "dark #normal-color#",
                "pastel #normal-color#",
                "deep #normal-color#"
        ],
        "animal":[
                'aardvark', 'albatross', 'alligator', 'alpaca', 'ant', 'anteater', 'antelope', 'ape', 'armadillo', 
                'baboon', 'badger', 'barracuda', 'bat', 'bear', 'beaver', 'bee', 'beetle', 'bison', 'boar', 'bug',
                'buffalo', 'butterfly', 'buzzard',
                'camel', 'capybara', 'caribou', 'cassowary', 'cat', 'caterpillar', 'cow', 'chameleon',
                'centipede', 'chamois', 'cheetah', 'chicken', 'chimpanzee', 'chinchilla', 'chough', 'clam', 'cobra', 'cockroach', 
                'cod', 'cormorant', 'coyote', 'crab', 'crane', 'crocodile', 'crow', 'curlew', 'cuckoo', 'cockatoo',
                'deer', 'dinosaur', 'dog', 'doodle', 'dolphin', 'donkey', 'dotterel', 'dove', 'dragon', 'duck', 'dugong', 'dunlin', 'dragon',
                'eagle', 'echidna', 'eel', 'egret', 'eland', 'elephant', 'elk', 'emu', 
                'falcon', 'ferret', 'finch', 'fish', 'flamingo', 'fly', 'fox', 'fowl', 'frog', 
                'gar', 'gazelle', 'gerbil', 'giraffe', 'gnat', 'gnu', 'goat', 'goose', 'gorilla', 'gecko',
                'grouse', 'guanaco', 'gull', 
                'hamster', 'hare', 'hawk', 'heron', 'herring', 'hippopotamus', 'hornet', 'horse', 'hound', 'hyena', 
                'ibex', 'ibis', 
                'jackal', 'jaguar', 'jay', 'jellyfish', 
                'kangaroo', 'koala', 'kouprey', 'kudu', "kraken",
                'lark', 'lemur', 'leopard', 'lion', 'llama', 'lobster', 'locust', 'loris', 'louse', 'lyrebird', "loon",
                'magpie', 'mallard', 'manatee', 'mandrill', 'mantis', 'marmoset', 'marten', 'meerkat', "mammoth",
                'mink', 'mole', 'monkey', 'moose', 'mosquito', 'moth', 'mouse', 'mule', 
                'narwhal', 'newt', 'nightingale', 
                'octopus', 'okapi', 'opossum', 'oryx', 'ostrich', 'otter', 'owl', 'ox', 'oyster', 
                'panda', 'panther', 'parrot', 'partridge', 'peafowl', 'pelican', 'penguin', 'pheasant', 
                'pig', 'pigeon', 'pony', 'porcupine', 'porpoise', 
                'quail', 'quelea', 'quetzal', 
                'rabbit', 'raccoon', 'rail', 'ram', 'rat', 'raven', 'reindeer', 'rhinoceros', 'robin', 'rook', 'ray',
                'salamander', 'salmon', 'sand-dollar', 'sardine', 'scorpion', 'seal', 'shark', "shrike",
                'sheep', 'shrew', 'skunk', 'snail', 'snake', 'sparrow', 'spider', 
                'squid', 'squirrel', 'starling', 'stork', 'swallow', 'swan', 
                'tapir', 'tarsier', 'termite', 'tiger', 'toad', 'trout', 'turkey', 'turtle', "tanager", 'toucan',
                'urchin', 
                'vicuña', 'viper', 'vulture', 
                'wallaby', 'walrus', 'warbler', 'wasp', 'weasel', 'whale', 'wolf', 'wolverine', 'wombat', 
                'woodcock', 'woodpecker', 'worm', 'wren', 
                'yak', 'zebra'
                ]
    };
