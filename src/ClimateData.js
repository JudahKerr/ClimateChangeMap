const counties = [
  "Beaufort",
  "Pinal",
  "St. Martin",
  "Colleton",
  "Wakulla",
  "Assumption",
  "Jefferson Davis",
  "Livingston",
  "St. John the Baptist",
  "Jackson",
  "Hyde",
  "Jasper",
  "Graham",
  "Camden",
  "Calcasieu",
  "Lafayette",
  "St. James",
  "St. Landry",
  "Pamlico",
  "Tyrrell",
  "Charleston",
  "Marion",
  "Miami-Dade",
  "Palm Beach",
  "Charlton",
  "Liberty",
  "Beauregard",
  "Lafourche",
  "Harrison",
  "Cameron",
  "Galveston",
  "Willacy",
  "Mobile",
  "Cochise",
  "Fresno",
  "Tehama",
  "Dixie",
  "St. Johns",
  "Taylor",
  "Volusia",
  "Effingham",
  "East Baton Rouge",
  "Iberville",
  "Pointe Coupee",
  "Tangipahoa",
  "Pender",
  "Horry",
  "Kleberg",
  "Refugio",
  "Mohave",
  "Duval",
  "Glades",
  "Levy",
  "Pasco",
  "Bryan",
  "Glynn",
  "Ware",
  "Acadia",
  "Ascension",
  "Cameron",
  "Beaufort",
  "Camden",
  "Craven",
  "Currituck",
  "Georgetown",
  "Nueces",
  "Pecos",
  "Starr",
  "Webb",
  "Maricopa",
  "Yuma",
  "Shasta",
  "Gilchrist",
  "Lafayette",
  "Lake",
  "Putnam",
  "Brantley",
  "Long",
  "Evangeline",
  "West Baton Rouge",
  "Clarke",
  "Stone",
  "Gates",
  "Jones",
  "Perquimans",
  "Hampton",
  "Harris",
  "Hidalgo",
  "Jasper",
  "Live Oak",
  "San Patricio",
  "Waller",
  "Clarke",
  "Imperial",
  "Baker",
  "Collier",
  "Flagler",
  "Highlands",
  "Leon",
  "Madison",
  "Polk",
  "Suwannee",
  "Echols",
  "Owyhee",
  "Allen",
  "St. Mary",
  "Vermilion",
  "Carroll",
  "Jefferson Davis",
  "Lamar",
  "Perry",
  "Simpson",
  "Walthall",
  "Warren",
  "Luna",
  "Chowan",
  "Pasquotank",
  "Berkeley",
  "Dorchester",
  "Bee",
  "Brazoria",
  "Brewster",
  "Dimmit",
  "Goliad",
  "Grimes",
  "Llano",
  "Montgomery",
  "San Jacinto",
  "Tyler",
  "Zavala",
  "Escambia",
  "Washington",
  "Franklin",
  "White",
  "Madera",
  "Columbia",
  "Hamilton",
  "Jefferson",
  "Liberty",
  "Union",
  "Iberia",
  "Vernon",
  "Amite",
  "Copiah",
  "George",
  "Greene",
  "Lawrence",
  "Lincoln",
  "Neshoba",
  "Smith",
  "Tate",
  "Wilkinson",
  "Camden",
  "Hickory",
  "Chaves",
  "Doña Ana",
  "Hidalgo",
  "Greene",
  "Aransas",
  "Atascosa",
  "Bexar",
  "Callahan",
  "Chambers",
  "Coleman",
  "Colorado",
  "DeWitt",
  "Fort Bend",
  "Haskell",
  "Jim Wells",
  "Kinney",
  "Lavaca",
  "Liberty",
  "Limestone",
  "Reagan",
  "Wilbarger",
  "Wilson",
  "Washington",
  "Baldwin",
  "Greene",
  "Monroe",
  "Pickens",
  "Sumter",
  "Grant",
  "Amador",
  "Butte",
  "Riverside",
  "Alachua",
  "Bay",
  "Bradford",
  "Clay",
  "Gadsden",
  "Pierce",
  "Screven",
  "Elmore",
  "Avoyelles",
  "East Feliciana",
  "Rapides",
  "Terrebonne",
  "Claiborne",
  "Clay",
  "Covington",
  "Forrest",
  "Franklin",
  "Jasper",
  "Jefferson",
  "Lafayette",
  "Lee",
  "Lowndes",
  "Marion",
  "Monroe",
  "Pike",
  "Wayne",
  "Winston",
  "Wayne",
  "Brunswick",
  "Carteret",
  "New Hanover",
  "Williamsburg",
  "Shelby",
  "Austin",
  "Bastrop",
  "Borden",
  "Bosque",
  "Brazos",
  "Caldwell",
  "Calhoun",
  "Collingsworth",
  "Comanche",
  "Concho",
  "Coryell",
  "Dallas",
  "Denton",
  "Erath",
  "Fayette",
  "Freestone",
  "Gonzales",
  "Hamilton",
  "Hood",
  "Jefferson",
  "Johnson",
  "Jones",
  "Karnes",
  "Kaufman",
  "La Salle",
  "Lee",
  "McCulloch",
  "Medina",
  "Navarro",
  "Rockwall",
  "Runnels",
  "Shelby",
  "Tarrant",
  "Taylor",
  "Throckmorton",
  "Tom Green",
  "Van Zandt",
  "Walker",
  "Wichita",
  "Wise",
  "Tooele",
  "Autauga",
  "Butler",
  "Choctaw",
  "Conecuh",
  "Elmore",
  "Lowndes",
  "Marengo",
  "Perry",
  "Tuscaloosa",
  "Wilcox",
  "Lawrence",
  "Mississippi",
  "Pulaski",
  "El Dorado",
  "San Bernardino",
  "Hardee",
  "Hillsborough",
  "Appling",
  "Atkinson",
  "Bacon",
  "Berrien",
  "Clinch",
  "Evans",
  "Lanier",
  "McIntosh",
  "Wayne",
  "Ada",
  "Alexander",
  "Ballard",
  "Pulaski",
  "Barber",
  "McCracken",
  "Bossier",
  "De Soto",
  "Ouachita",
  "Washington",
  "Hinds",
  "Holmes",
  "Humphreys",
  "Jones",
  "Leake",
  "Madison",
  "Marshall",
  "Noxubee",
  "Oktibbeha",
  "Rankin",
  "Sharkey",
  "Yalobusha",
  "Yazoo",
  "Bollinger",
  "Dunklin",
  "Maries",
  "Phelps",
  "Ripley",
  "Lea",
  "Sierra",
  "Bertie",
  "Bladen",
  "Columbus",
  "Lenoir",
  "Pitt",
  "Wayne",
  "Grady",
  "Harmon",
  "Jefferson",
  "Kiowa",
  "Le Flore",
  "Okmulgee",
  "Pittsburg",
  "Pottawatomie",
  "Seminole",
  "Tillman",
  "Washita",
  "Woodward",
  "Malheur",
  "Allendale",
  "Marion",
  "Dyer",
  "Lake",
  "Madison",
  "Tipton",
  "Andrews",
  "Archer",
  "Bell",
  "Burleson",
  "Clay",
  "Collin",
  "Comal",
  "Cottle",
  "Dawson",
  "El Paso",
  "Fisher",
  "Gaines",
  "Gillespie",
  "Guadalupe",
  "Harrison",
  "Hays",
  "Houston",
  "Hunt",
  "Jackson",
  "Kerr",
  "Lamar",
  "Madison",
  "Matagorda",
  "Montague",
  "Panola",
  "Robertson",
  "Sutton",
  "Terry",
  "Travis",
  "Uvalde",
  "Washington",
  "Covington",
  "Geneva",
  "Henry",
  "Montgomery",
  "Russell",
  "Gila",
  "Yavapai",
  "Clark",
  "Little River",
  "Logan",
  "Miller",
  "Randolph",
  "Merced",
  "Nevada",
  "Charlotte",
  "Monroe",
  "Baker",
  "Candler",
  "Cook",
  "Grady",
  "Jeff Davis",
  "Jenkins",
  "Montgomery",
  "Seminole",
  "Thomas",
  "Treutlen",
  "Wheeler",
  "Gallatin",
  "Hardin",
  "Pope",
  "Union",
  "Clark",
  "Comanche",
  "Carlisle",
  "Fulton",
  "Graves",
  "Livingston",
  "Marshall",
  "Bienville",
  "Caddo",
  "Caldwell",
  "Natchitoches",
  "Union",
  "West Feliciana",
  "Adams",
  "Calhoun",
  "Grenada",
  "Issaquena",
  "Kemper",
  "Lauderdale",
  "Newton",
  "Panola",
  "Pearl River",
  "Pontotoc",
  "Scott",
  "Sunflower",
  "Cape Girardeau",
  "Carter",
  "Cedar",
  "Morgan",
  "New Madrid",
  "Osage",
  "Pemiscot",
  "Scott",
  "Stone",
  "Cumberland",
  "Hertford",
  "Washington",
  "Wilson",
  "Alfalfa",
  "Atoka",
  "Choctaw",
  "Cleveland",
  "Comanche",
  "Ellis",
  "Garvin",
  "Hughes",
  "McIntosh",
  "Murray",
  "Okfuskee",
  "Osage",
  "Pawnee",
  "Tulsa",
  "Morrow",
  "Clarendon",
  "Florence",
  "Chester",
  "Crockett",
  "Fayette",
  "Gibson",
  "Haywood",
  "Henderson",
  "Lauderdale",
  "McNairy",
  "Montgomery",
  "Obion",
  "Weakley",
  "Anderson",
  "Bandera",
  "Bowie",
  "Cass",
  "Cherokee",
  "Cooke",
  "Donley",
  "Falls",
  "Fannin",
  "Franklin",
  "Frio",
  "Grayson",
  "Leon",
  "Lubbock",
  "Lynn",
  "McLennan",
  "Milam",
  "Nacogdoches",
  "Nolan",
  "Orange",
  "Rusk",
  "San Augustine",
  "Smith",
  "Upshur",
  "Victoria",
  "Wharton",
  "Wheeler",
  "Williamson",
  "Juab",
  "Millard",
  "Salt Lake",
  "Charles City",
  "Suffolk city",
  "Grant",
  "Coffee",
  "Crenshaw",
  "Dallas",
  "Hale",
  "Houston",
  "Lamar",
  "Macon",
  "Shelby",
  "Greenlee",
  "Pima",
  "Conway",
  "Craighead",
  "Crawford",
  "Crittenden",
  "Faulkner",
  "Hempstead",
  "Hot Spring",
  "Jefferson",
  "Lonoke",
  "Poinsett",
  "Saline",
  "Sebastian",
  "Placer",
  "Tulare",
  "Mesa",
  "Broward",
  "DeSoto",
  "Escambia",
  "Franklin",
  "Lee",
  "Nassau",
  "Santa Rosa",
  "Walton",
  "Washington",
  "Bulloch",
  "Coffee",
  "Decatur",
  "Johnson",
  "Lowndes",
  "Tattnall",
  "Worth",
  "Jackson",
  "Johnson",
  "Massac",
  "St. Clair",
  "Saline",
  "White",
  "Barton",
  "Bourbon",
  "Chautauqua",
  "Dickinson",
  "Ellis",
  "Graham",
  "Greenwood",
  "Harper",
  "Hodgeman",
  "Kiowa",
  "Lyon",
  "Ness",
  "Osborne",
  "Ottawa",
  "Pawnee",
  "Phillips",
  "Rooks",
  "Rush",
  "Saline",
  "Sedgwick",
  "Stafford",
  "Trego",
  "Wyandotte",
  "Christian",
  "Crittenden",
  "Hickman",
  "Lyon",
  "McLean",
  "Muhlenberg",
  "Todd",
  "Trigg",
  "Webster",
  "Catahoula",
  "Claiborne",
  "Grant",
  "Lincoln",
  "Richland",
  "St. Bernard",
  "St. Charles",
  "Worcester",
  "Attala",
  "Benton",
  "Chickasaw",
  "DeSoto",
  "Hancock",
  "Itawamba",
  "Leflore",
  "Prentiss",
  "Tippah",
  "Union",
  "Webster",
  "Bates",
  "Butler",
  "Christian",
  "Cole",
  "Dallas",
  "Franklin",
  "Gasconade",
  "Laclede",
  "Miller",
  "Mississippi",
  "Perry",
  "St. Clair",
  "Ste. Genevieve",
  "Vernon",
  "Churchill",
  "Dare",
  "Edgecombe",
  "Onslow",
  "Beaver",
  "Beckham",
  "Bryan",
  "Canadian",
  "Coal",
  "Dewey",
  "Garfield",
  "Harper",
  "Haskell",
  "Kingfisher",
  "Logan",
  "Love",
  "McClain",
  "Major",
  "Muskogee",
  "Noble",
  "Oklahoma",
  "Pontotoc",
  "Roger Mills",
  "Rogers",
  "Stephens",
  "Wagoner",
  "Grant",
  "Umatilla",
  "Bamberg",
  "Orangeburg",
  "Richland",
  "Carroll",
  "Hardeman",
  "Hardin",
  "Stewart",
  "Armstrong",
  "Crosby",
  "Delta",
  "Ellis",
  "Floyd",
  "Gray",
  "Hill",
  "Hudspeth",
  "Hutchinson",
  "Red River",
  "Davis",
  "Isle of Wight",
  "Chesapeake city",
  "Virginia Beach city",
  "Benton",
  "Yakima",
  "Bibb",
  "Bullock",
  "Chilton",
  "Coosa",
  "Fayette",
  "Morgan",
  "Pike",
  "St. Clair",
  "Walker",
  "La Paz",
  "Navajo",
  "Chicot",
  "Cleburne",
  "Cross",
  "Desha",
  "Drew",
  "Fulton",
  "Johnson",
  "Lafayette",
  "Nevada",
  "Pope",
  "Yell",
  "Glenn",
  "Kings",
  "Los Angeles",
  "Mendocino",
  "Modoc",
  "Santa Barbara",
  "Trinity",
  "Tuolumne",
  "Yolo",
  "Citrus",
  "Hernando",
  "Martin",
  "Ben Hill",
  "Bibb",
  "Brooks",
  "Burke",
  "Catoosa",
  "Clay",
  "Crawford",
  "Dougherty",
  "Houston",
  "Laurens",
  "Lee",
  "Mitchell",
  "Peach",
  "Richmond",
  "Telfair",
  "Toombs",
  "Twiggs",
  "Wilkinson",
  "Gooding",
  "Madison",
  "Randolph",
  "Williamson",
  "Harrison",
  "Perry",
  "Posey",
  "Spencer",
  "Vanderburgh",
  "Warrick",
  "Anderson",
  "Chase",
  "Coffey",
  "Crawford",
  "Elk",
  "Ford",
  "Geary",
  "Kingman",
  "Lincoln",
  "Linn",
  "Miami",
  "Mitchell",
  "Montgomery",
  "Morris",
  "Norton",
  "Osage",
  "Pottawatomie",
  "Pratt",
  "Reno",
  "Rice",
  "Russell",
  "Smith",
  "Sumner",
  "Wabaunsee",
  "Wilson",
  "Woodson",
  "Butler",
  "Caldwell",
  "Calloway",
  "Daviess",
  "Hancock",
  "Henderson",
  "Ohio",
  "Union",
  "Warren",
  "Franklin",
  "Jefferson",
  "LaSalle",
  "Red River",
  "Tensas",
  "Somerset",
  "Alcorn",
  "Bolivar",
  "Choctaw",
  "Coahoma",
  "Montgomery",
  "Quitman",
  "Tunica",
  "Washington",
  "Barton",
  "Benton",
  "Carroll",
  "Chariton",
  "Clay",
  "Crawford",
  "Dade",
  "Dent",
  "Henry",
  "Jasper",
  "Jefferson",
  "Johnson",
  "Lafayette",
  "Lawrence",
  "Platte",
  "Polk",
  "Pulaski",
  "Ray",
  "Reynolds",
  "St. Francois",
  "Saline",
  "Stoddard",
  "Taney",
  "Texas",
  "Warren",
  "Washington",
  "Pershing",
  "Grant",
  "Socorro",
  "Duplin",
  "Martin",
  "Blaine",
  "Caddo",
  "Carter",
  "Craig",
  "Creek",
  "Custer",
  "Grant",
  "Lincoln",
  "McCurtain",
  "Mayes",
  "Nowata",
  "Ottawa",
  "Payne",
  "Texas",
  "Washington",
  "Baker",
  "Jackson",
  "Josephine",
  "Barnwell",
  "Darlington",
  "Edgefield",
  "Lexington",
  "McCormick",
  "Saluda",
  "Sumter",
  "Benton",
  "Henry",
  "Perry",
  "Briscoe",
  "Hale",
  "Hockley",
  "Lipscomb",
  "Potter",
  "Roberts",
  "Terrell",
  "Box Elder",
  "Utah",
  "Henrico",
  "Northampton",
  "Southampton",
  "Douglas",
  "Barbour",
  "Blount",
  "Cullman",
  "Dale",
  "Lauderdale",
  "Lawrence",
  "Madison",
  "Marion",
  "Tallapoosa",
  "Ashley",
  "Baxter",
  "Benton",
  "Clay",
  "Greene",
  "Independence",
  "Lee",
  "Perry",
  "St. Francis",
  "Washington",
  "Woodruff",
  "Colusa",
  "San Diego",
  "Solano",
  "Sonoma",
  "Baca",
  "Prowers",
  "Calhoun",
  "Jackson",
  "Okaloosa",
  "Bleckley",
  "Colquitt",
  "Dodge",
  "Early",
  "Emanuel",
  "Glascock",
  "Greene",
  "Irwin",
  "Jefferson",
  "Marion",
  "Miller",
  "Pulaski",
  "Tift",
  "Warren",
  "Washington",
  "Webster",
  "Whitfield",
  "Wilcox",
  "Twin Falls",
  "Crawford",
  "Edwards",
  "Franklin",
  "Hamilton",
  "Lawrence",
  "Macon",
  "Monroe",
  "Montgomery",
  "Perry",
  "Floyd",
  "Gibson",
  "Knox",
  "Pike",
  "Allen",
  "Butler",
  "Cherokee",
  "Clay",
  "Cloud",
  "Cowley",
  "Douglas",
  "Edwards",
  "Ellsworth",
  "Grant",
  "Hamilton",
  "Labette",
  "McPherson",
  "Marion",
  "Meade",
  "Morton",
  "Neosho",
  "Riley",
  "Scott",
  "Seward",
  "Stanton",
  "Barren",
  "Bullitt",
  "Edmonson",
  "Elliott",
  "Hopkins",
  "Jefferson",
  "Logan",
  "East Carroll",
  "Madison",
  "Orleans",
  "West Carroll",
  "Dorchester",
  "Tallahatchie",
  "Tishomingo",
  "Barry",
  "Boone",
  "Cass",
  "Cooper",
  "Greene",
  "Howard",
  "Howell",
  "Jackson",
  "McDonald",
  "Madison",
  "Moniteau",
  "Newton",
  "Pettis",
  "St. Louis",
  "Webster",
  "Wright",
  "Big Horn",
  "Rosebud",
  "Cherry",
  "Lincoln",
  "Cape May",
  "Quay",
  "Roosevelt",
  "Hoke",
  "Robeson",
  "Sampson",
  "Scotland",
  "Delaware",
  "Kay",
  "Sequoyah",
  "Gilliam",
  "Wallowa",
  "Aiken",
  "Dillon",
  "Fairfield",
  "Kershaw",
  "Lee",
  "Marlboro",
  "Meade",
  "Pennington",
  "Cheatham",
  "Cochran",
  "Duval",
  "Hansford",
  "Lamb",
  "Ochiltree",
  "Oldham",
  "Presidio",
  "Val Verde",
  "San Juan",
  "King and Queen",
  "King William",
  "New Kent",
  "Prince George",
  "Poquoson city",
  "Lincoln",
  "Okanogan",
  "Clay",
  "Colbert",
  "Franklin",
  "Jefferson",
  "Talladega",
  "Arkansas",
  "Cleveland",
  "Izard",
  "Lincoln",
  "Prairie",
  "Santa Clara",
  "Siskiyou",
  "Bent",
  "Kent",
  "Sussex",
  "Hendry",
  "Okeechobee",
  "Pinellas",
  "St. Lucie",
  "Sumter",
  "Calhoun",
  "Chatham",
  "Columbia",
  "Crisp",
  "Dooly",
  "Fayette",
  "Harris",
  "Jasper",
  "Macon",
  "Rockdale",
  "Schley",
  "Stewart",
  "Sumter",
  "Talbot",
  "Taylor",
  "Terrell",
  "Turner",
  "Walton",
  "Wilkes",
  "Cassia",
  "Lincoln",
  "Bond",
  "Calhoun",
  "Clinton",
  "De Witt",
  "Pike",
  "Wabash",
  "Wayne",
  "Clark",
  "Ohio",
  "Van Buren",
  "Finney",
  "Franklin",
  "Gove",
  "Gray",
  "Greeley",
  "Harvey",
  "Haskell",
  "Jackson",
  "Jefferson",
  "Jewell",
  "Johnson",
  "Kearny",
  "Lane",
  "Leavenworth",
  "Logan",
  "Marshall",
  "Republic",
  "Shawnee",
  "Stevens",
  "Washington",
  "Wichita",
  "Simpson",
  "Spencer",
  "Concordia",
  "Morehouse",
  "St. Helena",
  "St. Tammany",
  "Atchison",
  "Douglas",
  "Lincoln",
  "Livingston",
  "Marion",
  "Monroe",
  "Ozark",
  "Ralls",
  "Randolph",
  "Carter",
  "Custer",
  "Dawson",
  "Garfield",
  "Sanders",
  "Furnas",
  "Elko",
  "Humboldt",
  "Lander",
  "Nye",
  "Curry",
  "Sandoval",
  "Harnett",
  "Northampton",
  "Gallia",
  "Meigs",
  "Union",
  "Calhoun",
  "Greenwood",
  "Union",
  "Haakon",
  "Decatur",
  "Houston",
  "Humphreys",
  "Macon",
  "Maury",
  "Trousdale",
  "Brooks",
  "Carson",
  "Culberson",
  "Deaf Smith",
  "Moore",
  "Randall",
  "Swisher",
  "Beaver",
  "Emery",
  "Uintah",
  "Lancaster",
  "Middlesex",
  "Chelan",
  "Ferry",
  "Calhoun",
  "Cleburne",
  "Etowah",
  "Limestone",
  "Jackson",
  "Monroe",
  "Phillips",
  "Lassen",
  "Sacramento",
  "San Benito",
  "San Joaquin",
  "San Luis Obispo",
  "Sutter",
  "Yuba",
  "Cheyenne",
  "Kiowa",
  "Gulf",
  "Holmes",
  "Barrow",
  "Carroll",
  "Dade",
  "Haralson",
  "Heard",
  "Meriwether",
  "Monroe",
  "Putnam",
  "Randolph",
  "Troup",
  "Upson",
  "Walker",
  "Custer",
  "Christian",
  "Clay",
  "Edgar",
  "Effingham",
  "Fayette",
  "Greene",
  "Jasper",
  "Logan",
  "Marion",
  "Marshall",
  "Piatt",
  "Putnam",
  "Richland",
  "Sangamon",
  "Washington",
  "Crawford",
  "Daviess",
  "Dubois",
  "Fountain",
  "Jefferson",
  "Martin",
  "Sullivan",
  "Switzerland",
  "Vigo",
  "Warren",
  "Jefferson",
  "Decatur",
  "Nemaha",
  "Rawlins",
  "Thomas",
  "Wallace",
  "Adair",
  "Breckinridge",
  "Carroll",
  "Green",
  "Meade",
  "Menifee",
  "Metcalfe",
  "Monroe",
  "Montgomery",
  "Powell",
  "Rowan",
  "Shelby",
  "Taylor",
  "Plaquemines",
  "Talbot",
  "Andrew",
  "Audrain",
  "Buchanan",
  "Callaway",
  "Clark",
  "Lewis",
  "Linn",
  "Montgomery",
  "Nodaway",
  "Pike",
  "St. Charles",
  "Scotland",
  "Blaine",
  "Fergus",
  "Flathead",
  "Musselshell",
  "Petroleum",
  "Phillips",
  "Prairie",
  "Valley",
  "Yellowstone",
  "Franklin",
  "Gosper",
  "Hall",
  "Harlan",
  "Nemaha",
  "Nuckolls",
  "Pawnee",
  "Richardson",
  "Webster",
  "Washoe",
  "Ocean",
  "Salem",
  "Eddy",
  "Union",
  "Anson",
  "Chatham",
  "Halifax",
  "Johnston",
  "Lee",
  "Harney",
  "Lake",
  "Chesterfield",
  "Lancaster",
  "Butte",
  "Harding",
  "Jackson",
  "Jones",
  "Lyman",
  "Perkins",
  "Ziebach",
  "Giles",
  "Hamilton",
  "Hickman",
  "Robertson",
  "Rutherford",
  "Sumner",
  "Williamson",
  "Bailey",
  "Crockett",
  "Edwards",
  "Hartley",
  "Jim Hogg",
  "Polk",
  "Reeves",
  "Sherman",
  "Trinity",
  "Cache",
  "Sevier",
  "Weber",
  "Accomack",
  "Essex",
  "Northumberland",
  "Kittitas",
  "Mason",
  "Natrona",
  "Sheridan",
  "Chambers",
  "Jackson",
  "Randolph",
  "Winston",
  "Coconino",
  "Santa Cruz",
  "Kern",
  "Orange",
  "Plumas",
  "Otero",
  "Brevard",
  "Orange",
  "Osceola",
  "Seminole",
  "Floyd",
  "Gwinnett",
  "Henry",
  "Lamar",
  "Camas",
  "Canyon",
  "Franklin",
  "Idaho",
  "Minidoka",
  "Payette",
  "Adams",
  "Brown",
  "Cass",
  "Champaign",
  "Clark",
  "Coles",
  "Cumberland",
  "Douglas",
  "Hancock",
  "Henderson",
  "Jefferson",
  "Jersey",
  "Kankakee",
  "Kendall",
  "Macoupin",
  "Mason",
  "Menard",
  "Morgan",
  "Moultrie",
  "Peoria",
  "Shelby",
  "Tazewell",
  "Vermilion",
  "Woodford",
  "Brown",
  "Greene",
  "Jasper",
  "Monroe",
  "Orange",
  "Vermillion",
  "Washington",
  "Davis",
  "Lee",
  "Muscatine",
  "Atchison",
  "Brown",
  "Cheyenne",
  "Sheridan",
  "Bath",
  "Henry",
  "Kenton",
  "Marion",
  "Nelson",
  "Oldham",
  "Trimble",
  "Washington",
  "Caroline",
  "Kent",
  "Queen Anne's",
  "St. Louis",
  "Caldwell",
  "DeKalb",
  "Gentry",
  "Grundy",
  "Holt",
  "Iron",
  "Knox",
  "Macon",
  "Shelby",
  "Sullivan",
  "Chouteau",
  "Hill",
  "Lewis and Clark",
  "McCone",
  "Treasure",
  "Adams",
  "Clay",
  "Dundy",
  "Gage",
  "Garden",
  "Hitchcock",
  "Howard",
  "Jefferson",
  "Johnson",
  "Kearney",
  "Lancaster",
  "Merrick",
  "Otoe",
  "Phelps",
  "Red Willow",
  "Saline",
  "Thayer",
  "York",
  "Clark",
  "Eureka",
  "Lyon",
  "White Pine",
  "Atlantic",
  "Burlington",
  "Gloucester",
  "Rio Arriba",
  "San Juan",
  "Santa Fe",
  "Valencia",
  "Durham",
  "Montgomery",
  "Nash",
  "Richmond",
  "Union",
  "Montgomery",
  "Noble",
  "Cimarron",
  "Douglas",
  "Lane",
  "Abbeville",
  "Chester",
  "Newberry",
  "Charles Mix",
  "Custer",
  "Dewey",
  "Mellette",
  "Davidson",
  "Dickson",
  "Jackson",
  "Lincoln",
  "Roane",
  "Smith",
  "Wayne",
  "Wilson",
  "Castro",
  "Dallam",
  "Loving",
  "Martin",
  "Midland",
  "Ward",
  "Winkler",
  "Zapata",
  "Carbon",
  "Duchesne",
  "Chesterfield",
  "Gloucester",
  "Goochland",
  "Hanover",
  "James City",
  "Surry",
  "Sussex",
  "Newport News city",
  "Wood",
  "Fremont",
  "Park",
  "Platte",
  "Lee",
  "Marshall",
  "Lake",
  "Napa",
  "Stanislaus",
  "Ventura",
  "Crowley",
  "Larimer",
  "Las Animas",
  "Montezuma",
  "Montrose",
  "Indian River",
  "Butts",
  "Gordon",
  "Morgan",
  "Newton",
  "Oglethorpe",
  "Paulding",
  "Pike",
  "Polk",
  "Spalding",
  "Adams",
  "Bingham",
  "Gem",
  "Washington",
  "Carroll",
  "Cook",
  "Ford",
  "Grundy",
  "Iroquois",
  "LaSalle",
  "Livingston",
  "McLean",
  "Schuyler",
  "Scott",
  "Stark",
  "Warren",
  "Whiteside",
  "Will",
  "Bartholomew",
  "Benton",
  "Clay",
  "Dearborn",
  "Decatur",
  "Fayette",
  "Hendricks",
  "Jackson",
  "Lake",
  "Lawrence",
  "Montgomery",
  "Morgan",
  "Newton",
  "Owen",
  "Parke",
  "Porter",
  "Ripley",
  "Tippecanoe",
  "Appanoose",
  "Calhoun",
  "Decatur",
  "Henry",
  "Jasper",
  "Louisa",
  "Lucas",
  "Monroe",
  "Polk",
  "Pottawattamie",
  "Wapello",
  "Washington",
  "Wayne",
  "Doniphan",
  "Sherman",
  "Allen",
  "Anderson",
  "Boyle",
  "Campbell",
  "Casey",
  "Clay",
  "Fleming",
  "Franklin",
  "Gallatin",
  "Hardin",
  "Hart",
  "Jackson",
  "Larue",
  "Laurel",
  "Lewis",
  "Madison",
  "Mercer",
  "Pulaski",
  "Rockcastle",
  "Whitley",
  "Anne Arundel",
  "Charles",
  "Prince George's",
  "Wicomico",
  "Aitkin",
  "Beltrami",
  "Cass",
  "Itasca",
  "Koochiching",
  "Adair",
  "Clinton",
  "Daviess",
  "Harrison",
  "Mercer",
  "Putnam",
  "Schuyler",
  "Shannon",
  "Worth",
  "Carbon",
  "Fallon",
  "Lake",
  "Ravalli",
  "Richland",
  "Stillwater",
  "Sweet Grass",
  "Blaine",
  "Colfax",
  "Custer",
  "Douglas",
  "Fillmore",
  "Frontier",
  "Hamilton",
  "Holt",
  "Platte",
  "Sarpy",
  "Seward",
  "Sherman",
  "Thomas",
  "Mineral",
  "Camden",
  "Cumberland",
  "Middlesex",
  "San Miguel",
  "Torrance",
  "Moore",
  "Guernsey",
  "Scioto",
  "Warren",
  "Deschutes",
  "Klamath",
  "Wasco",
  "Montgomery",
  "Greenville",
  "Pickens",
  "Spartanburg",
  "York",
  "Bennett",
  "Brule",
  "Corson",
  "Douglas",
  "Fall River",
  "Gregory",
  "Hughes",
  "Stanley",
  "Sully",
  "Tripp",
  "Yankton",
  "Anderson",
  "Bedford",
  "Cannon",
  "Lawrence",
  "Lewis",
  "Marshall",
  "Sevier",
  "Glasscock",
  "Hardin",
  "Howard",
  "Kenedy",
  "Maverick",
  "Newton",
  "San Saba",
  "Schleicher",
  "Upton",
  "Yoakum",
  "Grand",
  "Iron",
  "Greensville",
  "King George",
  "Powhatan",
  "Prince William",
  "Richmond",
  "Stafford",
  "Klickitat",
  "Walla Walla",
  "Gilmer",
  "Lincoln",
  "Putnam",
  "Wayne",
  "Big Horn",
  "Niobrara",
  "Washakie",
  "Apache",
  "Contra Costa",
  "Inyo",
  "Mariposa",
  "San Mateo",
  "Sierra",
  "Boulder",
  "Delta",
  "Kit Carson",
  "La Plata",
  "Moffat",
  "Pueblo",
  "Sarasota",
  "Bartow",
  "Chattooga",
  "Cherokee",
  "Elbert",
  "Murray",
  "Blaine",
  "Boise",
  "Bonneville",
  "Butte",
  "Clearwater",
  "Jerome",
  "Lemhi",
  "Boone",
  "Bureau",
  "DeKalb",
  "Fulton",
  "Henry",
  "Knox",
  "McHenry",
  "Mercer",
  "Rock Island",
  "Adams",
  "Boone",
  "Carroll",
  "Cass",
  "Clinton",
  "Franklin",
  "Grant",
  "Hamilton",
  "Hancock",
  "Howard",
  "Huntington",
  "Jennings",
  "Johnson",
  "LaPorte",
  "Madison",
  "Marion",
  "Miami",
  "Putnam",
  "Rush",
  "Scott",
  "Shelby",
  "Starke",
  "Tipton",
  "Union",
  "Wabash",
  "Wells",
  "White",
  "Audubon",
  "Black Hawk",
  "Boone",
  "Bremer",
  "Carroll",
  "Cedar",
  "Crawford",
  "Dallas",
  "Des Moines",
  "Fremont",
  "Greene",
  "Hamilton",
  "Harrison",
  "Humboldt",
  "Ida",
  "Johnson",
  "Keokuk",
  "Mahaska",
  "Marion",
  "Mills",
  "Page",
  "Pocahontas",
  "Scott",
  "Shelby",
  "Story",
  "Warren",
  "Webster",
  "Boone",
  "Carter",
  "Clark",
  "Cumberland",
  "Estill",
  "Fayette",
  "Floyd",
  "Garrard",
  "Grant",
  "Grayson",
  "Greenup",
  "Harrison",
  "Jessamine",
  "Johnson",
  "Knox",
  "Lawrence",
  "Nicholas",
  "Owen",
  "Owsley",
  "Pendleton",
  "Robertson",
  "Russell",
  "Scott",
  "Wayne",
  "Wolfe",
  "Woodford",
  "Montgomery",
  "St. Mary's",
  "Clearwater",
  "Crow Wing",
  "Morrison",
  "Golden Valley",
  "Lincoln",
  "Powder River",
  "Roosevelt",
  "Boyd",
  "Buffalo",
  "Butler",
  "Cass",
  "Cheyenne",
  "Dawson",
  "Dodge",
  "Hayes",
  "Keith",
  "Keya Paha",
  "Loup",
  "Nance",
  "Polk",
  "Saunders",
  "Sheridan",
  "Sioux",
  "Thurston",
  "Mercer",
  "Monmouth",
  "Catron",
  "Guadalupe",
  "Otero",
  "Alamance",
  "Granville",
  "Polk",
  "Transylvania",
  "Vance",
  "Billings",
  "Bowman",
  "Hettinger",
  "McKenzie",
  "Slope",
  "Fairfield",
  "Hamilton",
  "Jackson",
  "Pike",
  "Putnam",
  "Ross",
  "Van Wert",
  "Vinton",
  "Washington",
  "Clackamas",
  "Crook",
  "Sherman",
  "Wheeler",
  "Berks",
  "Bucks",
  "Anderson",
  "Laurens",
  "Bon Homme",
  "Faulk",
  "Hand",
  "Hyde",
  "Lawrence",
  "Potter",
  "Sanborn",
  "Clay",
  "Grundy",
  "Knox",
  "Loudon",
  "Marion",
  "Moore",
  "Scott",
  "Warren",
  "White",
  "Blanco",
  "Childress",
  "Crane",
  "Eastland",
  "Ector",
  "Foard",
  "Hall",
  "King",
  "Knox",
  "McMullen",
  "Parmer",
  "Sabine",
  "Scurry",
  "Sterling",
  "Stonewall",
  "Morgan",
  "Sanpete",
  "Wayne",
  "Caroline",
  "Dinwiddie",
  "Fairfax",
  "Loudoun",
  "Hampton city",
  "Norfolk city",
  "Portsmouth city",
  "Asotin",
  "Franklin",
  "Snohomish",
  "Stevens",
  "Cabell",
  "Jackson",
  "Kanawha",
  "Pleasants",
  "Ritchie",
  "Douglas",
  "Albany",
  "Converse",
  "Crook",
  "Hot Springs",
  "Johnson",
  "Mathews",
  "Cherokee",
  "DeKalb",
  "Dallas",
  "Calaveras",
  "Monterey",
  "Dolores",
  "Garfield",
  "Logan",
  "Rio Blanco",
  "New Castle",
  "Manatee",
  "Coweta",
  "Douglas",
  "Fulton",
  "Hart",
  "Oconee",
  "Shoshone",
  "Valley",
  "Kane",
  "Lake",
  "McDonough",
  "Stephenson",
  "Winnebago",
  "Allen",
  "Blackford",
  "Delaware",
  "Elkhart",
  "Fulton",
  "Jay",
  "LaGrange",
  "Marshall",
  "Pulaski",
  "St. Joseph",
  "Adair",
  "Adams",
  "Benton",
  "Cerro Gordo",
  "Clarke",
  "Clay",
  "Clinton",
  "Franklin",
  "Grundy",
  "Guthrie",
  "Hardin",
  "Iowa",
  "Jackson",
  "Madison",
  "Marshall",
  "Monona",
  "Montgomery",
  "Plymouth",
  "Ringgold",
  "Sac",
  "Sioux",
  "Tama",
  "Taylor",
  "Union",
  "Wright",
  "Bourbon",
  "Bracken",
  "Breathitt",
  "Clinton",
  "Lee",
  "Lincoln",
  "McCreary",
  "Magoffin",
  "Mason",
  "Morgan",
  "Perry",
  "Sabine",
  "Winn",
  "Allegany",
  "Calvert",
  "Cecil",
  "Berrien",
  "Mackinac",
  "St. Joseph",
  "Blue Earth",
  "Carlton",
  "Kimble",
  "Faribault",
  "Le Sueur",
  "McLeod",
  "Martin",
  "Pine",
  "Beaverhead",
  "Cascade",
  "Daniels",
  "Gallatin",
  "Missoula",
  "Sheridan",
  "Toole",
  "Wheatland",
  "Wibaux",
  "Arthur",
  "Banner",
  "Boone",
  "Box Butte",
  "Brown",
  "Burt",
  "Cedar",
  "Chase",
  "Cuming",
  "Dakota",
  "Dawes",
  "Deuel",
  "Garfield",
  "Greeley",
  "Knox",
  "Lincoln",
  "Logan",
  "McPherson",
  "Morrill",
  "Perkins",
  "Pierce",
  "Rock",
  "Stanton",
  "Valley",
  "Washington",
  "Wheeler",
  "Douglas",
  "Hudson",
  "Somerset",
  "Lincoln",
  "Columbia",
  "Dutchess",
  "Greene",
  "Orange",
  "Rensselaer",
  "Richmond",
  "Suffolk",
  "Ulster",
  "Westchester",
  "Cabarrus",
  "Franklin",
  "Wake",
  "Warren",
  "Dunn",
  "Sioux",
  "Brown",
  "Butler",
  "Champaign",
  "Coshocton",
  "Defiance",
  "Delaware",
  "Franklin",
  "Hardin",
  "Harrison",
  "Lawrence",
  "Lucas",
  "Madison",
  "Marion",
  "Morgan",
  "Muskingum",
  "Paulding",
  "Pickaway",
  "Sandusky",
  "Seneca",
  "Shelby",
  "Tuscarawas",
  "Union",
  "Wood",
  "Wyandot",
  "Greer",
  "Jackson",
  "Johnston",
  "Jefferson",
  "Multnomah",
  "Cumberland",
  "Greene",
  "Juniata",
  "Perry",
  "Beadle",
  "Buffalo",
  "Clay",
  "Davison",
  "Hanson",
  "Jerauld",
  "Todd",
  "Bledsoe",
  "Campbell",
  "Claiborne",
  "Cocke",
  "Coffee",
  "DeKalb",
  "Franklin",
  "Hamblen",
  "Jefferson",
  "McMinn",
  "Meigs",
  "Monroe",
  "Overton",
  "Rhea",
  "Sequatchie",
  "Baylor",
  "Brown",
  "Coke",
  "Dickens",
  "Hardeman",
  "Irion",
  "Jeff Davis",
  "Kendall",
  "Kent",
  "Lampasas",
  "Mason",
  "Menard",
  "Mills",
  "Mitchell",
  "Motley",
  "Palo Pinto",
  "Parker",
  "Rains",
  "Real",
  "Shackelford",
  "Stephens",
  "Young",
  "Garfield",
  "Summit",
  "Wasatch",
  "Amelia",
  "Buckingham",
  "Fluvanna",
  "Henry",
  "Lunenburg",
  "Mecklenburg",
  "Orange",
  "Westmoreland",
  "York",
  "Colonial Heights city",
  "Clark",
  "Columbia",
  "Pacific",
  "Pierce",
  "Berkeley",
  "Braxton",
  "Brooke",
  "Hancock",
  "Jefferson",
  "Marion",
  "Morgan",
  "Tyler",
  "Wirt",
  "Bayfield",
  "Oneida",
  "Price",
  "Rock",
  "Rusk",
  "Sawyer",
  "Walworth",
  "Washburn",
  "Campbell",
  "Carbon",
  "Goshen",
  "Weston",
  "Bradley",
  "Garland",
  "Ouachita",
  "Van Buren",
  "Alameda",
  "Mono",
  "Adams",
  "Arapahoe",
  "Broomfield",
  "Jefferson",
  "Lincoln",
  "Morgan",
  "Sedgwick",
  "Washington",
  "Weld",
  "Yuma",
  "Fairfield",
  "Franklin",
  "Madison",
  "Quitman",
  "Stephens",
  "Bonner",
  "Clark",
  "Kootenai",
  "Nez Perce",
  "DuPage",
  "Ogle",
  "DeKalb",
  "Kosciusko",
  "Noble",
  "Steuben",
  "Wayne",
  "Whitley",
  "Buchanan",
  "Buena Vista",
  "Butler",
  "Cass",
  "Cherokee",
  "Clayton",
  "Delaware",
  "Hancock",
  "Jones",
  "Kossuth",
  "Linn",
  "Mitchell",
  "Poweshiek",
  "Winnebago",
  "Winneshiek",
  "Woodbury",
  "Bell",
  "Boyd",
  "Webster",
  "Hancock",
  "Baltimore",
  "Harford",
  "Washington",
  "Suffolk",
  "Baraga",
  "Bay",
  "Cheboygan",
  "Gogebic",
  "Hillsdale",
  "Monroe",
  "Oakland",
  "Oscoda",
  "Otsego",
  "Ottawa",
  "Van Buren",
  "Wayne",
  "Brown",
  "Cottonwood",
  "Freeborn",
  "Hubbard",
  "Mille Lacs",
  "Nicollet",
  "Ramsey",
  "Renville",
  "Sibley",
  "Waseca",
  "Oregon",
  "St. Louis city",
  "Broadwater",
  "Madison",
  "Meagher",
  "Mineral",
  "Pondera",
  "Antelope",
  "Dixon",
  "Kimball",
  "Madison",
  "Scotts Bluff",
  "Wayne",
  "Esmeralda",
  "Bergen",
  "Essex",
  "Hunterdon",
  "Passaic",
  "Warren",
  "Colfax",
  "Mora",
  "Bronx",
  "Queens",
  "Saratoga",
  "Wayne",
  "Caswell",
  "Mecklenburg",
  "Orange",
  "Randolph",
  "Stanly",
  "Wilkes",
  "Adams",
  "Golden Valley",
  "Grant",
  "McIntosh",
  "Sargent",
  "Stark",
  "Adams",
  "Athens",
  "Auglaize",
  "Belmont",
  "Carroll",
  "Clark",
  "Clermont",
  "Clinton",
  "Darke",
  "Fayette",
  "Greene",
  "Hancock",
  "Henry",
  "Highland",
  "Hocking",
  "Huron",
  "Jefferson",
  "Licking",
  "Logan",
  "Mercer",
  "Monroe",
  "Morrow",
  "Ottawa",
  "Perry",
  "Preble",
  "Williams",
  "Cherokee",
  "Cotton",
  "Marshall",
  "Pushmataha",
  "Woods",
  "Allegheny",
  "Armstrong",
  "Beaver",
  "Butler",
  "Centre",
  "Chester",
  "Clinton",
  "Delaware",
  "Fayette",
  "Franklin",
  "Jefferson",
  "Lackawanna",
  "Lancaster",
  "Lawrence",
  "Luzerne",
  "Mifflin",
  "Schuylkill",
  "Washington",
  "Westmoreland",
  "Aurora",
  "Campbell",
  "Hutchinson",
  "Lincoln",
  "McCook",
  "McPherson",
  "Marshall",
  "Miner",
  "Oglala Lakota",
  "Roberts",
  "Spink",
  "Turner",
  "Union",
  "Walworth",
  "Blount",
  "Bradley",
  "Carter",
  "Fentress",
  "Grainger",
  "Greene",
  "Hancock",
  "Hawkins",
  "Polk",
  "Putnam",
  "Unicoi",
  "Union",
  "Van Buren",
  "Angelina",
  "Burnet",
  "Garza",
  "Gregg",
  "Hemphill",
  "Henderson",
  "Jack",
  "Marion",
  "Somervell",
  "Kane",
  "Piute",
  "Albemarle",
  "Brunswick",
  "Clarke",
  "Craig",
  "Culpeper",
  "Louisa",
  "Madison",
  "Rappahannock",
  "Hopewell city",
  "Adams",
  "Cowlitz",
  "Garfield",
  "Island",
  "Lewis",
  "Pend Oreille",
  "Skamania",
  "Boone",
  "Calhoun",
  "Doddridge",
  "Harrison",
  "Marshall",
  "Mineral",
  "Monongalia",
  "Nicholas",
  "Ohio",
  "Roane",
  "Adams",
  "Crawford",
  "Eau Claire",
  "Forest",
  "Green",
  "Jefferson",
  "Juneau",
  "La Crosse",
  "Lafayette",
  "Milwaukee",
  "Racine",
  "Vernon",
  "Waukesha",
  "Sweetwater",
  "Williamsburg city",
  "Columbia",
  "Howard",
  "Montgomery",
  "Pike",
  "Polk",
  "Scott",
  "Sharp",
  "Union",
  "Alpine",
  "Archuleta",
  "Douglas",
  "Elbert",
  "Fremont",
  "Gunnison",
  "Phillips",
  "Routt",
  "Middlesex",
  "New Haven",
  "Baldwin",
  "Banks",
  "Chattahoochee",
  "Dawson",
  "Forsyth",
  "Hall",
  "Jackson",
  "Jones",
  "Muscogee",
  "Pickens",
  "Union",
  "Bear Lake",
  "Jo Daviess",
  "Lee",
  "Henry",
  "Randolph",
  "Chickasaw",
  "Dubuque",
  "Emmet",
  "Fayette",
  "Floyd",
  "Howard",
  "Lyon",
  "O'Brien",
  "Osceola",
  "Palo Alto",
  "Worth",
  "Leslie",
  "Pike",
  "Jackson",
  "Frederick",
  "Garrett",
  "Howard",
  "Barnstable",
  "Dukes",
  "Essex",
  "Nantucket",
  "Alcona",
  "Alpena",
  "Barry",
  "Branch",
  "Calhoun",
  "Cass",
  "Chippewa",
  "Clinton",
  "Eaton",
  "Emmet",
  "Genesee",
  "Gladwin",
  "Gratiot",
  "Houghton",
  "Huron",
  "Ingham",
  "Jackson",
  "Kalamazoo",
  "Kalkaska",
  "Lapeer",
  "Lenawee",
  "Livingston",
  "Marquette",
  "Midland",
  "Missaukee",
  "Montmorency",
  "Ogemaw",
  "Ontonagon",
  "Roscommon",
  "Saginaw",
  "Sanilac",
  "Shiawassee",
  "Tuscola",
  "Washtenaw",
  "Carver",
  "Dakota",
  "Dodge",
  "Fillmore",
  "Goodhue",
  "Hennepin",
  "Jackson",
  "Kandiyohi",
  "Lake",
  "Lincoln",
  "Lyon",
  "Meeker",
  "Mower",
  "Norman",
  "Olmsted",
  "Redwood",
  "Rice",
  "Scott",
  "Stearns",
  "Steele",
  "Wabasha",
  "Washington",
  "Watonwan",
  "Winona",
  "Wright",
  "Yellow Medicine",
  "Granite",
  "Jefferson",
  "Judith Basin",
  "Liberty",
  "Powell",
  "Teton",
  "Storey",
  "Carson City",
  "Sussex",
  "Union",
  "Bernalillo",
  "De Baca",
  "Taos",
  "Albany",
  "Allegany",
  "Cayuga",
  "Chautauqua",
  "Chemung",
  "Erie",
  "Genesee",
  "Kings",
  "Lewis",
  "Livingston",
  "Monroe",
  "Onondaga",
  "Ontario",
  "Oswego",
  "St. Lawrence",
  "Schenectady",
  "Seneca",
  "Tioga",
  "Warren",
  "Washington",
  "Yates",
  "Caldwell",
  "Catawba",
  "Cherokee",
  "Cleveland",
  "Davidson",
  "Davie",
  "Gaston",
  "Guilford",
  "Henderson",
  "Iredell",
  "Lincoln",
  "Rockingham",
  "Rowan",
  "Yadkin",
  "Dickey",
  "Emmons",
  "LaMoure",
  "Richland",
  "Allen",
  "Ashtabula",
  "Columbiana",
  "Crawford",
  "Cuyahoga",
  "Fulton",
  "Geauga",
  "Holmes",
  "Knox",
  "Lake",
  "Lorain",
  "Mahoning",
  "Medina",
  "Miami",
  "Stark",
  "Summit",
  "Trumbull",
  "Wayne",
  "Latimer",
  "Yamhill",
  "Adams",
  "Blair",
  "Bradford",
  "Cambria",
  "Cameron",
  "Carbon",
  "Clarion",
  "Clearfield",
  "Crawford",
  "Forest",
  "Huntingdon",
  "Indiana",
  "Lebanon",
  "Lehigh",
  "Lycoming",
  "Mercer",
  "Monroe",
  "Northampton",
  "Philadelphia",
  "Potter",
  "Somerset",
  "Venango",
  "Warren",
  "Wayne",
  "Wyoming",
  "Cherokee",
  "Oconee",
  "Brown",
  "Edmunds",
  "Kingsbury",
  "Minnehaha",
  "Cumberland",
  "Johnson",
  "Morgan",
  "Pickett",
  "Sullivan",
  "Washington",
  "Camp",
  "Hopkins",
  "Morris",
  "Titus",
  "Wood",
  "Rich",
  "Amherst",
  "Bedford",
  "Botetourt",
  "Carroll",
  "Charlotte",
  "Cumberland",
  "Fauquier",
  "Frederick",
  "Greene",
  "Halifax",
  "Lee",
  "Nelson",
  "Nottoway",
  "Page",
  "Prince Edward",
  "Rockbridge",
  "Scott",
  "Shenandoah",
  "Spotsylvania",
  "Warren",
  "Petersburg city",
  "Skagit",
  "Spokane",
  "Whitman",
  "Barbour",
  "Fayette",
  "Grant",
  "Hardy",
  "Logan",
  "Preston",
  "Randolph",
  "Tucker",
  "Upshur",
  "Wetzel",
  "Ashland",
  "Barron",
  "Buffalo",
  "Chippewa",
  "Clark",
  "Columbia",
  "Dane",
  "Dodge",
  "Dunn",
  "Florence",
  "Fond du Lac",
  "Grant",
  "Green Lake",
  "Iowa",
  "Jackson",
  "Kenosha",
  "Lincoln",
  "Marinette",
  "Marquette",
  "Oconto",
  "Pepin",
  "Richland",
  "St. Croix",
  "Sauk",
  "Sheboygan",
  "Taylor",
  "Trempealeau",
  "Washington",
  "Laramie",
  "Lincoln",
  "Sublette",
  "Teton",
  "New York",
  "Bristol",
  "Calhoun",
  "Searcy",
  "Sevier",
  "Humboldt",
  "El Paso",
  "Huerfano",
  "Saguache",
  "Hartford",
  "District of Columbia",
  "Fannin",
  "Hancock",
  "Lincoln",
  "Lumpkin",
  "Rabun",
  "Taliaferro",
  "Towns",
  "Boundary",
  "Jefferson",
  "Oneida",
  "Power",
  "Allamakee",
  "Dickinson",
  "Martin",
  "Cumberland",
  "Sagadahoc",
  "York",
  "Hampden",
  "Middlesex",
  "Norfolk",
  "Allegan",
  "Clare",
  "Dickinson",
  "Ionia",
  "Iosco",
  "Isabella",
  "Kent",
  "Macomb",
  "Mason",
  "Menominee",
  "Montcalm",
  "Muskegon",
  "Newaygo",
  "Presque Isle",
  "St. Clair",
  "Schoolcraft",
  "Wexford",
  "Chippewa",
  "Chisago",
  "Clay",
  "Isanti",
  "Kanabec",
  "Lac qui Parle",
  "Otter Tail",
  "Pipestone",
  "Pope",
  "Rock",
  "Sherburne",
  "Swift",
  "Todd",
  "Wadena",
  "Park",
  "Grant",
  "Hooker",
  "Rockingham",
  "Morris",
  "Broome",
  "Cattaraugus",
  "Chenango",
  "Clinton",
  "Cortland",
  "Delaware",
  "Essex",
  "Franklin",
  "Fulton",
  "Herkimer",
  "Jefferson",
  "Madison",
  "Montgomery",
  "Nassau",
  "Niagara",
  "Oneida",
  "Orleans",
  "Otsego",
  "Schoharie",
  "Schuyler",
  "Steuben",
  "Sullivan",
  "Tompkins",
  "Wyoming",
  "Alexander",
  "Alleghany",
  "Avery",
  "Burke",
  "Clay",
  "Forsyth",
  "Graham",
  "Haywood",
  "Jackson",
  "McDowell",
  "Macon",
  "Mitchell",
  "Person",
  "Rutherford",
  "Stokes",
  "Surry",
  "Swain",
  "Watauga",
  "Burleigh",
  "Cass",
  "Kidder",
  "Logan",
  "McLean",
  "Mercer",
  "Morton",
  "Oliver",
  "Ransom",
  "Stutsman",
  "Wells",
  "Ashland",
  "Erie",
  "Portage",
  "Richland",
  "Adair",
  "Hood River",
  "Linn",
  "Marion",
  "Washington",
  "Bedford",
  "Columbia",
  "Dauphin",
  "Elk",
  "Fulton",
  "McKean",
  "Montour",
  "Northumberland",
  "Pike",
  "Snyder",
  "Sullivan",
  "Susquehanna",
  "Tioga",
  "Union",
  "York",
  "Kent",
  "Newport",
  "Brookings",
  "Clark",
  "Codington",
  "Day",
  "Deuel",
  "Grant",
  "Hamlin",
  "Lake",
  "Moody",
  "Appomattox",
  "Augusta",
  "Bath",
  "Bland",
  "Buchanan",
  "Campbell",
  "Dickenson",
  "Franklin",
  "Giles",
  "Grayson",
  "Montgomery",
  "Patrick",
  "Pittsylvania",
  "Pulaski",
  "Rockingham",
  "Russell",
  "Smyth",
  "Tazewell",
  "Washington",
  "Wise",
  "Wythe",
  "Franklin city",
  "Richmond city",
  "King",
  "Whatcom",
  "Greenbrier",
  "Hampshire",
  "Mercer",
  "Mingo",
  "Monroe",
  "Raleigh",
  "Summers",
  "Taylor",
  "Burnett",
  "Door",
  "Kewaunee",
  "Langlade",
  "Monroe",
  "Ozaukee",
  "Pierce",
  "Waupaca",
  "Waushara",
  "Wood",
  "Alexandria city",
  "Falls Church city",
  "Manassas city",
  "Carroll",
  "Madison",
  "Stone",
  "Marin",
  "San Francisco",
  "Eagle",
  "San Miguel",
  "New London",
  "Clarke",
  "Clayton",
  "Cobb",
  "DeKalb",
  "Gilmer",
  "Habersham",
  "McDuffie",
  "White",
  "Harlan",
  "Knott",
  "Knox",
  "Carroll",
  "Bristol",
  "Plymouth",
  "Antrim",
  "Arenac",
  "Benzie",
  "Charlevoix",
  "Delta",
  "Grand Traverse",
  "Iron",
  "Lake",
  "Leelanau",
  "Manistee",
  "Mecosta",
  "Oceana",
  "Osceola",
  "Anoka",
  "Becker",
  "Benton",
  "Big Stone",
  "Cook",
  "Douglas",
  "Grant",
  "Houston",
  "Kittson",
  "Lake of the Woods",
  "Mahnomen",
  "Marshall",
  "Murray",
  "Nobles",
  "Pennington",
  "Polk",
  "Red Lake",
  "Roseau",
  "Stevens",
  "Traverse",
  "Wilkin",
  "Strafford",
  "Harding",
  "Putnam",
  "Rockland",
  "Ashe",
  "Buncombe",
  "Madison",
  "Yancey",
  "Barnes",
  "Benson",
  "Burke",
  "Cavalier",
  "Divide",
  "Eddy",
  "Foster",
  "Grand Forks",
  "Griggs",
  "McHenry",
  "Nelson",
  "Pembina",
  "Pierce",
  "Ramsey",
  "Rolette",
  "Sheridan",
  "Steele",
  "Towner",
  "Traill",
  "Walsh",
  "Williams",
  "Polk",
  "Erie",
  "Washington",
  "Daggett",
  "Floyd",
  "Highland",
  "Fairfax city",
  "Manassas Park city",
  "Kitsap",
  "Thurston",
  "Clay",
  "Pendleton",
  "Webster",
  "Brown",
  "Calumet",
  "Iron",
  "Manitowoc",
  "Marathon",
  "Outagamie",
  "Polk",
  "Portage",
  "Shawano",
  "Winnebago",
  "Uinta",
  "Galax city",
  "Boone",
  "Marion",
  "Conejos",
  "Costilla",
  "Custer",
  "Denver",
  "Jackson",
  "Pitkin",
  "Teller",
  "Tolland",
  "Windham",
  "Fremont",
  "Teton",
  "Androscoggin",
  "Kennebec",
  "Penobscot",
  "Washington",
  "Baltimore city",
  "Franklin",
  "Hampshire",
  "Worcester",
  "Alger",
  "Crawford",
  "Deer Lodge",
  "Glacier",
  "Silver Bow",
  "Belknap",
  "Cheshire",
  "Hillsborough",
  "Merrimack",
  "Sullivan",
  "Cibola",
  "Los Alamos",
  "McKinley",
  "Bottineau",
  "Mountrail",
  "Renville",
  "Ward",
  "Clatsop",
  "Coos",
  "Lincoln",
  "Tillamook",
  "Chittenden",
  "Alleghany",
  "Arlington",
  "Roanoke",
  "Charlottesville city",
  "Emporia city",
  "Fredericksburg city",
  "Clallam",
  "Grays Harbor",
  "Jefferson",
  "Mason",
  "Wahkiakum",
  "Lewis",
  "Pocahontas",
  "Vilas",
  "Buena Vista city",
  "Covington city",
  "Lexington city",
  "Winchester city",
  "Newton",
  "Del Norte",
  "Santa Cruz",
  "Alamosa",
  "Chaffee",
  "Mineral",
  "Ouray",
  "Rio Grande",
  "Litchfield",
  "Bannock",
  "Benewah",
  "Caribou",
  "Latah",
  "Letcher",
  "Lincoln",
  "Waldo",
  "Berkshire",
  "Luce",
  "Carroll",
  "Grafton",
  "Benton",
  "Columbia",
  "Providence",
  "Rutland",
  "Washington",
  "Windham",
  "Windsor",
  "Danville city",
  "Lynchburg city",
  "Martinsville city",
  "Roanoke city",
  "Salem city",
  "San Juan",
  "McDowell",
  "Wyoming",
  "Radford city",
  "Staunton city",
  "Waynesboro city",
  "Clear Creek",
  "Gilpin",
  "Hinsdale",
  "Lake",
  "Park",
  "San Juan",
  "Lewis",
  "Madison",
  "Oxford",
  "Somerset",
  "Keweenaw",
  "Coos",
  "Curry",
  "Addison",
  "Bennington",
  "Caledonia",
  "Bristol city",
  "Harrisonburg city",
  "Norton city",
  "Menominee",
  "Grand",
  "Summit",
  "Aroostook",
  "Franklin",
  "Hamilton",
  "Grand Isle",
  "Orleans",
  "Piscataquis",
  "Essex",
  "Franklin",
  "Orange",
  "Lamoille",
];

