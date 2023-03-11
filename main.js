let span = document.querySelector(".up");

window.onscroll = function() {
    this.scrollY >= 400 ? span.classList.add("show") : span.classList.remove("show");
}

span.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

let menu = document.getElementById("menu");
let contentMenu =document.getElementById("content-menu");
let spanFull = document.getElementById("full");

menu.onclick = function() {
    contentMenu.style.top = "25px";
    spanFull.style.width= "100%";
    contentMenu.style.display= "block";
}

contentMenu.onmouseleave = function () {
    contentMenu.style.display= "none";
    spanFull.style.width= "60%";
}