Status = "";
image = "";

function preload() {
    image = loadImage("");
}

function setup() {
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(TV_image,0,0,640,350);
}