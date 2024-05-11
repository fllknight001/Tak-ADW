

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.second-slider img');
  const slider = document.querySelectorAll(`.card-container .cardS .terkini a img .berita a p `);
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 2;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
  }
}



function secnextSlide() {
  showSlide(++slideIndex);
}

function secprevSlide() {
  showSlide(--slideIndex);
}

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  


  let isPressed = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isPressed = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('active')
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseleave", () => {
    isPressed = true;
    slider.classList.remove('active');
  });

  slider.addEventListener("mouseup", () => {
    isPressed = true;
    slider.classList.remove('active');
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isPressed) return;
      e.preventDefault();
      const x = e.page - slider.offsetLeft;
      const walk =(x - startX) * 3;
      slider.scrollLeft = walk;
      boundSlides();
  });
});
function boundSlides() {
  const containerRect = slider.getBoundingClientRect();
  const cardsRect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    slider.style.left = 0;
  } else if (cardsRect.right < containerRect.right) {
    slider.style.left = `-${cardsRect.width - containerRect.width}px`;
  }
} 

function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on('init', () => {
    if (!swiper.params.debugger) return;
    console.log('init');
  });
  on('click', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('click');
  });
  on('tap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('tap');
  });
  on('doubleTap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('doubleTap');
  });
  on('sliderMove', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('sliderMove');
  });
  on('slideChange', () => {
    if (!swiper.params.debugger) return;
    console.log(
      'slideChange',
      swiper.previousIndex,
      '->',
      swiper.activeIndex
    );
  });
  on('slideChangeTransitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionStart');
  });
  on('slideChangeTransitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionEnd');
  });
  on('transitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionStart');
  });
  on('transitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionEnd');
  });
  on('fromEdge', () => {
    if (!swiper.params.debugger) return;
    console.log('fromEdge');
  });
  on('reachBeginning', () => {
    if (!swiper.params.debugger) return;
    console.log('reachBeginning');
  });
  on('reachEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('reachEnd');
  });
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/*function showSlide(n) {
  const slider = document.querySelectorAll(`.card-container .cardS .terkini a img .berita a p `);

if (n >= slider.length) {
  slideIndex = 0;
}
if (n < 0) {
  slideIndex = slider.length - 2;
}
for (let i = 0; i < slider.length; i++) {
  slider[i].style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
  showSlide(++slideIndex);
}

function prevSlide() {
  showSlide(--slideIndex);
}
}*/













