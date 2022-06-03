const pictures = document.querySelectorAll(".picture");
const listNums = document.querySelectorAll("nav ul li");

listNums.forEach((num, idx) => {
  num.addEventListener("click", () => {
    hideAllPictures();
    hideAllNums();

    num.classList.add("active");
    pictures[idx].classList.add("show");
  });
});

function hideAllPictures() {
  pictures.forEach((picture) => picture.classList.remove("show"));
}

function hideAllNums() {
  listNums.forEach((num) => num.classList.remove("active"));
}
