//Selecting menu properties

const menu = document.getElementById("menu");

const showMenu = document.querySelector(".show-menu");

const closeMenu = document.querySelector(".close-menu");

//toggle menu function

function toggleMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

//handling menu click events
showMenu.addEventListener("click", (e) => {
  toggleMenu();
  e.target.classList.add("hidden");
  closeMenu.classList.remove("hidden");
});
closeMenu.addEventListener("click", (e) => {
  toggleMenu();
  e.target.classList.add("hidden");
  showMenu.classList.remove("hidden");
});

//selecting form input properties

const input = document.getElementById("signUp");
const btn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error");

btn.addEventListener("click", (e) => {
  const email = input.value.toLowerCase();
  const emailRegex = /^[a-z]+\d+\@[a-z]+\.[a-z]{3}/gm;
  e.preventDefault();
  if (!email) {
    errorMsg.classList.remove("hidden");
  } else if (!emailRegex.test(email)) {
    errorMsg.classList.remove("hidden");
  } else {
    errorMsg.classList.add("hidden");
  }
});

//selecting testimonial element for carousel

const slideCont = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-Btn");
const prevBtn = document.querySelector(".prev-Btn");
const dots = document.querySelectorAll(".dot");

const slidesWidth = slides[0].clientWidth;
let currentSlide = 0;

//position
function slidesPosition() {
  slides.forEach((slide, i) => {
    slide.style.left = i * 100 + "%";
  });
}
slidesPosition();

// moving slides
function moveSlide(num) {
  let slideTo = slidesWidth * num;
  slideCont.style.transform = `translateX(${-slideTo}px)`;
}

//handling clicks for slide nav
//slide next nav btn

//checking for the last slide for both small and large screen
//stopping the current slide from increasing,
//to avoid showing blank space
nextBtn.addEventListener("click", () => {
  if (currentSlide >= 2) {
    if (window.innerWidth >= 1024) {
      currentSlide = slides.length - 3;
    } else if (currentSlide === slides.length - 1) {
      currentSlide = slides.length - 2;
    }
  }

  currentSlide++;
  moveSlide(currentSlide);
  moveDot(currentSlide);
});

//slide prev nav btn
prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    currentSlide = 1;
  }
  currentSlide--;
  moveSlide(currentSlide);
  moveDot(currentSlide);
});

//moving dots
function moveDot(num) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
    if (dot.id - 1 === num) {
      dot.classList.add("active");
    }
  });
}
//nav dots
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    let slideTo = dot.id - 1;
    moveSlide(slideTo);
    moveDot(slideTo);
  });
});
