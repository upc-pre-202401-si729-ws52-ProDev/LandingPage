window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var scrollTop = window.pageYOffset;

    if (scrollTop > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