const states = [
  "SC",
  "AZ",
  "LA",
  "SC",
  "FL",
  "LA",
  "LA",
  "LA",
  "LA",
  "MS",
  "NC",
  "SC",
  "AZ",
  "GA",
  "LA",
  "LA",
  "LA",
  "LA",
  "NC",
  "NC",
  "SC",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "LA",
  "LA",
  "MS",
  "TX",
  "TX",
  "TX",
  "AL",
  "AZ",
  "CA",
  "CA",
  "FL",
  "FL",
  "FL",
  "FL",
  "GA",
  "LA",
  "LA",
  "LA",
  "LA",
  "NC",
  "SC",
  "TX",
  "TX",
  "AZ",
  "FL",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "LA",
  "LA",
  "LA",
  "NC",
  "NC",
  "NC",
  "NC",
  "SC",
  "TX",
  "TX",
  "TX",
  "TX",
  "AZ",
  "AZ",
  "CA",
  "FL",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "LA",
  "LA",
  "MS",
  "MS",
  "NC",
  "NC",
  "NC",
  "SC",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "AL",
  "CA",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "GA",
  "ID",
  "LA",
  "LA",
  "LA",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "NM",
  "NC",
  "NC",
  "SC",
  "SC",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "AL",
  "AL",
  "AR",
  "AR",
  "CA",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "LA",
  "LA",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MO",
  "MO",
  "NM",
  "NM",
  "NM",
  "NC",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AR",
  "CA",
  "CA",
  "CA",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "ID",
  "LA",
  "LA",
  "LA",
  "LA",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MO",
  "NC",
  "NC",
  "NC",
  "SC",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "IL",
  "KY",
  "IL",
  "KS",
  "KY",
  "LA",
  "LA",
  "LA",
  "LA",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "NM",
  "NM",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OR",
  "SC",
  "SC",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AZ",
  "AZ",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "IL",
  "IL",
  "IL",
  "IL",
  "KS",
  "KS",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "LA",
  "LA",
  "LA",
  "LA",
  "LA",
  "LA",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "NC",
  "NC",
  "NC",
  "NC",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OR",
  "SC",
  "SC",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "UT",
  "VA",
  "VA",
  "WA",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AZ",
  "AZ",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "CO",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "LA",
  "LA",
  "LA",
  "LA",
  "LA",
  "LA",
  "LA",
  "MD",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "NV",
  "NC",
  "NC",
  "NC",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OR",
  "OR",
  "SC",
  "SC",
  "SC",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AZ",
  "AZ",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "IL",
  "IL",
  "IL",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "LA",
  "LA",
  "LA",
  "LA",
  "LA",
  "MD",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MS",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "NV",
  "NM",
  "NM",
  "NC",
  "NC",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "OR",
  "OR",
  "OR",
  "SC",
  "SC",
  "SC",
  "SC",
  "SC",
  "SC",
  "SC",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "VA",
  "VA",
  "VA",
  "WA",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "CA",
  "CA",
  "CO",
  "CO",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IN",
  "IN",
  "IN",
  "IN",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "LA",
  "LA",
  "LA",
  "LA",
  "MD",
  "MS",
  "MS",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MT",
  "MT",
  "NE",
  "NV",
  "NJ",
  "NM",
  "NM",
  "NC",
  "NC",
  "NC",
  "NC",
  "OK",
  "OK",
  "OK",
  "OR",
  "OR",
  "SC",
  "SC",
  "SC",
  "SC",
  "SC",
  "SC",
  "SD",
  "SD",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "CO",
  "DE",
  "DE",
  "FL",
  "FL",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "ID",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IN",
  "IN",
  "IA",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KY",
  "KY",
  "LA",
  "LA",
  "LA",
  "LA",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "NE",
  "NV",
  "NV",
  "NV",
  "NV",
  "NM",
  "NM",
  "NC",
  "NC",
  "OH",
  "OH",
  "OR",
  "SC",
  "SC",
  "SC",
  "SD",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "UT",
  "VA",
  "VA",
  "WA",
  "WA",
  "AL",
  "AL",
  "AL",
  "AL",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "CO",
  "CO",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IA",
  "KS",
  "KS",
  "KS",
  "KS",
  "KS",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "LA",
  "MD",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NV",
  "NJ",
  "NJ",
  "NM",
  "NM",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "OR",
  "OR",
  "SC",
  "SC",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "UT",
  "VA",
  "VA",
  "VA",
  "WA",
  "WV",
  "WY",
  "WY",
  "AL",
  "AL",
  "AL",
  "AL",
  "AZ",
  "AZ",
  "CA",
  "CA",
  "CA",
  "CO",
  "FL",
  "FL",
  "FL",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "ID",
  "ID",
  "ID",
  "ID",
  "ID",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IA",
  "IA",
  "IA",
  "KS",
  "KS",
  "KS",
  "KS",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "MD",
  "MD",
  "MD",
  "MN",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NV",
  "NV",
  "NV",
  "NV",
  "NJ",
  "NJ",
  "NJ",
  "NM",
  "NM",
  "NM",
  "NM",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "OH",
  "OH",
  "OK",
  "OR",
  "OR",
  "SC",
  "SC",
  "SC",
  "SD",
  "SD",
  "SD",
  "SD",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WV",
  "WY",
  "WY",
  "WY",
  "AL",
  "AL",
  "CA",
  "CA",
  "CA",
  "CA",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "ID",
  "ID",
  "ID",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "KS",
  "KS",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "MD",
  "MD",
  "MD",
  "MD",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MO",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NV",
  "NJ",
  "NJ",
  "NJ",
  "NM",
  "NM",
  "NC",
  "OH",
  "OH",
  "OH",
  "OR",
  "OR",
  "OR",
  "PA",
  "SC",
  "SC",
  "SC",
  "SC",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "WV",
  "WV",
  "WV",
  "WV",
  "WY",
  "WY",
  "WY",
  "AZ",
  "CA",
  "CA",
  "CA",
  "CA",
  "CA",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "ID",
  "ID",
  "ID",
  "ID",
  "ID",
  "ID",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "MD",
  "MD",
  "MN",
  "MN",
  "MN",
  "MT",
  "MT",
  "MT",
  "MT",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NJ",
  "NJ",
  "NM",
  "NM",
  "NM",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OR",
  "OR",
  "OR",
  "OR",
  "PA",
  "PA",
  "SC",
  "SC",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "UT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "WA",
  "WA",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WI",
  "WY",
  "WY",
  "WY",
  "WY",
  "WY",
  "VA",
  "AL",
  "AL",
  "AR",
  "CA",
  "CA",
  "CO",
  "CO",
  "CO",
  "CO",
  "DE",
  "FL",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "ID",
  "IL",
  "IL",
  "IL",
  "IL",
  "IL",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "KY",
  "LA",
  "LA",
  "MD",
  "MD",
  "MD",
  "MI",
  "MI",
  "MI",
  "MN",
  "MN",
  "TX",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NV",
  "NJ",
  "NJ",
  "NM",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NC",
  "NC",
  "NC",
  "NC",
  "ND",
  "ND",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OK",
  "OK",
  "OK",
  "OR",
  "OR",
  "PA",
  "PA",
  "PA",
  "PA",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "UT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "WA",
  "WA",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WY",
  "WY",
  "WY",
  "WY",
  "AR",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CT",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "ID",
  "ID",
  "ID",
  "IL",
  "IL",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "KY",
  "KY",
  "LA",
  "ME",
  "MD",
  "MD",
  "MD",
  "MA",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MO",
  "MO",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NE",
  "NV",
  "NJ",
  "NJ",
  "NJ",
  "NJ",
  "NJ",
  "NM",
  "NM",
  "NY",
  "NY",
  "NY",
  "NY",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OK",
  "OK",
  "OK",
  "OK",
  "OK",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "UT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "WA",
  "WA",
  "WA",
  "WA",
  "WA",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WY",
  "VA",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "AR",
  "CA",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CT",
  "CT",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "IL",
  "IL",
  "IN",
  "IN",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "IA",
  "KY",
  "KY",
  "LA",
  "MD",
  "MD",
  "MD",
  "MA",
  "MA",
  "MA",
  "MA",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "MT",
  "NV",
  "NV",
  "NJ",
  "NJ",
  "NM",
  "NM",
  "NM",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "ND",
  "ND",
  "ND",
  "ND",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OH",
  "OK",
  "OR",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "SC",
  "SC",
  "SD",
  "SD",
  "SD",
  "SD",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TN",
  "TX",
  "TX",
  "TX",
  "TX",
  "TX",
  "UT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "WA",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WY",
  "WY",
  "WY",
  "WY",
  "NY",
  "RI",
  "AR",
  "AR",
  "AR",
  "CA",
  "CO",
  "CO",
  "CO",
  "CT",
  "DC",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "ID",
  "ID",
  "ID",
  "ID",
  "IA",
  "IA",
  "KY",
  "ME",
  "ME",
  "ME",
  "MA",
  "MA",
  "MA",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MT",
  "NE",
  "NE",
  "NH",
  "NJ",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NY",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "NC",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "OH",
  "OH",
  "OH",
  "OH",
  "OK",
  "OR",
  "OR",
  "OR",
  "OR",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "PA",
  "RI",
  "RI",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "SD",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WV",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "VA",
  "VA",
  "VA",
  "AR",
  "AR",
  "AR",
  "CA",
  "CA",
  "CO",
  "CO",
  "CT",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "GA",
  "KY",
  "KY",
  "ME",
  "MD",
  "MA",
  "MA",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MI",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "MN",
  "NH",
  "NM",
  "NY",
  "NY",
  "NC",
  "NC",
  "NC",
  "NC",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "ND",
  "OR",
  "PA",
  "RI",
  "UT",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "WV",
  "WV",
  "WV",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WI",
  "WY",
  "VA",
  "AR",
  "AR",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CT",
  "CT",
  "ID",
  "ID",
  "ME",
  "ME",
  "ME",
  "ME",
  "MD",
  "MA",
  "MA",
  "MA",
  "MI",
  "MI",
  "MT",
  "MT",
  "MT",
  "NH",
  "NH",
  "NH",
  "NH",
  "NH",
  "NM",
  "NM",
  "NM",
  "ND",
  "ND",
  "ND",
  "ND",
  "OR",
  "OR",
  "OR",
  "OR",
  "VT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WA",
  "WA",
  "WA",
  "WA",
  "WV",
  "WV",
  "WI",
  "VA",
  "VA",
  "VA",
  "VA",
  "AR",
  "CA",
  "CA",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CT",
  "ID",
  "ID",
  "ID",
  "ID",
  "KY",
  "ME",
  "ME",
  "MA",
  "MI",
  "NH",
  "NH",
  "OR",
  "OR",
  "RI",
  "VT",
  "VT",
  "VT",
  "VT",
  "VA",
  "VA",
  "VA",
  "VA",
  "VA",
  "WA",
  "WV",
  "WV",
  "VA",
  "VA",
  "VA",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "CO",
  "ID",
  "ID",
  "ME",
  "ME",
  "MI",
  "NH",
  "OR",
  "VT",
  "VT",
  "VT",
  "VA",
  "VA",
  "VA",
  "WI",
  "CO",
  "CO",
  "ME",
  "ME",
  "NY",
  "VT",
  "VT",
  "ME",
  "VT",
  "VT",
  "VT",
  "VT",
];

