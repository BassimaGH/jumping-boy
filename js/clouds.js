export default class Clouds {
    
    constructor(x, y, width, height, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
    }
    }
    function cloud(drow) {
        
    } draw( cloud) 
        makeCloud( cloudx, cloudy);
        makeCloud(cloud+100 , cloudy+100)
        fill(200)
        noStroke();
        triangle(100, 400,500 ,300,100);
        fill(200);
        triangle(300, 400 ,500, 4000, 400, 200);
        cloudx+=0.1;

        

    function makeCloud(cloudx, cloudy){
        fill(250)
        noStroke();
        ellipse (cloudx, cloudy, 70, 50);
        ellipse(cloudx, +10, cloudy,10,70,50);
        ellipse (cloudx-20, cloudy+10,70,50);
    }