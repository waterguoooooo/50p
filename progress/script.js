const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const showMe = document.querySelector('#change')
const bgArr = ['#000', 'red', 'blue', 'pink']
let currentActive = 1;


showMe.addEventListener('click', ()=>{
   const model = document.querySelector('#model')
   model.style.opacity = 0
   setTimeout(()=>{
       model.remove()
   }, 1000)

})

next.addEventListener("click", () => {
  currentActive++;
  debugger;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
    document.querySelector('body').style.backgroundColor = bgArr[currentActive - 1]
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
