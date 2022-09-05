var elShoppingForm = document.querySelector(".shopping-list-form");
var elShoppingInput = document.querySelector(".shopping-list-input");
var elShoppingBtn = document.querySelector(".shopping.btn");
var elItem =document.querySelector(".item")
var elShoppingList = document.querySelector(".shopping-list")


var products = [];

elShoppingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    products.push(elShoppingInput.value);

    elShoppingList.textContent = ""

    for(var product of products) {
        var liElament = document.createElement("li");
        liElament.textContent = product;

        elShoppingList.appendChild(liElament);
    }
})