let wordList = [
"aal",
"aap",
"aardwolf",
"aasgier",
"adder",
"adders",
"adelaar",
"agoeti",
"agoetis",
"agouta",
"agoutas",
"albacore",
"algeneter",
"alk",
"alligators",
"alpaca",
"alpenhond",
"alpenkraai",
"amberjack",
"anaconda",
"angwantibo",
"anhima",
"appelvink",
"arapaima",
"arend",
"armadillo",
"arowana",
"aspisadder",
"axishert",
"axolotl",
"azorenvink",
"baardagame",
"baardrob",
"baars",
"bajkalrob",
"bandrob",
"banteng",
"barmsijs",
"basilisk",
"bateleur",
"beekforel",
"beekprik",
"beer",
"beermarter",
"berberaap",
"bergduivel",
"bergeend",
"bergkat",
"bergnyala",
"bergzebra",
"bermpje",
"beverrat",
"bevers",
"bij",
"bijeneter",
"bijeneters",
"bijlvis",
"bizon",
"blankvoorn",
"blauwkopje",
"boas",
"bokje",
"bongo",
"bonito",
"bonobo",
"bontebok",
"boommarter",
"boompieper",
"boomslang",
"boomzwaluw",
"borstelrat",
"bosbok",
"boscobra",
"bosduivel",
"boshond",
"bosmarmot",
"bosmeester",
"bosmuis",
"bosuil",
"bot",
"brandgans",
"breedbek",
"brilbeer",
"brilduiker",
"brilslang",
"buidelmol",
"buizerd",
"bultrug",
"bunzing",
"butskop",
"capibara",
"caracal",
"caracara",
"casarca",
"cavia",
"chimpansee",
"chinchilla",
"chuckwalla",
"clownvis",
"coelacanth",
"convert",
"courols",
"coyote",
"damhert",
"das",
"degoe",
"diepzeerog",
"dik-dik",
"dikbekfuut",
"dingo",
"discusvis",
"diversen2",
"dodaars",
"dodo", 
"doejong",
"doejongs",
"dolfijn",
"dolfijnvis",
"doornrug",
"draakvis",
"drill",
"dromedaris",
"drongos",
"duif",
"duikers",
"duivelsrog",
"dwergbotia",
"dwergmuis",
"dwergotter",
"dwerguil",
"edelhert",
"eekhoorn",
"eekhoorns",
"eend",
"egel",
"egel", 
"eidereend",
"ekster",
"ekstergans",
"eland",
"elrits",
"emoe",
"emoes",
"everzwijn",
"ezel",
"ezels",
"fangtooth",
"fazant",
"fennek",
"franjehaai",
"fret",
"fretkat",
"fuut",
"gans",
"gaur",
"gaviaal",
"geit",
"gekkos",
"gelada",
"gems",
"gier",
"giervalk",
"gierzwaluw",
"giraf",
"giraffe",
"giraffe", 
"girelle",
"glanskop",
"glasmesvis",
"goendi",
"gorilla",
"goudfazant",
"goudvink",
"goudvis",
"gramper",
"graskarper",
"griend",
"groenling",
"grondel",
"grondels",
"grutto",
"guppy",
"haas",
"hagedisvis",
"halysslang",
"hamerkop",
"hamsters",
"harders",
"haring",
"havik",
"hawaiigans",
"hazelskink",
"hazelworm",
"heilbot",
"hermelijn",
"hert",
"hertmuis",
"hoatzins",
"hoenders",
"hokkos",
"hommel",
"hond",
"hond", 
"hondshaai",
"honingbeer",
"honingdas",
"hop",
"houtduif",
"houtsnip",
"houtworm",
"huismuis",
"huismus",
"hyenahond",
"hyenas",
"ijsbeer",
"ijsduiker",
"ijseend",
"ijsvis",
"ijsvogel",
"impala",
"indri",
"indris",
"inktvis",
"jabiru",
"jacamars",
"jacanas",
"jagers",
"jaguar",
"kabeljauw",
"kakapo",
"kaketoes",
"kakkerlak",
"kameel",
"kameleons",
"kamvis",
"kanarie",
"kangoeroes",
"kariboe",
"karper",
"karpers",
"kat",
"kat", 
"katfret",
"kauw",
"kea",
"keizergans",
"keizersvis",
"kerkuil",
"kever",
"kievit",
"kikker",
"kikkers",
"kip",
"kiwis",
"klapekster",
"klapmuts",
"klompvis",
"kluut",
"koala",
"koaro",
"koe",
"koekoek",
"koeneusrog",
"koereiger",
"koevis",
"kokmeeuw",
"kolibries",
"konijn",
"konijnuil",
"koningsvis",
"kookaburra",
"koolmees",
"koperwiek",
"koperzalm",
"kopvoorn",
"kortoorvos",
"kraagbeer",
"kraai",
"krakeend",
"kramsvogel",
"krekel",
"krekel", 
"krokodil",
"krokodil", 
"krooneend",
"kroonmaki",
"kuifdrongo",
"kuifduiker",
"kuifeend",
"kuifmakaak",
"kwabaal",
"kwak",
"kwal",
"kwikwi",
"lachmeeuw",
"lama",
"lammergier",
"laplanduil",
"leeuw",
"leeuw", 
"leguaan",
"lepelaar",
"lepelhond",
"liervogel",
"liervogels",
"lijster",
"lintvis",
"lippenbeer",
"lokaasvis",
"loopvogels",
"lories",
"luiaard",
"luiaards",
"luipaard",
"maanvis",
"mako",
"makreel",
"mandrill",
"manenrob",
"manenwolf",
"manoel",
"manta",
"mantas",
"mara",
"maraboe",
"margay",
"marmerkat",
"massasauga",
"matamata",
"matkop",
"meerkat",
"meerkoet",
"mees",
"meeuw",
"melkvis",
"mensenhaai",
"merel",
"mesvis1",
"mesvis2",
"moeflon",
"moeraal",
"moeraskat",
"moko",
"monniksvis",
"monstervis",
"mot",
"motmots",
"mug",
"muis",
"muisvogels",
"muntjak",
"mus",
"muskusos",
"muurgekko",
"nandoe",
"nandoes",
"narwal",
"neontetra",
"nerts",
"netpython",
"neushoorn",
"nijlgans",
"nijlpaard",
"nijlvaraan",
"nonnetje",
"noordkaper",
"nyala",
"ocelot",
"octopus",
"oehoe",
"oeraluil",
"okapi",
"olifant",
"olifant", 
"olm",
"oogstmuis",
"ooievaar",
"ooievaars",
"oribi",
"otters",
"paard",
"paard", 
"paardezel",
"paca",
"pacarana",
"pampakat",
"pampashert",
"panda",
"pandavis",
"panter",
"papegaai",
"pardellynx",
"parelskink",
"patas",
"patrijs",
"pauw",
"pauwbot",
"pekaris",
"pelikaan",
"pelikaanv1",
"picassovis",
"pijlstaart",
"pimpelmees",
"pincetvis",
"pinguin",
"piranha",
"poedoe",
"poekoe",
"poema",
"poetsvis",
"poolhaas",
"poolvos",
"potto",
"pottoes",
"potvis",
"primzang",
"puffbirds",
"pukeko",
"purperkoet",
"putter",
"pyamahaai",
"pyjamahaai",
"pyjamavis",
"python",
"pythons",
"quetzal",
"quokka",
"raaf",
"rafelvis",
"rat",
"ree",
"reebok",
"regenworm", 
"reiger", 
"rendier", 
"renkoekoek",
"resusaap",
"reuzenhaai",
"reuzentrap",
"rietvis",
"rietvoorn",
"rietzanger",
"ringmus",
"ringslang",
"rivierprik",
"rockhopper",
"roerdomp",
"roestkat",
"roodborst",
"roofvogels",
"rotgans",
"rotsduif",
"rubberboa",
"ruitpython",
"schaap",
"schepvis",
"schildpad",
"schildpad", 
"schol",
"schreeuw",
"seriema",
"seriemas",
"serval",
"sidderaal",
"sifaka",
"sikahert",
"sitatoenga",
"slak", 
"slang", 
"slechtvalk",
"slijmprik",
"slobeend",
"smient",
"snappers",
"snavelvis",
"sneeuwgans",
"sneeuwgors",
"sneeuwuil",
"snoek",
"snoekbaars",
"snor",
"snotolf",
"spatzalm",
"specht",
"sperwer",
"sperweruil",
"spin",
"spinaap",
"spotvogel",
"spreeuw",
"springbok",
"staartmees",
"statiefvis",
"steenarend",
"steenbok",
"steenloper",
"steenuil",
"steenvis",
"stekelrog",
"stekelvarken",
"steur",
"stinkrob",
"stormmeeuw",
"struikgaai",
"struisvogel",
"sumatraan",
"surfbird",
"tafeleend",
"takahe",
"tambaqui",
"tapijthaai",
"tapir",
"tapirvis",
"tapuit",
"tarbot",
"tarpon",
"tayra",
"teek", 
"tijger", 
"tijgerhaai",
"tijgerkat",
"tinamoes",
"tjiftjaf",
"todies",
"toekans",
"toer",
"toerakos",
"tokeh",
"tong",
"torenvalk",
"trevally",
"trogons",
"trompetvis",
"tuimelaar",
"uil",
"valk",
"vangas",
"varkensvis",
"vechtarend",
"veelvraat",
"velduil",
"vetvogels",
"vicuna",
"vink",
"vireos",
"vis",
"vis", 
"visarend",
"viscacha",
"visdief",
"visfam",
"viskat",
"vismarter",
"vlagzalm",
"vleermuis",
"vlinder",
"vogel",
"vogelfam",
"vogelsoort",
"vos",
"vuurstaart",
"wallaroe",
"walrus",
"walvis",
"walvis", 
"walvishaai",
"wanderoe",
"wapiti",
"warana",
"wasbeer",
"waterral",
"watersnip",
"weka",
"wenkpootje",
"wezel",
"whio",
"wijting",
"wimpelvis",
"wisent",
"wittehaai",
"woelrat",
"wolaap",
"wolf",
"wombats",
"worm",
"woudaapje",
"wulp",
"yak",
"zaaghaai",
"zaagvis",
"zadelrob",
"zandadder",
"zandhaai",
"zandvis",
"zangers",
"zangvogels",
"zebra",
"zebrahaai",
"zebras",
"zebravis",
"zeeduivel",
"zeeduivels",
"zeeengel",
"zeekoet",
"zeeleeuw",
"zeeleguaan",
"zeelt",
"zeeotter",
"zeepaard",
"zeepaardje",
"zeepaling",
"zeeprik",
"zeesnoek",
"zeewolf",
"zijdehaai",
"zonneral",
"zuidkaper",
"zuignapvis",
"zuigvis",
"zwaan",
"zwaardvis",
"zwaluw",
"rups",
"luis",
"antilope",
"kolibrie",
"otter",
"bok",
"vogel",
"tekkel",
"stier",
"marter",
"lieveheersbeestje",
"nachtegaal",
"neusaap",
"parkiet",
"flamingo",
"salamander",
"orangoetang",
"gekko",
"gifkikker",
"ransuil",
"rog",
"ratelslang",
"gnoe",
"toekan",
"tilapia",
"dikdik",
"baviaan",
"waterrat",
"woestijnrat",
"eikenprocessierups",
"os",
"naaktslak"
];