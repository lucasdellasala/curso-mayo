//Definir las clases que nos van a ayudar 
//a resolver este problema
// Clase "Product": name, price, year
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// Clase "UI" => User Interface
class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list")
        const elementProduct = document.createElement("div")
        elementProduct.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} -
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `
        productList.appendChild(elementProduct)
    }
    deleteProduct(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.remove()
        }
    }
    resetForm() {
        document.getElementById("product-form").reset()
    }
    showMessage(message, cssClass) {
        const div = document.createElement("div")
        div.className = `alert alert-${cssClass} mt-2`
        div.appendChild(document.createTextNode(message))

        // Mostrar en el DOM
        const container = document.querySelector(".container")
        const app = document.querySelector("#App")

        // Insertar mensaje en la UI
        container.insertBefore(div, app)

        // Remover el mensaje
        setTimeout(function () {
            document.querySelector(".alert").remove()
        }, 1500)
    }
}

// DOM Events (Document Object Model - Events)
document.getElementById("product-form")
    .addEventListener("submit", function (e) {
        //Evita que se recargue la página cuando damos submit
        e.preventDefault()

        // Crear UI
        const ui = new UI()

        // Obtención de los datos del formulario
        const name = document.getElementById("name").value
        const price = document.getElementById("price").value
        const year = document.getElementById("year").value

        // Validar que haya info correcta en el formulario
        if (name === "" || price === "" || year === "") {
            ui.showMessage("Pleasse Insert data in all fields", "danger")
        } else {
            // Tenemos que instanciar la clase Product para cada vez que toquen submit
            const product = new Product(name, price, year)
            // Agregar el producto al DOM en la product-list
            ui.addProduct(product)
            //Mostrar mensaje de éxito
            ui.showMessage("Product Added Successfully", "success")
            // Limpiamos el formulario
            ui.resetForm()
        }
    })

document.getElementById("product-list")
    .addEventListener("click", function (e) {
        const ui = new UI()
        ui.deleteProduct(e.target)
        e.preventDefault()
    })

/*
// TRAEMOS DATA DE PRODUCTOS DE UNA API EXTERNA
const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

fetch(url)
    .then(response => response.json())
    .then(res => {
        const ui = new UI()
        res.map((product)=>{
            //Crear objeto producto
            const prod = new Product(product.name, product.price, "2021")
            //Agregar el producto a la UI
            ui.addProduct(prod)
        })
    })
*/