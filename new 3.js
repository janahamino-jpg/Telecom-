const canvas = document.getElementById('network');
const ctx = canvas.getContext('2d');
let width, height, nodes;

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    nodes = [];
    for(let i = 0; i < 100; i++) {
        nodes.push({
            x: Math.random()*width,
            y: Math.random()*height,
            r: Math.random()*3 + 1,
            dx: (Math.random()-0.5)*0.5,
            dy: (Math.random()-0.5)*0.5
        });
    }
}
function draw() {
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = '#ff6600';
    nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
        ctx.fill();
        n.x += n.dx;
        n.y += n.dy;
        if(n.x<0||n.x>width) n.dx*=-1;
        if(n.y<0||n.y>height) n.dy*=-1;
    });
    requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();
