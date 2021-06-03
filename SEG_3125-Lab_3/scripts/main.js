
function populateListProductChoices(c1,c2,c3, slct2) {

    // Each restriction is placed in array that is sent to the restriction function.
    var chk1 = document.getElementById(c1);
    var chk2 = document.getElementById(c2);
    var chk3 = document.getElementById(c3);
    
    var s1 = [chk1.checked, chk2.checked, chk3.checked];
    
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so first set it empty	
	
    s2.innerHTML = "";
		
    // obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1);
    
    // Sort with comparator to sort products by price.
    optionArray.sort(function(a,b){
        if(products[a].price < products[b].price) {return -1;}     	
        else if(products[a].price > products[b].price) {return 1;}
        else{return 0;}
    });

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = products[optionArray[i]].name;
		var price = products[optionArray[i]].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM	
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " - $" + price.toFixed(2)));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
		var image = document.createElement("img");
		image.src = products[optionArray[i]].img;
		image.alt = productName;
		s2.appendChild(image);
		s2.appendChild(document.createElement("br"));
		s2.appendChild(document.createElement("br"));
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "Your order is the following: ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts).toFixed(2)));		
}

//steps of accordian
function next(step) {
	// Expand the next accordion.
	let accordion = document.getElementById(`step-${step}`);

	accordion.classList.remove('disabled');
	accordion.classList.add('active');
	accordion.nextElementSibling.classList.remove('hidden');

	resetAccordions(accordion);
}

window.addEventListener('load', (event) => {
	populateListProductChoices();
});
