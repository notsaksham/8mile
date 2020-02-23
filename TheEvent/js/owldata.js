console.log("HI");
$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,

  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});

var a =
  '<div class="item"><div id="eventCard" class="card carCardX " style="width=90%; margin:20px;"><div class="card-body"><div id="car-card-title" style="font-size:30px;color:black!important;font-weight:bold">';
var b = '</div><p class="card-text" style="color:black!important;">';
var c =
  '<div style="background:#b3d9ff;line-height:30px;border-left:solid #80aaff 5px;padding-left:5px">';
var d =
  '</div><div style="background:#99ffbb;line-height:30px;border-left:solid #99e699 5px;padding-left:5px">';
var e =
  '</div><div style="background:#ff99cc;min-height:30px;border-left:solid #ff66a3 5px;padding-left:5px">';
var f = "</div></p></div></div></div>";

var proshows = [
  [
    "Verve",
    "Blending the designer's creativity with models' charisma on the ramp, fashion show is one of the most anticipated events of 8th mile.",
    "<b> TEAM SIZE: </b>20 people max in a team",
    "<b> Registration: </b> Rs250 per head",
    "<b> Prize Money: </b> Rs50000",
    "Flagship"
  ]
];

var dance = [
  [
    "Flare",
    "Dance Battle in various western styles.<br> SUB CATEGORIES: <br> <ol> <li> 1 VS.1 </li> <li>  2 VS. 2 </li> <li>  CREW VS. CREW(Group dance battle)</li> <li> 7 TO SMOKE</li> </ol>",
    "<b> TEAM SIZE: </b>",
    "<b> Registration: </b> Rs500 for 1vs1 <br> 300 for 2vs2 <br> 1000 for crew <br> 500 for 7 to smoke",
    "<b> Prize Money: </b> Rs25000",
    "Flagship"
  ],
  [
    "Strut",
    "Solo Dance event. Get your dancing shoes on and get ready to groove",
    "<b> TEAM SIZE: </b>1",
    "<b> Registration: </b> Rs300/person",
    "<b> Prize Money: </b> Rs7000"
  ]
];

var dramatics = [
  [
    "HALLA BOL",
    "An event where the teams come and showcase their skills of street play.",
    "<b> TEAM SIZE: </b>Max 20 in a team",
    "<b> Registration: </b> Rs1000 per Team",
    "<b> Prize Money: </b> Rs30000",
    "Flagship"
  ],
  [
    "Mad Attack",
    "“Mad Attack” is a stage for young and creative people to show their abilities as to how a product can be made popular.",
    "<b> TEAM SIZE: </b>10 in a team",
    "<b> Registration: </b> Rs500",
    "<b> Prize Money: </b> Rs8500"
  ],
  [
    "Mime",
    "Theatrical technique of expressing a story or portraying a character entirely by gestures and bodily movements without the use of words.",
    "<b> TEAM SIZE: </b>max 10 in a team",
    "<b> Registration: </b> Rs500",
    "<b> Prize Money: </b> Rs6000"
  ],
  [
    "Cquence - Short Film Submission",
    "Submission of previously made short movies.<br />- <b>Duration : </b> 5mins-10mins. <br />- <b>No fixed theme.</b> <br /> - <b>Language</b> - any. <br />- Movies to be sent in before <b>27th Feb 2020</b>. <br />- The shortlisted films will be screened. <br />",
    "<b> TEAM SIZE: </b> NA",
    "<b> Registration: </b> Rs Rs250/Team",
    "<b> Prize Money: </b> Rs Rs8500"
  ]
];

var music = [
  [
    "Battle of bands",
    "Event inviting bands from all over the country to battle it out and emerge as the best band.",
    "<b> TEAM SIZE: </b>Minimum 3 in a team",
    "<b> Registration: </b> Rs2000-2500",
    "<b> Prize Money: </b> Rs40000",
    "Flagship"
  ],
  [
    "Voice of 8th mile (eastern)",
    "Solo singer’s dream event to showcase their talent in Indian form.",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs200",
    "<b> Prize Money: </b> Rs8000"
  ],
  [
    "Voice of 8th mile (western)",
    "Solo singer’s dream event to showcase their talent in western form.",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs200",
    "<b> Prize Money: </b> Rs8000"
  ],
  [
    "Tarang",
    "Classical instrumental competition (solo).",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs250",
    "<b> Prize Money: </b> Rs8000"
  ]
];

