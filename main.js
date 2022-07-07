song = "";



function preload() {
    song = loadSound('Rustage Todoroki rap.mp3');
    song = loadSound('Fight our Demons.mp3');
}

function setup() {

    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}


function draw() {
    image(video, 0, 0, 600, 500);

}

function Play()
{
song.play();
}