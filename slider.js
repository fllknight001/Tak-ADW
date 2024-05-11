document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevBtn = document.getElementById(".prev");
    const nextBtn = document.getElementById(".next");
  
    let isDown = false;
    let startX;
    let scrollLeft;
  
  
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.classList.add('active')
    });
  
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
        e.preventDefault();
        const x = e.page - slider.offsetLeft;
        const walk =(x - startX) * 3;
        slider.scrollLeft = walk;
    });
  });
  