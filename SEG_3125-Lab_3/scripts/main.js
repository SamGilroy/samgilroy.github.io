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
		s2.appendChild(document.createElement("br"));
		s2.appendChild(document.createElement("br"));
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	var price = products[optionArray[i]].price;
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
			para.appendChild(price));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	var q = document.getElementById('totCounter');
	q.innerHTML = "Total: $" + getTotalPrice();		
}
