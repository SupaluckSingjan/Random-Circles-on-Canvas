let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.beginPath();
c.arc(250, 250, 50, Math.PI*2, false);
c.strokeStyle = "#c55a83";
c.stroke();