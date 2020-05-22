const prevBtns = document.querySelectorAll(".previousbtn");
const nextBtns = document.querySelectorAll(".nextbtn");
const testimonials = document.querySelectorAll(".article");
const total = testimonials.length;
let current = 0;

prevBtns.forEach(btn =>
  btn.addEventListener("click", () => {
    testimonials[current].classList.remove("showing");
    if (current > 0) {
      current = current - 1;
    } else {
      current = total - 1;
      console.log(current);
    }
    testimonials[current].classList.add("showing");
  })
);

nextBtns.forEach(btn =>
  btn.addEventListener("click", () => {
    testimonials[current].classList.remove("showing");
    if (current < total - 1) {
      current = current + 1;
    } else {
      current = 0;
    }
    testimonials[current].classList.add("showing");
  })
);