const numbers = require("./Numbers.json");

const numarray = [];

const num = Object.entries(numbers).map((item) => {
  numarray.push(item[1]);
});

let finalData = counties.map((county, index) => {
  let finalObject = {
    county: county,
    state: states[index],
    data: numarray[index],
  };

  return finalObject;
});

//////////////// COLORS //////////////////
const heatColorArray = [
  "#ffcc99",
  "#ffad7a",
  "#ff9966",
  "#ff751f",
  "#ff5c00",
  "#ff3300",
  "#ff1400",
  "#cc0000",
  "#8d0000",
  "#990033",
];

const wetBulbColorArray = [
  "#FFFFFF",
  "#ffe0d1",
  "#ffc2a3",
  "#ffa375",
  "#ff9157",
  "#ff7d2e",
  "#ff6905",
  "#e64c00",
  "#c22900",
  "#a80f00",
];
//// CHANGE CROP COLORS
const cropYieldColorArray = [
  "#FFFFFF",
  "#ffe0d1",
  "#ffc2a3",
  "#ffa375",
  "#ff9157",
  "#ff7d2e",
  "#ff6905",
  "#e64c00",
  "#c22900",
  "#a80f00",
];






////////// MAIN ARRAY //////////

const mainHeatArray = [];
const mainWetBulbArray = [];
const mainCropYieldArray = [];
const mainSeaLevelRiseArray = [];
const mainFireArray = [];
const mainEconomicDamageArray = [];

