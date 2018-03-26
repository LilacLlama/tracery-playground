var critterGrammar = {
        "origin":[
                "#adj-combo# #animal#",
                "#adj-combo# #adj-location#-#animal#", 
                "#adj-combo# #adj-location##noun-doer#",
                "#adj-combo# #animal#-#noun-doer#",
                "#adj-combo# #noun-prefix##animal#",
                "#adj-combo# #animal#-#animal#",
                "#adj-combo# #animal#-#noun-prefix##animal#",
                "#adj-combo# #adj-location##noun-postfix#",
                "#adj-combo# #animal##noun-postfix#",
                "#adj-combo# #noun-prefix##noun-postfix#",
                "#adj-combo# #noun-obj##noun-part#",
                "#adj-combo# #noun-obj# #animal#"
        ],
        "adj-combo":[
                        "#adj-size# #normal-color# #adj-texture# #adj-location# #adj-importance#", 
                        "#adj-importance#",
                        "#adj-size#", 
                        "#normal-color#", 
                        "#fancy-color#", 
                        "#adj-texture#", 
                        "#adj-location#", 
                        "#adj-doing#",
                        "#adj-size# #normal-color#", 
                        "#adj-size# #normal-color# #adj-importance#", 
                        "#normal-color# #adj-texture#", 
                        "#fancy-color# #adj-texture#", 
                        "#adj-texture# #adj-doing#", 
                        "#adj-size# #adj-location#", 
                        "#adj-size# #adj-location# #adj-importance#", 
                        "#normal-color# #adj-doing#", 
                        "#normal-color# #adj-location#", 
                        "#fancy-color# #adj-location#", 
                        "#adj-size# #normal-color# #adj-doing#", 
                        "#adj-size# #normal-color# #adj-location#"
                    ],
        "adj-texture":[
                "fluffy", "fuzzy", 
                "tufted", "crested", "frizzled",
                "prickled", "spikey"
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
        "secondary-color":["purple", "green", "violet"],
        "warm-color":["red", "yellow", "orange"],
        "cold-color":["blue", "violet", "white"],
        "brown-color":["brown", "taupe", "tan", "sepia", "sand", "coffee", "chocolate", "smoke", "wheat", "amber"],
        "normal-color":[
                                "#primary-color#", "#secondary-color#",
                                "pink", "purple", "lavender", "orchid",
                                "maroon", "rose", "rust", "cerise", "fuchsia", "peach", "mauve", "wine", "magenta",
                                "teal", "aqua", "turquoise", "indigo", "azure", "cyan",
                                "olive", "puce", "sage",
                                "lemon",
                                "white", "black", "grey",
                                "#brown-color#"
                       ],
        "adj-doing" : [
                "jumping", "burrowing", "flying", "screaming", 
                "dancing", "hopping", "gliding", "humming", 
                "stinging", "biting", "stinking"
//                , "sucking"
        ],
        "adj-size" : ["miniature","giant"],
        "adj-importance" : ["king", "queen", "emperor", "fairy"],
        "adj-location" :[
                "mountain", "hill", "plains", "cave", "ridge",
                "prairie", "grass", "hedge", "tree",
                "arctic", "polar", "ice",
//                 "space-faring", 
                "space", "moon", "star", "galactic",
                "guinea", "komodo", "chilean", "peruvian", "american", "african", "european",
                "sea", "river", "pond", "lake", "puddle", 
                "water", "wood", "rock", "stone", "rain", "sand"
        ],
        "noun-doer" :[
                "hopper", "jumper", "runner", 
                "singer", "dancer", "burrower", 
                "glider", "fisher", "eater", 
                "piper"
//                ,"sucker", "pecker"
        ],
        "noun-prefix":[
                "mini", "mega",
                "pea", "mag", "mon", "nar",
                "bat", "ham", "jelly", "gos",
                "wild", "stink", "sting",
                "kooka", "meer", "lap",
                "octo", "septa"
        ],
        "noun-postfix":[
                "ling", "wing", "burra", "roo", "coon",
                "eater", "fisher", "flyer"
        ],
        "noun-part":[
                "tail", "bill", "back", "foot"    
        ],
        "noun-obj":[
                "spoon", "box"
        ],
        "fancy-color" :[
                "#metal-color#",
                "#metallic-color#",
                "#gem-color#",
                "#primary-color#-#secondary-color#",
                "#secondary-color#-#primary-color#",
                "#normal-color# pearl",
                "#normal-color# #gem-color#",
                "royal #normal-color#",
                "sandy #brown-color#",
                "sea #cold-color#",
                "frost #cold-color#",
                "vivid #normal-color#",
                "white #brown-color#",
                "black #brown-color#",
                "antique #normal-color#",
                "antique #metallic-color#",
                "bright #normal-color#",
                "dark #normal-color#",
                "deep #normal-color#"
        ],
        "animal":[
                'aardvark', 'albatross', 'alligator', 'alpaca', 'ant', 'anteater', 'antelope', 'ape', 'armadillo', 
                'baboon', 'badger', 'barracuda', 'bat', 'bear', 'beaver', 'bee', 'beetle', 'bison', 'boar', 'bug',
                'buffalo', 'butterfly', 
                'camel', 'capybara', 'caribou', 'cassowary', 'cat', 'caterpillar', 'cow',
                'centipede', 'chamois', 'cheetah', 'chicken', 'chimpanzee', 'chinchilla', 'chough', 'clam', 'cobra', 'cockroach', 
                'cod', 'cormorant', 'coyote', 'crab', 'crane', 'crocodile', 'crow', 'curlew', 
                'deer', 'dinosaur', 'dog', 'dolphin', 'donkey', 'dotterel', 'dove', 'dragon', 'duck', 'dugong', 'dunlin', 'dragon',
                'eagle', 'echidna', 'eel', 'egret', 'eland', 'elephant', 'elk', 'emu', 
                'falcon', 'ferret', 'finch', 'fish', 'flamingo', 'fly', 'fox', 'fowl', 'frog', 
                'gaur', 'gazelle', 'gerbil', 'giraffe', 'gnat', 'gnu', 'goat', 'goose', 'gorilla',
                'grouse', 'guanaco', 'gull', 
                'hamster', 'hare', 'hawk', 'heron', 'herring', 'hippopotamus', 'hornet', 'horse', 'hound', 'hyena', 
                'ibex', 'ibis', 
                'jackal', 'jaguar', 'jay', 'jellyfish', 
                'kangaroo', 'koala', 'kouprey', 'kudu', 'lark', 'lemur', 'leopard', 'lion', 'llama', 'lobster', 'locust', 
                'loris', 'louse', 'lyrebird', 
                'magpie', 'mallard', 'manatee', 'mandrill', 'mantis', 'marmoset', 'marten', 'meerkat', 
                'mink', 'mole', 'monkey', 'moose', 'mosquito', 'moth', 'mouse', 'mule', 
                'narwhal', 'newt', 'nightingale', 'octopus', 'okapi', 'opossum', 'oryx', 'ostrich', 'otter', 'owl', 
                'ox', 'oyster', 
                'panda', 'panther', 'parrot', 'partridge', 'peafowl', 'pelican', 'penguin', 'pheasant', 
                'pig', 'pigeon', 'pony', 'porcupine', 'porpoise', 
                'quail', 'quelea', 'quetzal', 
                'rabbit', 'raccoon', 'rail', 'ram', 'rat', 'raven', 'reindeer', 'rhinoceros', 'robin', 'rook', 'ray',
                'salamander', 'salmon', 'sand-dollar', 'sardine', 'scorpion', 'seal', 'shark', 
                'sheep', 'shrew', 'skunk', 'snail', 'snake', 'sparrow', 'spider', 
                'squid', 'squirrel', 'starling', 'stork', 'swallow', 'swan', 
                'tapir', 'tarsier', 'termite', 'tiger', 'toad', 'trout', 'turkey', 'turtle', 
                'urchin', 
                'vicuña', 'viper', 'vulture', 
                'wallaby', 'walrus', 'wasp', 'weasel', 'whale', 'wolf', 'wolverine', 'wombat', 
                'woodcock', 'woodpecker', 'worm', 'wren', 
                'yak', 'zebra'
                ]
    };
