// code based on Professor Caroline Barriere's example

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Organic Broccoli",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 1.99
		img: "images/broccoli.png",
		
	},
	{
		name: "Bread",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 2.35
		img: "images/bread.png",
	},	
	{
		name: "Organic Peanut Butter",
		lactoseIntolerant: true,
		nutAllergy: false,
        organic: true,
		price: 3.00
		img: "images/peanutbutter.png",
	},
	{
		name: "Organic Canned Corn",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 3.50
		img: "images/corn.png",
	},
	{
		name: "1% Milk",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: false,
		price: 3.99
		img: "images/1pmilk.png",
	},
	{
		name: "Strawberries",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 4.25
		img: "images/strawberries.png",
	},
	{
		name: "Cheese",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: false,
		price: 4.50
		img: "images/cheese.png",
	},
	{
		name: "Organic Milk",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: true,
		price: 5.00
		img: "images/omilk.png",
	},
	{
		name: "Almond Milk",
		lactoseIntolerant: true,
		nutAllergy: false,
        organic: false,
		price: 5.25
		img: "images/amilk.png",
	},
	{
		name: "Organic Apples",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 6.35
		img: "images/apples.png",
	},
  {
		name: "Pork Chops",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 7.95
	  img: "images/pork.png",
	},
	{
		name: "Salmon",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 10.00
		img: "images/salmon.png",
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_list = [];
	for (let i=0; i<prods.length; i+=1) {

		if (!(restriction[2] & (restriction[2] ^ prods[i].organic) | restriction[1] & (restriction[1] ^ prods[i].nutAllergy) | restriction[0] & (restriction[0] ^ prods[i].lactoseIntolerant))){
			product_list.push(i);
		}				
	}
	
	return product_list;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	
	//Rounds output to 2 decimal places
	return Math.round(totalPrice * 100) / 100;
}
