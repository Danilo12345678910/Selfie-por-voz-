var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
   console.log(event);
   
   var Content = event.results[0][0].transcript;
   console.log(Content);

   document.getElementById("textbox").innerHTML = Content;

   speak();
}
function speak(){
    var synth = window.speechSynthesis;

    speakData = document.getElementById("texbox").value;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    Webcam.attach(camera);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90

});