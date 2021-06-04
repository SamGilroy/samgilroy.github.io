// Global vars indicating diet preferences
var pLac = false;
var pNut = false;
var pOrg = false;

/**
* This function toggles diet preferences in the sidebar. Text class is changed to
* indicate selection.
*/
function updatePref(pref) {

switch (pref) {
  case 0:
    pLac = !pLac;
    var temp = document.getElementById("lac");
    if(pLac){
    temp.className = "selected";
    }
    else{
    temp.className = "selector";
    }
    break;
  case 1:
    pNut= !pNut;
    var temp = document.getElementById("nut");    
    if(pNut){
    temp.className = "selected";
    }
    else{
    temp.className = "selector";
    }
    break;
  case 2:
    pOrg = !pOrg;
    var temp = document.getElementById("org");
    if(pOrg){
    temp.className = "selected";
    }
    else{
    temp.className = "selector";
    }
    break;
  default:
    break;
}

populateListProductChoices(pLac,pNut,pOrg, 'displayProduct')
}

// Greens out product entry if we select it, and sets the selection flag.
function selectItem(item) {
    if(item.className == "product") {
     item.className = "productP";
     products[item.value].selected = true;
     selectedItems();
    } 
    
    else {
     item.className = "product";
     products[item.value].selected = false;
     selectedItems();
    }
}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(c1,c2,c3, slct2) {

     var ele = document.getElementsByClassName("productP");

    // Each restriction is placed in array that is sent to the restriction function.    
    var s1 = [c1, c2, c3];
    
    // 0 = nut allergy, 1 = lactose intolerant, 2 = only organic products
    
    var s2 = document.getElementById(slct2);
	
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
			
		// Product attributes are now wrapped in a div element for styling purposes.
		let newDiv = document.createElement('div');
		
		/* We keep track of items that have been selected, regardless of if they're displayed. */
		if(products[optionArray[i]].selected) {
		    newDiv.className = "productP";
		}
		
		else {
		    newDiv.className = "product";
		}
		
		newDiv.setAttribute("onclick","selectItem(this);");
		var productName = products[optionArray[i]].name;
		var pIndex = optionArray[i];
		var pricey = products[optionArray[i]].price;

		newDiv.value = pIndex; // Value now based on DB index.

               //Header for product card.
		newDiv.appendChild(document.createTextNode(productName + " - $" + pricey));

		
		// create a breakline node and add in HTML DOM
		newDiv.appendChild(document.createElement("br"));
		
		// Show a picture of the item and add an extra space.
		var image = document.createElement("img");
		image.src = products[optionArray[i]].img;
		image.alt = productName;
		newDiv.appendChild(image);
	
		// Add product card and prepare for next one.
		newDiv.appendChild(document.createElement("br"));		
		s2.appendChild(newDiv);
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