//////////// STATES ARRAY //////////

let alabamaArray = [[],[],[],[],[],[]];
let arizonaArray = [[],[],[],[],[],[]];
let arkansasArray = [[],[],[],[],[],[]];
let californiaArray = [[],[],[],[],[],[]];
let coloradoArray = [[],[],[],[],[],[]];
let connecticutArray = [[],[],[],[],[],[]];
let delawareArray = [[],[],[],[],[],[]];
let floridaArray = [[],[],[],[],[],[]];
let georgiaArray = [[],[],[],[],[],[]];
let idahoArray = [[],[],[],[],[],[]];
let illinoisArray = [[],[],[],[],[],[]];
let indianaArray = [[],[],[],[],[],[]];
let iowaArray = [[],[],[],[],[],[]];
let kansasArray = [[],[],[],[],[],[]];
let kentuckyArray = [[],[],[],[],[],[]];
let louisianaArray = [[],[],[],[],[],[]];
let maineArray = [[],[],[],[],[],[]];
let marylandArray = [[],[],[],[],[],[]];
let massachusettsArray = [[],[],[],[],[],[]];
let michiganArray = [[],[],[],[],[],[]];
let minnesotaArray = [[],[],[],[],[],[]];
let mississippiArray = [[],[],[],[],[],[]];
let missouriArray = [[],[],[],[],[],[]];
let montanaArray = [[],[],[],[],[],[]];
let nebraskaArray = [[],[],[],[],[],[]];
let nevadaArray = [[],[],[],[],[],[]];
let newHampshireArray = [[],[],[],[],[],[]];
let newJerseyArray = [[],[],[],[],[],[]];
let newMexicoArray = [[],[],[],[],[],[]];
let newYorkArray = [[],[],[],[],[],[]];
let northCarolinaArray = [[],[],[],[],[],[]];
let northDakotaArray = [[],[],[],[],[],[]];
let ohioArray = [[],[],[],[],[],[]];
let oklahomaArray = [[],[],[],[],[],[]];
let oregonArray = [[],[],[],[],[],[]];
let pennsylvaniaArray = [[],[],[],[],[],[]];
let rhodeIslandArray = [[],[],[],[],[],[]];
let southCarolinaArray = [[],[],[],[],[],[]];
let southDakotaArray = [[],[],[],[],[],[]];
let tennesseeArray = [[],[],[],[],[],[]];
let texasArray = [[],[],[],[],[],[]];
let utahArray = [[],[],[],[],[],[]];
let vermontArray = [[],[],[],[],[],[]];
let virginiaArray = [[],[],[],[],[],[]];
let washingtonArray = [[],[],[],[],[],[]];
let westVirginiaArray = [[],[],[],[],[],[]];
let wisconsinArray = [[],[],[],[],[],[]];
let wyomingArray = [[],[],[],[],[],[]];

