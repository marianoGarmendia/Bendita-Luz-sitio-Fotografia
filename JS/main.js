
window.onload = () => {
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel , {
        duration: 200,
        dist: -80,
        padding: 10,
        indicators: false,
    })
}