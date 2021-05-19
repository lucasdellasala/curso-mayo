//Definir las clases que nos van a ayudar a resolver este problema

// Clase "Product": name, price, year
class Product {
    constructor (name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// Clase "UI" => User Interface

// DOM Events (Document Object Model - Events)
document.getElementById("product-form")
        .addEventListener("submit", function(){
            alert("HOLA")
        })