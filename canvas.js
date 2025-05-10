let canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');



function Circle(x,y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    // Circle
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI*2, false);
        c.strokeStyle = "#c55a83";
        c.stroke();
    }

    // Boundaries & Velocity
    this.update = function() {
        if( this.x + this.radius > innerWidth || this.x  < 0 + this.radius) {
            this.dx = -this.dx; 
        }

        if( this.y + this.radius > innerHeight || this.y  < 0 + this.radius) {
            this.dy = -this.dy; 
        }

        this.x += this.dx;
        this.y += this.dy; 

        this.draw();
        }

        
}

/* let x = Math.random() * innerWidth; 
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) *8;
let dy = (Math.random() - 0.5) *8;
let radius = 50; */

let circleArray = [];

for(let i =0;i < 100; i++) {
    let x = Math.random() * innerWidth; 
    let y = Math.random() * innerHeight;
    let dx = (Math.random() - 0.5) *8;
    let dy = (Math.random() - 0.5) *8;
    let radius = 50;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray)


const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth,innerHeight);
    
    for(let i = 0; i <circleArray.length; i++) {
        circleArray[i].update();
    }
    
}

animate();