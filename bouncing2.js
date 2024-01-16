//this code was adapted from Yale's Night school homepage + various Youtube tutorials on bouncing DVD screen in JS

const items = document.querySelectorAll("img");
const circles = document.getElementsByClassName("circles");
const defaultSpeed = 4;
let speed = defaultSpeed;

function animateItems() {
  items.forEach((item) => {
    let directionX = Math.random() * 2 - 1;
    let directionY = Math.random() * 2 - 1;
    let left = window.innerWidth / 2 - item.clientWidth / 2;
    let top = window.innerHeight / 2 - item.clientHeight / 2;

    function moveItem() {
      left += speed * directionX;
      top += speed * directionY;

      if (left < 0 || left + item.clientWidth > window.innerWidth) {
        directionX *= -1;
      }

      if (top < 0 || top + item.clientHeight > window.innerHeight) {
        directionY *= -1;
      }

      item.style.left = left + "px";
      item.style.top = top + "px";

      requestAnimationFrame(moveItem);
    }

    item.addEventListener("mouseenter", () => {
      speed = 0;
    });

    item.addEventListener("mouseleave", () => {
        speed = defaultSpeed;
        directionX *= -1;
        directionY *= -1;
      }
    );

    moveItem();
  });


}
animateItems();