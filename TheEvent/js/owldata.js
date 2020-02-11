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


var a = "<div class=\"item\"><div class=\"card carCard\" style=\"width=90%; margin:20px;\"><div class=\"card-body\"><div id=\"car-card-title\" style=\"font-size:30px;color:black!important;font-weight:bold\">"
var b = "</div><p class=\"card-text\" style=\"color:black!important;\">"
var c = "<div style=\"background:#b3d9ff;line-height:30px;border-left:solid #80aaff 5px;padding-left:5px\">"
var d = "</div><div style=\"background:#99ffbb;line-height:30px;border-left:solid #99e699 5px;padding-left:5px\">"
var e = "</div><div style=\"background:#ff99cc;min-height:30px;border-left:solid #ff66a3 5px;padding-left:5px\">"
var f = "</div></p></div></div></div>"

var dance = [["Flare", "  Dance Battle in various western styles.<br />SUB CATEGORIES :-<br />1) 1 VS. 1 <br />                    2) 2 VS. 2 <br /> 3) CREW VS. CREW <br/>4)7 TO SMOKE<br />", "TEAM SIZE: Not applicable", "Registration:<br> 500 for 1v1,<br> 600 for 2v2, <br> 1000 for crew<br>", "Prize Money: 25,000"],
[
  "Soul Train", "Group dance event. <br />2 categories - western and Indian. <br />Performance of both categories will happen together but both categories will be judged seperately.", "TEAM SIZE: Min 6, Max 20 in  a team", "Registration: 1200 per team", "Prize Money: 50,000"

],
["Strut", " Solo Dance event.<br /><i>Get your dancing shoes on and get ready to groove</i>", "TEAM SIZE: Individual", "Registration: 300/Person", "Prize Money: 7,000"]
]

var dramatics = [["HALLA BOL", "An event where the teams come and perform their skills of street play.", "", "", ""],
["Mad Attack", "Mad Attack is a stage for people to show up their abilities on how a product can be made popular.", "..", "", ""],
["Cquence - Short Film Submission", "Submission of previously made short movies.<br />- <b>Duration : </b> 5mins-10mins. <br />- <b>No fixed theme.</b> <br /> - <b>Language</b> - any. <br />- Movies to be sent in before <b>27th Feb 2020</b>. <br />- The shortlisted films will be screened. <br />", "..", "", ""]]


var music = [["Battle of bands", "Event inviting bands from all over the country to battle it out and acclaim the best band", "TEAM SIZE: Minimum 3 in a team", "Registration: Rs 2000-2500", "Prize Money: 40,000"],
[
  "Voice of 8th mile (eastern)", "Solo singer’s dream event to showcase their voice(Indian form).", "TEAM SIZE: Individual", "Registration: Rs200", "Prize Money: 8,000"]
  ,
[
  "Voice of 8th mile (western)", "Solo singer’s dream event to showcase their voice(western form).", "TEAM SIZE: Individual", "Registration: Rs200", "Prize Money: Rs8000"],
[
  "Tarang", "Classical instrumental competition (solo)", "TEAM SIZE: Individual", "Registration: 250", "Prize Money:8,000"]

]

var sports = [["Mini Cricket", "4 overs match with all the rules of cricket and also some modifications.", "TEAM SIZE:5+1 players", "Registration:600/team", "Prize Money:6000"
],
[
  "Mini Football", "Knockout tournament with all the rules of football and also some modification.", "TEAM SIZE:4+2 players", "Registration:600/team", "Prize Money:7500"
],
[
  "Rapid Chess", "A game of chess where the fastest player wins.Even a rookie can beat a master of the game", "TEAM SIZE:Individual", "Registration:100/person", "Prize Money:3000"

],
[
  "Tug of War", "A contest in which team of 5 people pull at opposite ends of a rope until one drags the other over a central line.", "TEAM SIZE:5 Players", "Registration:200/team", "Prize Money:3000"

],
[
  "Lagori", "Involving a ball and a pile of flat stones,generally played in a large outdoor area.", "TEAM SIZE:6 players", "Registration:300/team", "Prize Money:3000"

]
]

var gaming = [
  ["COD : Mobile", "Experience intense multiplayer mobile gaming", "TEAM SIZE:5 players", "Registration:400/team", "Prize Money:4500"],
  ["COD : PC", "Single death leads to elimination.", "TEAM SIZE:Individual", "Registration:100", "Prize Money:3000"],
  ["CS : Go", "Victory conditions: Elimination round begins with race to 8.", "TEAM SIZE:5 Players", "Registration:500/team", "Prize Money:4500"],
  ["PUBG Mobile", "Experience intense multiplayer mobile gaming", "TEAM SIZE:4 players", "Registration:400/team", "Prize Money:4500"],
  ["FIFA 20", "Online football game with each half of 4 mins.", "TEAM SIZE:Individual", "Registration:100", "Prize Money:4500"],
  ["NFS", "4 players will be competing in a race. The racers in the top 2 position from each race will go on to the next round.", "TEAM SIZE:Individual", "Registration:100", "Prize Money:3000"]
]

