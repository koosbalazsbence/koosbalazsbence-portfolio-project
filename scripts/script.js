
let backToTopBtn = document.querySelector("#backToTopBtn")

window.onscroll = () => {scrollFunction()}

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        // backToTopBtn.classList.add("slide-back")
        backToTopBtn.style.display = "block"
    }
    else{
        backToTopBtn.style.display = "none"
        // backToTopBtn.classList.remove("slide-back")
    }
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}