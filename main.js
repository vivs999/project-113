function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(60,350);
    video = createCapture(VIDEO);
    video.hide();
    circle_color = document.getElementById("circle_color").value ;
    rect_color = document.getElementById("border_color").value ;
}

function draw(){
    image(video,40,40,540,400);
    stroke(circle_color);
    fill (circle_color)
   circle (50,50,80);
   circle (50,430,80);
   circle (590,430,80);
   circle (590,50,80);

   stroke(rect_color);
   fill(rect_color);
   rect (90,40,460,20);
   rect (90,420,460,20);
   rect (40,90,20,300);
   rect (580,90,20,300);
}

function snap(){
    save('save_name.png');
}

function update(){
    circle_color = document.getElementById("circle_color").value ;
    rect_color = document.getElementById("border_color").value ;
}

function take_snapshot(){
    save('save_name.png');
}