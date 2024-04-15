document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0;
  let isAnimating = false;

  showSlide(currentSlideIndex);

  function showSlide(index) {
    console.log(index);
    if (isAnimating) return;
    isAnimating = true;
    const slide = slides[index];
    if (index > 0) {
      const oldSlide = slides[index - 1];
      oldSlide.classList.remove("showing");
    }
    slide.classList.add("showing");
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  }

  function hideSlide(index) {
    console.log(index);
    if (isAnimating) return;
    isAnimating = true;
    if (index > 0) {
      const oldSlide = slides[index];
      const slide = slides[index - 1];
      oldSlide.classList.remove("showing");
      slide.classList.add("showing");
    }
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  }

  window.addEventListener("wheel", (e) => {
    if (isAnimating) return;
    if (e.deltaY > 0 && currentSlideIndex < slides.length - 1) {
      console.log("down", e.deltaY);
      showSlide(currentSlideIndex + 1);
      currentSlideIndex++;
    } else if (e.deltaY < 0 && currentSlideIndex > 0) {
      console.log("up", e.deltaY);
      hideSlide(currentSlideIndex);
      currentSlideIndex--;
    }
  });
});