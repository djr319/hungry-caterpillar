const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d', {alpha: false});
window.addEventListener("resize", resize);
resize();

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let caterpillarX = Math.floor(window.innerWidth/2);
let caterpillarY = Math.floor(window.innerHeight/2);
let caterpillarDirection = 0;

drawCaterpillar();

function drawCaterpillar() {
  // The size of the emoji is set with the font
  ctx.font = '100px serif'
  // use these alignment properties for "better" positioning
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  // draw the emoji
  ctx.fillText('🐛', caterpillarX, caterpillarY);
}
