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
		label.appendChild(document.createTextNode(productName + " - " + price.fixedTo(2)));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
		
		// Show a picture of the item and add an extra space.
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

	var q = document.getElementById('totCounter');
	q.innerHTML = "Total: $" + getTotalPrice();
		
}
