console.log("HI");   
 $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        center: true,

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


 let a="<div class=\"item\"><div class=\"card carCard\" style=\"width=90%; margin:20px;\"><div class=\"card-body\"><div id=\"car-card-title\" style=\"font-size:30px;color:black!important;font-weight:bold\">"
let b="</div><p class=\"card-text\" style=\"color:black!important;\">"
let c="<div style=\"background:#b3d9ff;line-height:30px;border-left:solid #80aaff 5px;padding-left:5px\">"
let d="</div><div style=\"background:#99ffbb;line-height:30px;border-left:solid #99e699 5px;padding-left:5px\">"
let e="</div><div style=\"background:#ff99cc;min-height:30px;border-left:solid #ff66a3 5px;padding-left:5px\">"
let f="</div></p></div></div></div>"
            
 let dance = [ ["Flare", "  Dance Battle in various western styles.<br />SUB CATEGORIES :-<br />1) 1 VS. 1 <br />                    2) 2 VS. 2 <br /> 3) CREW VS. CREW <br/>4)7 TO SMOKE<br />", "TEAM SIZE: Not applicable","Registration:<br> 500 for 1v1,<br> 600 for 2v2, <br> 1000 for crew<br>","Prize Money: 25,000"],
            [
            "Soul Train", "Group dance event. <br />2 categories - western and Indian. <br />Performance of both categories will happen together but both categories will be judged seperately.", "TEAM SIZE: Min 6, Max 20 in  a team", "Registration: 1200 per team","Prize Money: 50,000"
            
            ],
            ["Strut", " Solo Dance event.<br /><i>Get your dancing shoes on and get ready to groove</i>" , "TEAM SIZE: Individual","Registration: 300/Person","Prize Money: 7,000"]
            ]

 let dramatics = ["HALLA BOL","An event where the teams come and perform their skills of street play.","","",""],
["Mad Attack", "Mad Attack is a stage for people to show up their abilities on how a product can be made popular.","..","",""],
["Cquence - Short Film Submission", "Submission of previously made short movies.<br />- <b>Duration : </b> 5mins-10mins. <br />- <b>No fixed theme.</b> <br /> - <b>Language</b> - any. <br />- Movies to be sent in before <b>27th Feb 2020</b>. <br />- The shortlisted films will be screened. <br />", "..","",""]]


