x = 0;
y = 0;

drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


var screenWidth = 0;
var screenHight = 0;

var image="apple.png" = 0;

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event){
  console.log(event); 
  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
  to_number =  Number(content);
}


function setup() {
  screen_width =  window.innerWidth;
  screen_height =  window.innerWidth;
  canvas = createCanvas(150, 150);
  canvas.position(0, 150);
 
}

function canvasPosition(){
  screen_width =  ramdom.MathNumber(0, 150);
  screen_height =  ramdom.MathNumber(0, 150);
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "A maçã começou a ser desenhada";
   

  for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.ramdom() * 700); 
    y = Math.floor(Math.ramdom() * 400); 
    image(apple, x, y, 50, 50);
    let status = "O número não foi reconhecido.";
  }
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
    toNumber = "";
}

function preload(){
  var image = "apple.png";
}
