let canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let x = Math.random() * innerWidth; 
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) *8;
let dy = (Math.random() - 0.5) *8;
let radius = 50;

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth,innerHeight);

   // Circle
    c.beginPath();
    c.arc(x, y, radius, Math.PI*2, false);
    c.strokeStyle = "#c55a83";
    c.stroke();

    if( x + radius > innerWidth || x  < 0 + radius) {
        dx = -dx; 
    }

     if( y + radius > innerHeight || y  < 0 + radius) {
        dy = -dy; 
    }

    x += dx;
    y += dy; 
    
}

animate();