var sports = [
  [
    "Mini Cricket",
    "4 overs match with all the rules of cricket and also some modifications.",
    "<b> TEAM SIZE: </b>5+1 players",
    "<b> Registration: </b> Rs600/team",
    "<b> Prize Money: </b> Rs6000"
  ],
  [
    "Mini Football",
    "Knockout tournament with all the rules of football and also some modification.",
    "<b> TEAM SIZE: </b>4+2 players",
    "<b> Registration: </b> Rs600/team",
    "<b> Prize Money: </b> Rs7500"
  ],
  [
    "Rapid Chess",
    "A game of chess where the fastest player wins.Even a rookie can beat a master of the game",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs100/person",
    "<b> Prize Money: </b> Rs3000"
  ],
  [
    "Tug of War",
    "A contest in which team of 5 people pull at opposite ends of a rope until one drags the other over a central line.",
    "<b> TEAM SIZE: </b>5 Players",
    "<b> Registration: </b> Rs200/team",
    "<b> Prize Money: </b> Rs3000"
  ],
  [
    "Lagori",
    "Involving a ball and a pile of flat stones,generally played between two teams (5 in a team) in a large outdoor area.",
    "<b> TEAM SIZE: </b>6 players",
    "<b> Registration: </b> Rs300/team",
    "<b> Prize Money: </b> Rs3000"
  ]
];

var gaming = [
  [
    "COD : Mobile",
    "Experience intense multiplayer mobile gaming.",
    "<b> TEAM SIZE: </b>5 players",
    "<b> Registration: </b> Rs400/team",
    "<b> Prize Money: </b> Rs4500"
  ],
  [
    "COD : PC",
    "Single death leads to elimination.",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs3000"
  ],
  [
    "CS : Go",
    "Victory conditions: Elimination round begins with race to 8.",
    "<b> TEAM SIZE: </b>5 Players",
    "<b> Registration: </b> Rs500/team",
    "<b> Prize Money: </b> Rs4500"
  ],
  [
    "PUBG Mobile",
    "Experience intense multiplayer mobile gaming.",
    "<b> TEAM SIZE: </b>4 players",
    "<b> Registration: </b> Rs400/team",
    "<b> Prize Money: </b> Rs4500"
  ],
  [
    "FIFA 20",
    "Online football game with 4 minute half.",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs4500"
  ],
  [
    "NFS",
    "4 players will be competing in a race. The racers in the top 2 positions from each race will go on to the next round.",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs3000"
  ]
];

var dramatics = [
  [
    "Standup Comedy",
    "Be the reason for all the giggle and laughter around(time limit - 5-8 mins)",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "HALLA BOL",
    "An event where the teams come and perform their skills of street play",
    "<b> TEAM SIZE: </b>Max 20 in a team",
    "<b> Registration: </b> Rs1200 per team",
    "<b> Prize Money: </b> Rs30000"
  ],
  [
    "Mad Attack",
    "“Mad Attack” is a stage for people to show up their abilities on how a product can be made popular.",
    "<b> TEAM SIZE: </b>10 in a team",
    "<b> Registration: </b> Rs500",
    "<b> Prize Money: </b> Rs8500"
  ],
  [
    "Cquence - Short Film submission",
    "Submission of previously made short movies. Duration - 5mins-10mins. No fixed theme. Language - any. Movies to be sent in before 27th Feb 2020. The shortlisted films will be screened.",
    "<b> TEAM SIZE: </b>NA",
    "<b> Registration: </b> Rs500/team",
    "<b> Prize Money: </b> Rs8500"
  ]
];

