Webcam.set({
 width : 400,
 height : 400,
 image_format : 'png',
 png_quality : 90
});
var camera = document.getElementById("camera");
Webcam.attach("#camera");
function takeSelfie(){
 Webcam.snap(function(dataUri){
 document.getElementById("result").innerHTML = "<img id = 'selfie' src = " + dataUri + ">";
 });
}
var recogniser = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/70XNkp0i3/model.json", modelLoaded);
function modelLoaded(){
 console.log(modelLoaded);
}