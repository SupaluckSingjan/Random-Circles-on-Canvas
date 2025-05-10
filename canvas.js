let canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let x = 250;
let y = 250;
let radius = 50;

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth,innerHeight);

   // Circle
    c.beginPath();
    c.arc(x, y, radius, Math.PI*2, false);
    c.strokeStyle = "#c55a83";
    c.stroke();

    x += 10
}

animate();