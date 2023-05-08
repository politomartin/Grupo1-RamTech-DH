window.onload = function () {
    const carousel = document.querySelector(".carousel");
    const firstImg = carousel.querySelectorAll("img")[0];
    const icons = document.querySelectorAll(".carousel i");

    let isSlideStart = false, prevPageX, prevScrollLeft;
    let firstImgWidth = firstImg.clientWidth + 10;

    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        })
    });

    const slideStart = (e) => {
        isSlideStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const slide = (e) => {
        if(!isSlideStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    const slideStop = () => {
        isSlideStart = false;
    }

    carousel.addEventListener("mousedown", slideStart);
    carousel.addEventListener("mousemove", slide);
    carousel.addEventListener("mouseup", slideStop);

    // function moveCarousel() {
    //   carousel.scrollLeft += 1;
    // }

    // const timerId = setInterval(moveCarousel, 20);
  
    // carousel.addEventListener('mouseenter', () => {
    //   clearInterval(timerId);
    // });
  
    // carousel.addEventListener('mouseleave', () => {
    //   timerId = setInterval(moveCarousel, 5);
    // });
}