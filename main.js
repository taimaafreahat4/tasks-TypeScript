"use strict";
const storeName = "ElectroShop";
const storeDescription = "Electronics Store";
const currency = "USD";
let availableProducts = 5;
let isStoreOpen = true;
let productNames = [
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];
let productInfo = [
    "Laptop",
    650,
    true
];
if (isStoreOpen) {
    console.log("Store is Open");
}
else {
    console.log("the store is closed");
}
let price = 650;
if (price > 500) {
    console.log("Expensive Produce");
}
else if (price > 100 && price <= 500) {
    console.log("Medium Price Product");
}
else {
    console.log("Affordable Product");
}
for (let name of productNames) {
    console.log(name);
}
let prices = [650, 300, 150, 50, 25];
let count = 0;
for (let price of prices) {
    if (price > 100) {
        count++;
    }
}
console.log(count);
function caluclateDiscount(price, discount) {
    return price - (price * discount / 100);
}
console.log(caluclateDiscount(200, 10));
function checkproductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
console.log(checkproductAvailability(5));
function displayStoreMessage(message) {
    console.log(message);
}
function displayProductInfo(productName, productPrice, productdescription, currency = "USD") {
    console.log(productName);
    console.log(productPrice);
    console.log(currency);
    if (productdescription !== undefined) {
        console.log(productdescription);
    }
}
displayProductInfo("Laptop", 650);
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 150));
const products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];
const button = document.getElementById("loadbtn");
const container = document.getElementById("productContainer");
button?.addEventListener("click", function () {
    if (container) {
        container.innerHTML = "";
        for (let product of products) {
            container.innerHTML += `
                <div>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>${product.price} USD</p>
                </div>
            `;
        }
    }
});
