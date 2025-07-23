function getBox(el) {
  return el.getBoundingClientRect();
}

function checkCollision(a, b) {
    let check1= a.left < b.right &&
    a.right > b.left;
    let check2=a.top < b.bottom &&
    a.bottom > b.top;
  return check1 && check2
}

const player = document.getElementById("player");
const enemy1 = document.getElementById("enemy1");
const enemy2 = document.getElementById("enemy2");
const box = document.querySelector(".box"); 

let interval = setInterval(() => {
  const pBox = getBox(player);
  const e1Box = getBox(enemy1);
  const e2Box = getBox(enemy2);
  const boxBox=getBox(box);

  if (checkCollision(pBox, e1Box) || checkCollision(pBox, e2Box)) {
    clearInterval(interval);
    alert(" Collision Detected! YOU LOOSE");
    location.reload(); 
  }
  if (pBox.right >= boxBox.right - 5) {
    clearInterval(interval);
    alert("🎉 YOU WIN!");
    location.reload();
  }
}, 100);
