var questions = [
    {
      title: "Who is making the Web standards?",
      choices: ["Mozilla", "Microsoft", "The Wold Wide Web Consortium", "Google"],
      answer: "The Wold Wide Web Consortium"
    },
    {
      title: "Choose the correct HTML element for the largest heading:",
      choices: ["<heading>", "<h6>", "<head>", "<h1>"],
      answer: "<h1>"
    },

    {
      title:"What is the correct HTML for adding a background color?",
      choices:["<background>yellow</background>","<body bg=\"yellow\">","<body style=\"background-color:yellow;\">", "<yellow bgt>"],
      answer:"<body style=\"background-color:yellow;\">"

    },

    {
      title: "Which character is used to indicate an end tag?",
      choices:["*", "<", "=","/"],
      answer:"/"


    },
    {
      title: "How can you open a link in a new tab/browser window?",
      choices: ["<a href=\"url\" target=\"_blank\">", "<a href=\"url\" new>", "<a href=\"url\" target=\"new\">", "<a href=\"url tab\" open>"],
      answer:"<a href=\"url\" target=\"_blank\">"


    }
          
  ];


 

var startbutton = document.querySelector("#startbtn");
var iTemp=0;
var numQuest=0;//numer of question 

 
startbutton.addEventListener("click", function(event) {
  event.preventDefault();
  numQuest=questions.length;

  //if-main
   if (iTemp<numQuest) {







     
   }// if main

  /*     */

  var titleQ = questions[0].title; 

  var questiontext = document.createElement("h2");
      questiontext.textContent = titleQ;
      document.getElementById("questionbox").appendChild(questiontext);
      questiontext.setAttribute("id", "h2question"); 
      document.getElementById("h2question").classList.add("mb-4" );

      //create question and answer 
      for (let i = 0; i < questions[0].choices.length; i++) {

        var choicesarr = questions[0].choices[i];

        var answertext = document.createElement("button");
        answertext.textContent = choicesarr;
        document.getElementById("questionbox").appendChild(answertext);
        var idanswer = ("answer"+i);
        answertext.setAttribute("id", idanswer);
        answertext.setAttribute("type", "button"); 
        document.getElementById(idanswer).classList.add("btn","btn-primary", "btn-lg", "col-md-12", "mb-4" );

       
     }
 


     /* */



    var btnanswer = document.querySelectorAll("button"); 

    Array.prototype.forEach.call(btnanswer, function(el) {
      el.addEventListener('click', function (event) {
      //document.getElementById(this).value;
        alert("g");
      });
    });








 });//sstartbuton