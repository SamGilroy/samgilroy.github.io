// code based on Professor Caroline Barriere's example

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 1.99
	},
	{
		name: "Apples",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 2.00
	},
	{
		name: "Bread",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 2.35
	},	
	{
		name: "Peanut Butter",
		lactoseIntolerant: true,
		nutAllergy: false,
        organic: true,
		price: 3.00
	},
	{
		name: "Canned Corn",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 3.50
	},
	{
		name: "1% Milk",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: false,
		price: 3.99
	},
	{
		name: "Strawberries",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 4.00
	},
	{
		name: "Cheese",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: false,
		price: 4.50
	},
	{
		name: "Almond Milk",
		lactoseIntolerant: true,
		nutAllergy: false,
        organic: false,
		price: 5.20
	},
  {
		name: "Pork Chops",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 6.30
	},
	{
		name: "Salmon",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 10.00
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function fullArray(prods) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		product_names.push(prods[i]);
	}
	return product_names;
}

function restrictListProducts(prods, restriction) {
	let product_list = [];
	for (let i=0; i<prods.length; i+=1) {

		if (!(restriction[2] & (restriction[2] ^ prods[i].organic) | restriction[0] & (restriction[0] ^ prods[i].nutAllergy) | restriction[1] & (restriction[1] ^ prods[i].lactoseIntolerant))){
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
}