/////////////// MAPPING SWITCH STATES /////////////
finalData.map((item) => {
  if (item.state === "AL") {
    switch (item.data.heat) {
      case "1":
        alabamaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        alabamaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        alabamaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        alabamaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        alabamaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        alabamaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        alabamaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        alabamaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        alabamaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        alabamaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        alabamaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        alabamaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "AZ") {
    switch (item.data.heat) {
      case "1":
        arizonaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        arizonaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        arizonaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        arizonaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        arizonaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        arizonaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        arizonaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        arizonaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        arizonaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        arizonaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        arizonaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        arizonaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "AR") {
    switch (item.data.heat) {
      case "1":
        arkansasArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        arkansasArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        arkansasArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        arkansasArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        arkansasArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        arkansasArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        arkansasArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        arkansasArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        arkansasArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        arkansasArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        arkansasArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        arkansasArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "CA") {
    switch (item.data.heat) {
      case "1":
        californiaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        californiaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        californiaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        californiaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        californiaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        californiaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        californiaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        californiaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        californiaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        californiaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        californiaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        californiaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "CO") {
    switch (item.data.heat) {
      case "1":
        coloradoArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        coloradoArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        coloradoArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        coloradoArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        coloradoArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        coloradoArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        coloradoArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        coloradoArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        coloradoArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        coloradoArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        coloradoArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        coloradoArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "CT") {
    switch (item.data.heat) {
      case "1":
        connecticutArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        connecticutArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        connecticutArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        connecticutArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        connecticutArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        connecticutArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        connecticutArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        connecticutArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        connecticutArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        connecticutArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        connecticutArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        connecticutArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "DE") {
    switch (item.data.heat) {
      case "1":
        delawareArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        delawareArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        delawareArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        delawareArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        delawareArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        delawareArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        delawareArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        delawareArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        delawareArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        delawareArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        delawareArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        delawareArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
 
  } else if (item.state === "FL") {
    switch (item.data.heat) {
      case "1":
        floridaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        floridaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        floridaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        floridaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        floridaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        floridaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        floridaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        floridaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        floridaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        floridaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        floridaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        floridaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "GA") {
    switch (item.data.heat) {
      case "1":
        georgiaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        georgiaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        georgiaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        georgiaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        georgiaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        georgiaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        georgiaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        georgiaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        georgiaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        georgiaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        georgiaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        georgiaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "ID") {
    switch (item.data.heat) {
      case "1":
        idahoArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        idahoArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        idahoArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        idahoArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        idahoArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        idahoArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        idahoArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        idahoArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        idahoArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        idahoArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        idahoArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        idahoArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "IL") {
    switch (item.data.heat) {
      case "1":
        illinoisArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        illinoisArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        illinoisArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        illinoisArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        illinoisArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        illinoisArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        illinoisArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        illinoisArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        illinoisArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        illinoisArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        illinoisArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        illinoisArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
 
  } else if (item.state === "IN") {
    switch (item.data.heat) {
      case "1":
        indianaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        indianaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        indianaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        indianaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        indianaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        indianaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        indianaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        indianaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        indianaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        indianaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        indianaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        indianaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "IA") {
    switch (item.data.heat) {
      case "1":
        iowaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        iowaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        iowaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        iowaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        iowaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        iowaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        iowaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        iowaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        iowaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        iowaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        iowaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        iowaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "KS") {
    switch (item.data.heat) {
      case "1":
        kansasArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        kansasArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        kansasArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        kansasArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        kansasArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        kansasArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        kansasArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        kansasArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        kansasArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        kansasArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        kansasArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        kansasArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "KY") {
    switch (item.data.heat) {
      case "1":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        kentuckyArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        kentuckyArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        kentuckyArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "LA") {
    switch (item.data.heat) {
      case "1":
        louisianaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        louisianaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        louisianaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        louisianaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        louisianaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        louisianaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        louisianaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        louisianaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        louisianaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        louisianaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        louisianaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        louisianaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "ME") {
    switch (item.data.heat) {
      case "1":
        maineArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        maineArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        maineArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        maineArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        maineArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        maineArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        maineArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        maineArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        maineArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        maineArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        maineArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        maineArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "MD") {
    switch (item.data.heat) {
      case "1":
        marylandArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        marylandArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        marylandArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        marylandArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        marylandArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        marylandArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        marylandArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        marylandArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        marylandArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        marylandArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        marylandArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        marylandArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "MA") {
    switch (item.data.heat) {
      case "1":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        massachusettsArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        massachusettsArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        massachusettsArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "MI") {
    switch (item.data.heat) {
      case "1":
        michiganArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        michiganArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        michiganArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        michiganArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        michiganArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        michiganArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        michiganArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        michiganArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        michiganArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        michiganArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        michiganArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        michiganArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "MN") {
    switch (item.data.heat) {
      case "1":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        minnesotaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        minnesotaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        minnesotaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "MS") {
    switch (item.data.heat) {
      case "1":
        mississippiArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        mississippiArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        mississippiArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        mississippiArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        mississippiArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        mississippiArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        mississippiArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        mississippiArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        mississippiArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        mississippiArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        mississippiArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        mississippiArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "MO") {
    switch (item.data.heat) {
      case "1":
        missouriArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        missouriArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        missouriArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        missouriArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        missouriArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        missouriArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        missouriArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        missouriArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        missouriArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        missouriArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        missouriArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        missouriArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "MT") {
    switch (item.data.heat) {
      case "1":
        montanaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        montanaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        montanaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        montanaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        montanaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        montanaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        montanaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        montanaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        montanaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        montanaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        montanaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        montanaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "NE") {
    switch (item.data.heat) {
      case "1":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        nebraskaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        nebraskaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        nebraskaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "NV") {
    switch (item.data.heat) {
      case "1":
        nevadaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        nevadaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        nevadaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        nevadaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        nevadaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        nevadaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        nevadaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        nevadaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        nevadaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        nevadaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        nevadaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        nevadaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "NH") {
    switch (item.data.heat) {
      case "1":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        newHampshireArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        newHampshireArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        newHampshireArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "NJ") {
    switch (item.data.heat) {
      case "1":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        newJerseyArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        newJerseyArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        newJerseyArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "NM") {
    switch (item.data.heat) {
      case "1":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        newMexicoArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        newMexicoArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        newMexicoArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "NY") {
    switch (item.data.heat) {
      case "1":
        newYorkArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        newYorkArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        newYorkArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        newYorkArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        newYorkArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        newYorkArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        newYorkArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        newYorkArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        newYorkArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        newYorkArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        newYorkArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        newYorkArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "NC") {
    switch (item.data.heat) {
      case "1":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        northCarolinaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        northCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        northCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "ND") {
    switch (item.data.heat) {
      case "1":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        northDakotaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        northDakotaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        northDakotaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "OH") {
    switch (item.data.heat) {
      case "1":
        ohioArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        ohioArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        ohioArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        ohioArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        ohioArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        ohioArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        ohioArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        ohioArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        ohioArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        ohioArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        ohioArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        ohioArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "OK") {
    switch (item.data.heat) {
      case "1":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        oklahomaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        oklahomaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        oklahomaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "OR") {
    switch (item.data.heat) {
      case "1":
        oregonArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        oregonArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        oregonArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        oregonArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        oregonArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        oregonArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        oregonArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        oregonArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        oregonArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        oregonArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        oregonArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        oregonArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "PA") {
    switch (item.data.heat) {
      case "1":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        pennsylvaniaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        pennsylvaniaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        pennsylvaniaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "RI") {
    switch (item.data.heat) {
      case "1":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        rhodeIslandArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        rhodeIslandArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        rhodeIslandArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "SC") {
    switch (item.data.heat) {
      case "1":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        southCarolinaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        southCarolinaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        southCarolinaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "SD") {
    switch (item.data.heat) {
      case "1":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        southDakotaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        southDakotaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        southDakotaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
   
  } else if (item.state === "TN") {
    switch (item.data.heat) {
      case "1":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        tennesseeArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        tennesseeArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        tennesseeArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "TX") {
    switch (item.data.heat) {
      case "1":
        texasArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        texasArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        texasArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        texasArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        texasArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        texasArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        texasArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        texasArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        texasArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        texasArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        texasArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        texasArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "UT") {
    switch (item.data.heat) {
      case "1":
        utahArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        utahArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        utahArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        utahArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        utahArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        utahArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        utahArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        utahArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        utahArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        utahArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        utahArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        utahArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "VT") {
    switch (item.data.heat) {
      case "1":
        vermontArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        vermontArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        vermontArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        vermontArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        vermontArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        vermontArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        vermontArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        vermontArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        vermontArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        vermontArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        vermontArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        vermontArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "VA") {
    switch (item.data.heat) {
      case "1":
        virginiaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        virginiaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        virginiaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        virginiaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        virginiaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        virginiaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        virginiaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        virginiaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        virginiaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        virginiaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        virginiaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        virginiaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "WA") {
    switch (item.data.heat) {
      case "1":
        washingtonArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        washingtonArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        washingtonArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        washingtonArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        washingtonArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        washingtonArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        washingtonArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        washingtonArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        washingtonArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        washingtonArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        washingtonArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        washingtonArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "WV") {
    switch (item.data.heat) {
      case "1":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        westVirginiaArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        westVirginiaArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        westVirginiaArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "WI") {
    switch (item.data.heat) {
      case "1":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        wisconsinArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        wisconsinArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        wisconsinArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  } else if (item.state === "WY") {
    switch (item.data.heat) {
      case "1":
        wyomingArray[0].push(item.county.trim(), heatColorArray[0]);
        break;
      case "2":
        wyomingArray[0].push(item.county.trim(), heatColorArray[1]);
        break;
      case "3":
        wyomingArray[0].push(item.county.trim(), heatColorArray[2]);
        break;
      case "4":
        wyomingArray[0].push(item.county.trim(), heatColorArray[3]);
        break;
      case "5":
        wyomingArray[0].push(item.county.trim(), heatColorArray[4]);
        break;
      case "6":
        wyomingArray[0].push(item.county.trim(), heatColorArray[5]);
        break;
      case "7":
        wyomingArray[0].push(item.county.trim(), heatColorArray[6]);
        break;
      case "8":
        wyomingArray[0].push(item.county.trim(), heatColorArray[7]);
        break;
      case "9":
        wyomingArray[0].push(item.county.trim(), heatColorArray[8]);
        break;
      case "10":
        wyomingArray[0].push(item.county.trim(), heatColorArray[9]);
        break;
    }
    switch (item.data.wetBulb) {
      case "1":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[0]);
        break;
      case "2":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[1]);
        break;
      case "3":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[2]);
        break;
      case "4":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[3]);
        break;
      case "5":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[4]);
        break;
      case "6":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[5]);
        break;
      case "7":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[6]);
        break;
      case "8":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[7]);
        break;
      case "9":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[8]);
        break;
      case "10":
        wyomingArray[1].push(item.county.trim(), wetBulbColorArray[9]);
        break;
    }
    switch (item.data.cropYield) {
      case "1":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[0]);
        break;
      case "2":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[1]);
        break;
      case "3":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[2]);
        break;
      case "4":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[3]);
        break;
      case "5":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[4]);
        break;
      case "6":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[5]);
        break;
      case "7":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[6]);
        break;
      case "8":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[7]);
        break;
      case "9":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[8]);
        break;
      case "10":
        wyomingArray[2].push(item.county.trim(), cropYieldColorArray[9]);
        break;
    }
    
  }

  return;
});


///////////// PUSHING STATES INTO MAINS /////////////////////////

mainHeatArray.push(
  alabamaArray[0],
  arizonaArray[0],
  arkansasArray[0],
  californiaArray[0],
  coloradoArray[0],
  connecticutArray[0],
  delawareArray[0],
  floridaArray[0],
  georgiaArray[0],
  idahoArray[0],
  illinoisArray[0],
  indianaArray[0],
  iowaArray[0],
  kansasArray[0],
  kentuckyArray[0],
  louisianaArray[0],
  maineArray[0],
  marylandArray[0],
  massachusettsArray[0],
  michiganArray[0],
  minnesotaArray[0],
  mississippiArray[0],
  missouriArray[0],
  montanaArray[0],
  nebraskaArray[0],
  nevadaArray[0],
  newHampshireArray[0],
  newJerseyArray[0],
  newMexicoArray[0],
  newYorkArray[0],
  northCarolinaArray[0],
  northDakotaArray[0],
  ohioArray[0],
  oklahomaArray[0],
  oregonArray[0],
  pennsylvaniaArray[0],
  rhodeIslandArray[0],
  southCarolinaArray[0],
  southDakotaArray[0],
  tennesseeArray[0],
  texasArray[0],
  utahArray[0],
  vermontArray[0],
  virginiaArray[0],
  washingtonArray[0],
  westVirginiaArray[0],
  wisconsinArray[0],
  wyomingArray[0]
);

mainWetBulbArray.push(
  alabamaArray[1],
  arizonaArray[1],
  arkansasArray[1],
  californiaArray[1],
  coloradoArray[1],
  connecticutArray[1],
  delawareArray[1],
  floridaArray[1],
  georgiaArray[1],
  idahoArray[1],
  illinoisArray[1],
  indianaArray[1],
  iowaArray[1],
  kansasArray[1],
  kentuckyArray[1],
  louisianaArray[1],
  maineArray[1],
  marylandArray[1],
  massachusettsArray[1],
  michiganArray[1],
  minnesotaArray[1],
  mississippiArray[1],
  missouriArray[1],
  montanaArray[1],
  nebraskaArray[1],
  nevadaArray[1],
  newHampshireArray[1],
  newJerseyArray[1],
  newMexicoArray[1],
  newYorkArray[1],
  northCarolinaArray[1],
  northDakotaArray[1],
  ohioArray[1],
  oklahomaArray[1],
  oregonArray[1],
  pennsylvaniaArray[1],
  rhodeIslandArray[1],
  southCarolinaArray[1],
  southDakotaArray[1],
  tennesseeArray[1],
  texasArray[1],
  utahArray[1],
  vermontArray[1],
  virginiaArray[1],
  washingtonArray[1],
  westVirginiaArray[1],
  wisconsinArray[1],
  wyomingArray[1]
);

mainCropYieldArray.push(
  alabamaArray[2],
  arizonaArray[2],
  arkansasArray[2],
  californiaArray[2],
  coloradoArray[2],
  connecticutArray[2],
  delawareArray[2],
  floridaArray[2],
  georgiaArray[2],
  idahoArray[2],
  illinoisArray[2],
  indianaArray[2],
  iowaArray[2],
  kansasArray[2],
  kentuckyArray[2],
  louisianaArray[2],
  maineArray[2],
  marylandArray[2],
  massachusettsArray[2],
  michiganArray[2],
  minnesotaArray[2],
  mississippiArray[2],
  missouriArray[2],
  montanaArray[2],
  nebraskaArray[2],
  nevadaArray[2],
  newHampshireArray[2],
  newJerseyArray[2],
  newMexicoArray[2],
  newYorkArray[2],
  northCarolinaArray[2],
  northDakotaArray[2],
  ohioArray[2],
  oklahomaArray[2],
  oregonArray[2],
  pennsylvaniaArray[2],
  rhodeIslandArray[2],
  southCarolinaArray[2],
  southDakotaArray[2],
  tennesseeArray[2],
  texasArray[2],
  utahArray[2],
  vermontArray[2],
  virginiaArray[2],
  washingtonArray[2],
  westVirginiaArray[2],
  wisconsinArray[2],
  wyomingArray[2]
);

/////////// TRANSPARENT PUSH ////////////
JSON.stringify(mainHeatArray);
JSON.stringify(mainWetBulbArray);
JSON.stringify(mainCropYieldArray);



mainHeatArray.forEach((item) => {
  item.push("transparent");
  
})
mainWetBulbArray.forEach((item) => {
  item.push("transparent");
  
})
mainCropYieldArray.forEach((item) => {
  item.push("transparent");
  
})


export {mainHeatArray, mainWetBulbArray, mainCropYieldArray};

// coloradoArray.push("transparent");

