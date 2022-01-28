img = "";
status = "";
objects = [];
song = "";


function preload(){
    img = loadImage('baby img1.jpg');
}

function setup(){
    canvas = createCanvas(500, 680);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Baby"; 
}

function modelLoaded(){
    console.log("modelLoaded!");
    status = true;
}

function gotResult(error, results){
 if(error){
     console.log(error);
 }
 console.log(results);
 objects = results;
}

function draw(){
    image(img, 0, 0, 500, 680);
    if(status != ""){
        objectDetector.detect(img, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            r = random(255);
            g = random(255);
            b = ramdom(255);
            document.getElementById("status").innerHTML = "Status Baby Detected";
            document.getElementById("baby_found_or_not").innerHTML = "Baby Found";
            fill(r,g,b);
            percent = floor(objects[i].confidence *100);
            text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