var dramatics = [

  ["Standup Comedy", "Be the reason for all the giggle and laughter around(time limit - 5-8 mins)", "TEAM SIZE:Individual", "Registration:100", "Prize Money:1500"],
  ["HALLA BOL", "An event where the teams come and perform their skills of street play", "TEAM SIZE:Max 20 in a team", "Registration:1200 per team", "Prize Money:30000"],
  ["Mad Attack", "“Mad Attack” is a stage for people to show up their abilities on how a product can be made popular.", "TEAM SIZE:10 in a team", "Registration:500", "Prize Money:8500"],
  ["Cquence - Short Film submission", "Submission of previously made short movies. Duration - 5mins-10mins. No fixed theme. Language - any. Movies to be sent in before 27th Feb 2020. The shortlisted films will be screened.", "TEAM SIZE:NA", "Registration:500/team", "Prize Money:8500"]
]

var informal = [
  ["Treasure Hunt", "Use your brainpower to solve clues and find the hidden treasure in the college", "TEAM SIZE:1-3", "Registration:150/team", "Prize Money:2000"],
  ["Beg Borrow Steal", "Do whatever you may- beg, borrow or steal within the college premises but find the listed articles", "TEAM SIZE:1-3", "Registration:150/team", "Prize Money:2000"],
  ["Junk to Funk", "Use your skills to make useless items provided to you into unique and funky products", "TEAM SIZE:1-3", "Registration:150/team", "Prize Money:1500"],
  ["Hogathon", "Showcase your love for food and make your hunger know no bounds", "TEAM SIZE:Individual", "Registration:100", "Prize Money:1500"],
  ["Friends", "Quiz and activities related to popular TV series; FRIENDS.", "TEAM SIZE:1-2", "Registration:100", "Prize Money:1500"],
  ["Sherlock", "Quiz and activities related to popular TV series; SHERLOCK.", "TEAM SIZE:1-2", "Registration:100", "Prize Money:1500"],
  ["Graffiti", "An awesome and fun filled opportunity to showcase the talent of painting on a wall based on a theme", "TEAM SIZE:3-4", "Registration:300/team", "Prize Money:4000"],
  ["Mock IPL Auction", "Invest and buy as in Indian IPL Auction with the virtual money provided to you", "TEAM SIZE:4-5", "Registration:400/team", "Prize Money:50000"],
  ["KGF Quiz", "Quiz and activities related to popular movie: KGF", "TEAM SIZE:1-2", "Registration:100", "Prize Money:1500"],
  ["Kannada Debate", "Test your spontaneity and fluency in Kannada with this exciting debate competition", "TEAM SIZE:1-2", "Registration:100", "Prize Money:1500"],
  ["GOT", "Quiz and activities related to popular TV series; GAME OF THRONES", "TEAM SIZE:1-2", "Registration:100", "Prize Money:1500"],
  ["Cooking without fire", "Give your cooking stoves a rest and try delicious no fire recipes", "TEAM SIZE:Individual", "Registration:100", "Prize Money:1000"],
  ["Open Mic", "The stage is all yours.", "TEAM SIZE:", "Registration:", "Prize Money:"],
  ["Standup Comedy", "Be the reason for all the giggle and laughter around(time limit - 5-8 mins)", "TEAM SIZE:Individual", "Registration:100", "Prize Money:1500"],
  ["Poster Making", "This event helps the students to involve themselves in artistic activities. (Theme - Sustainability)", "TEAM SIZE:1-2", "Registration:100", "Prize Money:1500"],
  ["Mask Painting", "Come show us the best way to disguise you with the perfect blend of colours.", "TEAM SIZE:Individual", "Registration:100", "Prize Money:1500"],
  ["Dumb Charades", "Show how you and your friends make the most invincible group when it comes to the famous game of dumb charades.", "TEAM SIZE:2-3", "Registration:100", "Prize Money:1500"],
  ["Spot Photography Contest", "The contestant will take pictures inside college,according to the theme.Theme will be revealed on the day of the event.Can submit upto 3 entries. A small 80-100 word story has to be written.", "TEAM SIZE:Indiviudal", "Registration:200", "Prize Money:5000"]



]


var tech = [
  ["Hack 59", "Overnight coding event, the hack should be built on the concept (topic) which will be provided for the teams on spot.", "TEAM SIZE:1-5", "Registration:", "Prize Money:"],
  ["Business Marathon", "It is an overnight event of ideating over a business model and an entrepreneurship idea.", "TEAM SIZE:5-6", "Registration:750/team", "Prize Money:50000"],
  ["Stock Market Competition", "A real time trading simulation platform the way it happens in real world.", "TEAM SIZE:2-3", "Registration:300/team", "Prize Money:25000"],
  ["Finding Sherlock", "This is a capture the flag event with theme based on Sherlock. Participant needs to find the secret keys hidden in each level of the game. This is a tehnical event and the team with maximum keys wins.", "TEAM SIZE:1-2", "Registration:100/team", "Prize Money:3000"]

]