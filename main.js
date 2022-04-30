function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classiffier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pgdSzumwr/model.json",modelReady);
}
function modelReady(){
    classiffier.classify(gotResults);
}
function gotResults(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
}
}