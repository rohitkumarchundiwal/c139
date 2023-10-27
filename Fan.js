Status = "";
Fan_image = "";

function preload() {
    Fan_image = loadImage("Fan.jpg");
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
    object_detector.detect(Fan_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(image, 0, 640, 420)

    if(Status != "");
    {
        for (i = 0; i < objects.length; i++);
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }
}