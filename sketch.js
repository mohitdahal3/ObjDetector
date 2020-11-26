// 1325,625


let video;
let detector;
let detections = [];

function modelLoaded(){
  detector.detect(video,gotdetections)
}

function gotdetections(error,results){
  if(error){
    console.error(error);
  }
  detections = results
  detector.detect(video,gotdetections)

}

function setup(){
  createCanvas(1325, 625);
  background(0);
  video = createCapture(VIDEO)
  video.hide();
  video.size(1325,625)
  detector = ml5.objectDetector('cocossd',video, modelLoaded);

}

function draw(){
  image(video, 0, 0, width, height);
  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    console.log(object.x)
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
  }
}
