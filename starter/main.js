var hamburger = document.querySelector(".navmobile-menu")
var mobileLinksHolder = document.querySelector(".navmobile-links")
var backdrop = document.querySelector(".backdrop")

function hamburgerHandler(){
    hamburger.classList.toggle("showmenu")
    mobileLinksHolder.classList.toggle("shownavmobile-links")
    backdrop.classList.toggle("showbackdrop")

}