var informal = [
  [
    "Treasure Hunt",
    "Use your brainpower to solve clues and find the hidden treasure in college.",
    "<b> TEAM SIZE: </b>1 - 3 per Team",
    "<b> Registration: </b> Rs150/team",
    "<b> Prize Money: </b> Rs2000"
  ],
  [
    "Beg Borrow Steal",
    "Do whatever you may- beg, borrow or steal within the college premises but find the listed articles.",
    "<b> TEAM SIZE: </b>1 - 3 per Team",
    "<b> Registration: </b> Rs150/team",
    "<b> Prize Money: </b> Rs2000"
  ],
  [
    "Junk to Funk",
    "Use your skills to make the useless items provided to you into unique and funky products.",
    "<b> TEAM SIZE: </b>1 - 3 per Team",
    "<b> Registration: </b> Rs150/team",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "Friends",
    "Quiz and activities related to popular TV series; FRIENDS.",
    "<b> TEAM SIZE: </b>1 - 2 per Team",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "Sherlock",
    "Quiz and activities related to popular TV series; SHERLOCK.",
    "<b> TEAM SIZE: </b>1 - 2 per Team",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "Graffiti",
    "An awesome and fun filled opportunity to showcase the talent of painting on a wall based on a theme.",
    "<b> TEAM SIZE: </b>3 - 4 per Team",
    "<b> Registration: </b> Rs300/team",
    "<b> Prize Money: </b> Rs4000"
  ],
  [
    "Mock IPL Auction",
    "Invest and buy just like in the real IPL Auction with the virtual money provided to you.",
    "<b> TEAM SIZE: </b>4 - 5 per Team",
    "<b> Registration: </b> Rs400/team",
    "<b> Prize Money: </b> Rs50000"
  ],
  [
    "KGF Quiz",
    "Quiz and activities related to popular movie; KGF",
    "<b> TEAM SIZE: </b>1 - 2 per Team",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "Kannada Debate",
    "Test your spontaneity and fluency in Kannada with this exciting debate competition.",
    "<b> TEAM SIZE: </b>1 - 2 per Team",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "GOT",
    "Quiz and activities related to popular TV series; GAME OF THRONES",
    "<b> TEAM SIZE: </b>1 - 2 per Team",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "Cooking without fire",
    "Give your cooking stoves a rest and try delicious no fire recipes.",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1000"
  ],
  [
    "Standup Comedy",
    "Be the reason for all the giggle and laughter around. (time limit - 5-8 mins)",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "Poster Making",
    "This event helps the students to involve themselves in creative activities and showcase their artistic talent in making posters (Theme - Sustainability).",
    "<b> TEAM SIZE: </b>1 - 2 per Team",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "Mask Painting",
    "Come show us the best way to put up a disguise with the perfect blend of colours.",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ],
  [
    "Dumb Charades",
    "Show us how you and your friends are invincible when it comes to the famous game of dumb charades.",
    "<b> TEAM SIZE: </b>2 -3 per Team",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs1500"
  ]
];

