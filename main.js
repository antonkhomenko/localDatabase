var menuLogo = document.getElementById("menu-logo");
var headerMenu = document.getElementsByClassName("headerMenu");
var headerLogo = document.getElementById("header-logo");
var dataBaseMenu = document.getElementById("dataBaseMenu");
var dataBaseTbl = document.getElementById("allDataBaseTbl");
var searchBtn = document.getElementById("search-btn");
var searchLine = document.getElementById("search-line");
var addForm = document.getElementById("add-form");
var applyBtn = document.getElementById("apply-btn");
var addingTr = document.getElementById("adding-tr");


menuLogo.addEventListener("click", function(){
    headerMenu[0].classList.toggle("headerMenuActive");
    menuLogo.classList.toggle("rotateMenuLogo");
});

headerLogo.addEventListener("click", function(){
    location.reload();
});


var dataBase = {
    // "Гвозди H": 10,
    // "Гвозди О": 34,
    // "Пивко": 45,
    // "Кран": 5,
};



var dataBasePrice = {

};

var keys = Object.keys(dataBase);

// dataBasePrice[keys[0]] = 100;
// dataBasePrice[keys[1]] = 500;
// dataBasePrice[keys[2]] = 200;
// dataBasePrice[keys[3]] = 900;

var checkVar = 0;

var checkVar3 = 0;

dataBaseMenu.children[1].addEventListener("click", function(){
if(checkVar == 0){
    checkVar = 1;
    if(checkVar2 == 1){
        setTimeout(function(){
            window.location.reload();
          });
    }
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
        checkVar3 = 1;
    };
} else {
    location.reload();
}
});

var checkVar2 = 0;

searchBtn.addEventListener("click", function(){
if(checkVar2 == 0){
    checkVar2 = 1;
    if(checkVar3 == 1){
        setTimeout(function(){
            window.location.reload();
          });
    }
    var searchTxt = searchLine.value;
    var searchElementIndex
    keys.forEach(function(item, index, array){
        if(searchTxt == item){
             searchElementIndex = index;
        };
    });
    if(searchElementIndex != undefined){
      var trS = document.createElement("tr");
      dataBaseTbl.children[0].appendChild(trS);
      for(let i = 0; i < 3; i++){
          var tdS = document.createElement("td");
          trS.appendChild(tdS);
      }

    dataBaseTbl.children[0].children[1].children[0].innerHTML = keys[searchElementIndex];
    dataBaseTbl.children[0].children[1].children[1].innerHTML = dataBase[keys[searchElementIndex]];
    dataBaseTbl.children[0].children[1].children[2].innerHTML = dataBasePrice[keys[searchElementIndex]];

    }else {
        alert("Товар не найден");
    }
}else {
    setTimeout(function(){
        window.location.reload();
      });
}

});

dataBaseMenu.children[2].addEventListener("click", function(){
    addForm.classList.toggle("activeFlex");
    dataBaseTbl.classList.toggle("opacBody");
});

applyBtn.addEventListener("click", function(){
    var keyLS = addingTr.children[0].children[0].value;
    var valueLS = addingTr.children[1].children[0].value;
    localStorage.setItem(keyLS, valueLS);
    addForm.classList.toggle("activeFlex");
    dataBaseTbl.classList.toggle("opacBody");
    console.log(keyLS);
});










