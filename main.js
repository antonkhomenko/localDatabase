var menuLogo = document.getElementById("menu-logo");
var headerMenu = document.getElementsByClassName("headerMenu");
var dataBaseMenu = document.getElementById("dataBaseMenu");
menuLogo.addEventListener("click", function(){
    headerMenu[0].classList.toggle("headerMenuActive");
    menuLogo.classList.toggle("rotateMenuLogo");
})

dataBaseMenu.children[1].addEventListener("click", function(){

});


var dataBase = {
    "Гвозди H": 10,
}

var dataBasePrice = {
    "Гвозди H": 33,
    ggg: 30,
    hh: 57,
}

var keys = Object.keys(dataBasePrice);

console.log(keys);