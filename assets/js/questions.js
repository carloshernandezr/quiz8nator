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
 //vars
 var startbutton = document.querySelector("#startbtn");
 var iTemp=0;
 var numQuest=questions.length;//numer of question 
 var btnanswer;
 var valuex;
 var score = 0;
 var answerGood;
 var answerBtn;
 var timeEl = document.querySelector("#ptime"); 
 var secondsLeft;
 var btnLastClick;
 
//

 



 

//START the quiz 
  startbutton.addEventListener("click", function(event) {
  event.preventDefault();
  secondsLeft = (questions.length)*15;
  setTime();
  nextQuestionF();
  btnLastClick==false;
  document.getElementById("startbtn").style.visibility = 'hidden';
 // showQ();
});//startbutton


//function for create questions ans answer


function nextQuestionF() {    
   // numQuest=questions.length;
    //if-main
    if (iTemp<numQuest) {
     
      var titleQ = questions[iTemp].title; 
      var questiontext = document.createElement("h2");
      questiontext.textContent = titleQ;
      document.getElementById("questionbox").appendChild(questiontext);
      questiontext.setAttribute("id", "h2question"); 
      document.getElementById("h2question").classList.add("mb-4" );

      //create next question and answers 
      for (let i = 0; i < questions[iTemp].choices.length; i++) {

        var choicesarr = questions[iTemp].choices[i];
        var answertext = document.createElement("button");
        answertext.textContent = choicesarr;
        document.getElementById("questionbox").appendChild(answertext);
        var idanswer = ("answer"+i);
        answertext.setAttribute("id", idanswer);
        answertext.setAttribute("type", "button"); 
        document.getElementById(idanswer).classList.add("btn","btn-primary", "btn-lg", "col-md-12", "mb-4" );
               
      }//for  

      showQ();  
      iTemp++;
    } 
  }//  nextQuestionF

 
/*functions  */

function answerCheck() {
  if (answerBtn==answerGood) {
    alert("Correct")
    score++;
    console.log("score:"+score);    
  }   else {

    alert("Wrong");
    secondsLeft=secondsLeft-15;//time remaining
    count15=0;
     

  }
}

function removeLast() {//remove last question display
  var myQh2= document.getElementById("h2question");
  myQh2.remove();

  for (let i = 0; i < questions[iTemp-1].choices.length; i++) {
    console.log("i:"+i)
    var myobj = document.getElementById("answer"+i);
    myobj.remove();
  }  
  //secondsLeft=0;
}



function showScore() {//show final display with resultc  score


 //score
  var showScor = document.createElement("h2");
  showScor.textContent = "Your score is: "+ score;
  document.getElementById("questionbox").appendChild(showScor);
  showScor.setAttribute("id", "h2Final"); 
  document.getElementById("h2Final").classList.add("mb-4" );

  //label
  var labelInput = document.createElement("label");
  labelInput.textContent = "your Name:  ";
  document.getElementById("questionbox").appendChild(labelInput);
  labelInput.setAttribute("id", "labelI"); 
  labelInput.setAttribute("for", "labelI"); 
  document.getElementById("labelI").classList.add("mb-4", "mr-4" );

  //input text
  var textInputN = document.createElement("input");
  document.getElementById("questionbox").appendChild(textInputN);
  textInputN.setAttribute("id", "textN"); 
  textInputN.setAttribute("placeholder", "Your name");
  document.getElementById("textN").classList.add("mb-4" );

  //button submit
  var btnSub = document.createElement("button");
  btnSub.textContent = "Submit";
  document.getElementById("questionbox").appendChild(btnSub);
   
  btnSub.setAttribute("id", "btnSubmit");
  btnSub.setAttribute("type", "button"); 
  document.getElementById("btnSubmit").classList.add("btn","btn-danger", "btn-sm", "col-sm-2", "mb-4" , "ml-4", "mt-3", "block", "mr-4");



 var submitButton = document.querySelector("#btnSubmit"); 
 
    //document.addEventListener('DOMContentLoaded', function () {
 
      submitButton.addEventListener("click", function(event) {
          event.preventDefault();

          var   x = document.getElementById("textN").value;
    
            localStorage.setItem("scoreL",(x+": "+ score));

            document.querySelector("#textnav").textContent="Last Score: "+localStorage.getItem("scoreL") ;

            score=0;

    
 
          

              var myh22= document.getElementById("h2Final");
              myh22.remove();

              var mylabel= document.getElementById("labelI");
              mylabel.remove();

              var mytext= document.getElementById("textN");
              mytext.remove();

              var mybt= document.getElementById("btnSubmit");
              mybt.remove();
              timeEl.textContent = " ";
              btnLastClick=false;
              document.getElementById("startbtn").style.visibility = 'visible';


      });

 //   });
    
  
  };//showscore

 

/*functions*/

function getlocalstotage() {  
  document.querySelector("#textnav").textContent="Last Score: "+localStorage.getItem("scoreL") ;
}


var count15=0;


 

function setTime() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Remaining Time: " + secondsLeft ;
    count15=count15+1;
    console.log(count15);



    function LastQTimeOver(params) {
      count15=0;
      alert("Time Out - End Game");      
      clearInterval(timerInterval);
      timeEl.textContent = "Time Out ";      
      removeLast();       
      showScore();
      iTemp=0;//for reset question create      
    }
   



    
    if(count15 == 15) {

      count15=0;
      timeEl.textContent = "Time Out ";
       

      if ((iTemp)<numQuest) {

     
        secondsLeft=secondsLeft-15;//time remaining
       // count15=0;
        
        deleteQuestion();  
        nextQuestionF();
        alert("No choice select in the current time");
       // LastQTimeOver();  


    } else if (iTemp>=numQuest){
      secondsLeft=secondsLeft-15;
      LastQTimeOver();
      


    } 

      //sendMessage();
    }


    if (secondsLeft <= 0) {
      console.log(btnLastClick);
      
      if (btnLastClick!=true) {
         LastQTimeOver();  
      }  
      
       clearInterval(timerInterval);  
       count15=0;
       timeEl.textContent = "Time Out .";   
 


    }



  }, 1000);

  


}


 

function showQ() {//this function click addEventListener for each button
btnanswer = document.querySelectorAll("#questionbox button"); 
  Array.prototype.forEach.call(btnanswer, function(el) {
    
    
    el.addEventListener('click', function (event) {
      console.log("itemp: "+iTemp);
      console.log("numequest "+numQuest);      

      if ((iTemp)<numQuest) {

          answerBtn= this.textContent;
          answerGood=questions[iTemp-1].answer;
          
          answerCheck();
          deleteQuestion();  
          nextQuestionF();

      } else if (iTemp>=numQuest){

          answerBtn= this.textContent;
          answerGood=questions[iTemp-1].answer;

          answerCheck();

         // alert("fin del juego");
         alert("Time Out -- End Game"); 

         

          removeLast();


          showScore();

          btnLastClick=true;
          secondsLeft=0;
       

        //  score=0;   
        count15=0;       
          iTemp=0;//for reset question create


      } 
    });
  });
};

 
function deleteQuestion() {//this function delete  questions
  var myQh2= document.getElementById("h2question");
  myQh2.remove();
  for (let i = 0; i < questions[iTemp].choices.length; i++) {
    var myobj = document.getElementById("answer"+i);
    myobj.remove();
  }
}//deleQuestion






  


