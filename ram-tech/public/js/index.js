window.onload = function () {
  // Get the carousel section
  const carouselSection = document.querySelector('section.carousel');

  // Get all carousel images
  const carouselImages = document.querySelectorAll('section.carousel img');

  // Set the initial active image index
  let activeImageIndex = 0;

  // Function to show the next image
  function showNextImage() {
    // Remove active class from the current image
    carouselImages[activeImageIndex].classList.remove('active');

    // Increment the active image index
    activeImageIndex = (activeImageIndex + 1) % carouselImages.length;

    // Add active class to the next image
    carouselImages[activeImageIndex].classList.add('active');
  }

  // Set an interval to show the next image every 5 minutes (300000 milliseconds)
  let intervalId = setInterval(showNextImage, 3000);

  // Pause the interval when mouse enters the carousel section
  carouselSection.addEventListener('mouseenter', function() {
    clearInterval(intervalId);
  });

  // Resume the interval when mouse leaves the carousel section
  carouselSection.addEventListener('mouseleave', function() {
    intervalId = setInterval(showNextImage, 3000);
  });

  // Handle hover effect on individual images
  carouselImages.forEach(function(image, index) {
    image.addEventListener('mouseenter', function() {
      // Remove active class from the current image
      carouselImages[activeImageIndex].classList.remove('active');

      // Set the hovered image as the active image
      activeImageIndex = index;

      // Add active class to the hovered image
      image.classList.add('active');
    });
  });
    // const carousel = document.querySelector(".carousel");
    // const firstImg = carousel.querySelectorAll("img")[0];
    // const icons = document.querySelectorAll(".carousel i");

    // let isSlideStart = false, prevPageX, prevScrollLeft;
    // let firstImgWidth = firstImg.clientWidth + 10;

    // icons.forEach(icon => {
    //     icon.addEventListener("click", () => {
    //         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    //     })
    // });

    // const slideStart = (e) => {
    //     isSlideStart = true;
    //     prevPageX = e.pageX;
    //     prevScrollLeft = carousel.scrollLeft;
    // }

    // const slide = (e) => {
    //     if(!isSlideStart) return;
    //     e.preventDefault();
    //     let positionDiff = e.pageX - prevPageX;
    //     carousel.scrollLeft = prevScrollLeft - positionDiff;
    // }

    // const slideStop = () => {
    //     isSlideStart = false;
    // }

    // carousel.addEventListener("mousedown", slideStart);
    // carousel.addEventListener("mousemove", slide);
    // carousel.addEventListener("mouseup", slideStop);

    //  function moveCarousel() {
    //    carousel.scrollLeft += 1;
    //  }

    //  let timerId = setInterval(moveCarousel, 20);
  
    //  carousel.addEventListener('mouseenter', () => {
    //    clearInterval(timerId);
    //  });
  
    //  carousel.addEventListener('mouseleave', () => {
    //    timerId = setInterval(moveCarousel, 5);
    //  });
}