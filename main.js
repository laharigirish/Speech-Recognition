x=0;
y=0;
draw_circle="";
draw_rectangle="";

function setup(){
    
canvas= createCanvas(900, 600);
}

var SpeechRecognition= window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening, please speak";
    recognition.start();
}


recognition.onresult= function (event){
console.log(event);
content= event.results[0][0].transcript;
document.getElementById("status").innerHTML=("The speech has been recognied as:"+ content);

if(content=="circle"){
 x= Math.floor(Math.random()*900);
 y= Math.floor(Math.random()*600);
 document.getElementById("status").innerHTML=("Started drawing circle");
 draw_circle="set";
}
if(content=="rectangle"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML=("Started drawing rectangle");
    draw_rectangle="set";
}

}

function draw(){
    if(draw_circle=="set"){
        radius= Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML=("Drawn circle");
        draw_circle="";
    }
    if(draw_rectangle=="set"){
        rect(x,y, 80, 50);
        document.getElementById("status").innerHTML=("Drawn rectangle");
        draw_rectangle="set";
    }
}

