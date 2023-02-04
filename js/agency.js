// Selectors
let barToggler = document.querySelector(".nav-toggler")
let items = document.querySelector(".menu-bar")



// Menu Button Function
barToggler.addEventListener("click", function () {
    if (items.style.right == "-360px") {
        items.style.right = "0";
    } else {
        items.style.right = "-360px"
    }
})















// Nav Bar White Background 
var $nav = $(".nav");

$(function () {
    $(document).scroll(function () {
        $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    });
});