var menuLogo = document.getElementById("menu-logo");
var headerMenu = document.getElementsByClassName("headerMenu");
var dataBaseMenu = document.getElementById("dataBaseMenu");
var dataBaseTbl = document.getElementById("allDataBaseTbl");

menuLogo.addEventListener("click", function(){
    headerMenu[0].classList.toggle("headerMenuActive");
    menuLogo.classList.toggle("rotateMenuLogo");
});


var dataBase = {
    "Гвозди H": 10,
    "Гвозди О": 34,
    "Пивко": 45,
    "Кран": 5,
}

var dataBasePrice = {

}

var keys = Object.keys(dataBase);

dataBasePrice[keys[0]] = 100;
dataBasePrice[keys[1]] = 500;
dataBasePrice[keys[2]] = 200;
dataBasePrice[keys[3]] = 900;

console.log();


dataBaseMenu.children[1].addEventListener("click", function(){
    for(let i = 0; i < keys.length; i++){
        var tr = document.createElement("tr");
        dataBaseTbl.children[0].appendChild(tr);
    };
    for(var it = 1; it < dataBaseTbl.children[0].children.length; it++){
        for(let i = 0; i < 3; i++){
            td = document.createElement("td");
            dataBaseTbl.children[0].children[it].appendChild(td);
        }
    };
    for(var z = 0; z < dataBaseTbl.children[0].children.length; z++){
        // for(let i = 1; i < 3; i++){
        dataBaseTbl.children[0].children[z + 1].children[0].innerHTML = keys[z];
        dataBaseTbl.children[0].children[z + 1].children[1].innerHTML = dataBase[keys[z]];
        dataBaseTbl.children[0].children[z + 1].children[2].innerHTML = dataBasePrice[keys[z]];
        // }
    };
});



