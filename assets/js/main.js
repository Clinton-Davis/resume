$(function () {
    var scrollLink = $('.scroll');
    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
})

window.addEventListener('scroll', () => {
    const btt = document.getElementById("backToTop")
    const scrolled = window.scrollY;
    console.log(scrolled)
    if (scrolled > 500) {
        btt.style.opacity = 1;
    } else {
        btt.style.opacity = 0;
    }
})
