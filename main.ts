const storeName: string = "ElectroShop";

const storeDescription: string = "Electronics Store";

const currency: string = "USD";

let availableProducts: number = 5;

let isStoreOpen: boolean = true;

let productNames: string[] = [
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];


let productInfo:(string | number | boolean)[] = [
    "Laptop",
    650,
    true];

if(isStoreOpen) {
    console.log("Store is Open");
} else {
    console.log("the store is closed");
}

let price:number=650;
if (price>500){
    console.log("Expensive Produce");
}
else if (price>100 && price<=500){
    console.log("Medium Price Product");
}
else {
    console.log("Affordable Product");
}
for (let name of productNames) {
    console.log(name);
}

let prices:number[]=[650, 300, 150, 50, 25];
let count:number=0;
for (let price of prices){
    if (price>100){
        count++;
    }
}

console.log(count);

function caluclateDiscount(price:number,discount:number): number{
    return price-(price*discount/100);
}
console.log(caluclateDiscount(200,10));



function checkproductAvailability(quantity:number):string{
    if(quantity>0){
        return "In Stock";
    } else {
        return "Out of Stock";
    }
}

console.log(checkproductAvailability(5));

function displayStoreMessage(
    message:string): void{
        console.log(message);
    }


    function displayProductInfo(productName:string,
        productPrice:number,
        productdescription?:string,
        currency:string="USD"
    ):void{
        console.log(productName);
        console.log(productPrice);
        
        console.log(currency);
        if(productdescription!==undefined){
            console.log(productdescription);
        }
    }
    displayProductInfo("Laptop",650);

    function calculateTotalPrice(...prices:number[]):number{
        let total:number=0;
        for(let price of prices){
            total+=price;
        }
        return total;
    }
    console.log(calculateTotalPrice(100, 200, 50, 150))



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
