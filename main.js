var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
 recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    if(content=="selfie"){
    speak();
    console.log("takeing selfie")

      
    }}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    snap();
    setTimeout(function() {
        snap();
        img_id="selfie1";
        speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
      }, 5000);
      setTimeout(function() {
        snap();
        img_id="selfie2";
        speak_data = "Taking your next Selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
      }, 10000);

}

function snap(){
  Webcam.snap(function(data_uri){
    if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML="<img id='captured_image1' src='"+data_uri+"' >";
        }if(img_id=="selfie2"){
            document.getElementById("result2" ).innerHTML="<img id='captured_image2' src='"+data_uri+"' >";
            }if(img_id=="selfie3"){
                document.getElementById("result3").innerHTML="<img id='captured_image3' src='"+data_uri+"' >";
                }
  })

}