var tech = [
  [
    "Hack 59",
    "Overnight coding event; the hack should be built on the concept(topic) which will be provided to the teams on spot.",
    "<b> TEAM SIZE: </b>4 - 6 per Team",
    "<b> Registration: </b> Rs2000/team",
    "<b> Prize Money: </b> ....",
    "Flagship"
  ],
  [
    "Business Marathon",
    "It is an overnight event consisting of ideating over a business model and coming up with an entrepreneurship idea.",
    "<b> TEAM SIZE: </b>5 - 6 per Team",
    "<b> Registration: </b> Rs750/team",
    "<b> Prize Money: </b> Rs50000",
    "Flagship"
  ],
  [
    "Stock Market Competition",
    "A real time trading simulation platform; giving a feel of the way it happens in the real world.",
    "<b> TEAM SIZE: </b>2 - 3 per Team",
    "<b> Registration: </b> Rs300/team",
    "<b> Prize Money: </b> Rs25000",
    "Flagship"
  ],
  [
    "Finding Sherlock",
    "This is a capture the flag event with theme based on Sherlock. Participants needs to find the secret keys hidden in each level of the game. This is a technical event and the team with maximum keys wins.",
    "<b> TEAM SIZE: </b>1 - 2 per Team",
    "<b> Registration: </b> Rs100/team",
    "<b> Prize Money: </b> Rs3000",
    "Flagship"
  ],
  [
    "Math-o-mania",
    "It’s a Mathematics Quiz.",
    "<b> TEAM SIZE: </b>Individual",
    "<b> Registration: </b> Rs50",
    "<b> Prize Money: </b> Rs6000"
  ],
  [
    "Exceptions",
    "Experience the merger of techno cultural minds with an explosion of learning and fun for young and enthusiastic minds.",
    "<b> TEAM SIZE: </b>4 in a Team",
    "<b> Registration: </b> Rs200",
    "<b> Prize Money: </b> Rs Rs7500"
  ],
  [
    "Chem-o-philia",
    "Technical quiz",
    "<b> TEAM SIZE: </b>3 - 4 per Team",
    "<b> Registration: </b> Rs300",
    "<b> Prize Money: </b> Rs Rs1000"
  ],
  [
    "Chemblitz",
    "Industrial problem solving",
    "<b> TEAM SIZE: </b>3 - 4 per Team",
    "<b> Registration: </b> Rs150",
    "<b> Prize Money: </b> Rs Rs1000"
  ],
  [
    "Escape room",
    "Mystery room event",
    "<b> TEAM SIZE: </b>3 per Team",
    "<b> Registration: </b> Rs150",
    "<b> Prize Money: </b> Rs Rs500"
  ],
  [
    "Chemmunicate",
    "Participants have to complete a series of tasks",
    "<b> TEAM SIZE: </b>4 per Team",
    "<b> Registration: </b> Rs150",
    "<b> Prize Money: </b> Rs Rs500"
  ],
  [
    "Paper and poster presentation",
    "Paper and poster presentation",
    "<b> TEAM SIZE: </b>3 - 4 per Team",
    "<b> Registration: </b> Rs150",
    "<b> Prize Money: </b> Rs Rs8000"
  ],
  [
    "Air Crash",
    "Survival of the best",
    "<b> TEAM SIZE: </b>2 per Team",
    "<b> Registration: </b> Rs150",
    "<b> Prize Money: </b> Rs Rs1500"
  ],
  [
    "Sherlock'd",
    "A Murder mysetry themed competition where one uncovers hidden clues to solve a given case.",
    "<b> TEAM SIZE: </b>3 per Team",
    "<b> Registration: </b> Rs150",
    "<b> Prize Money: </b> Rs Rs1500"
  ],
  [
    "Rush n slush",
    "Complete a series of fun activities and race against time in order to choose 'slush' i.e., waste items of your choice in order to finish successfully with a unique product",
    "<b> TEAM SIZE: </b>2 - 3 per Team",
    "<b> Registration: </b> Rs150",
    "<b> Prize Money: </b> Rs Rs2500"
  ],
  [
    "Colors on Linen",
    "A white cloth will be provided, pn which you can paint and sketch your interpretation of climate change.",
    "<b> TEAM SIZE: </b>2 - 3 per Team",
    "<b> Registration: </b> Rs100",
    "<b> Prize Money: </b> Rs2500"
  ],
  [
    "Apocalypse of the Megacosm",
    "Two cases of international importance will be given and teams have to chalk out the strategy and formulate the best soultion possible.",
    "<b> TEAM SIZE: </b>Max 5",
    "<b> Registration: </b> Rs300",
    "<b> Prize Money: </b> Rs4500"
  ],
  [
    "Paper and poster presentation",
    "This event is a platform for students working/completed working on research project or a poster. A team should consist of maximum 4 students. Presentation can be in the form of a poster or the paper can be presented in the form of a ppt.",
    "<b> TEAM SIZE: </b>Max 5",
    "<b> Registration: </b> Rs150",
    "<b> Prize Money: </b> Rs4500"
  ],
  [
    "HANDS ON FORENSIC SCIENCE WORKSHOP",
    "Learn from an experienced forensic analyst the tricks of the trade; about the science, tech and high profile forensic cases cracked by specialists. An opportunity to learn about the art of criminal profiling with a touch of biology. Lunch and certificate will be provided.",
    "<b> TEAM SIZE: </b>",
    "<b> Registration: </b> Rs750",
    "<b> Prize Money: </b> Rs"
  ]
];
