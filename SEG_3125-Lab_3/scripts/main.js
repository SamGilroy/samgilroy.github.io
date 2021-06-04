
/**
 * generate a checkbox list from a list of products.
 * it makes each product name as the label for the checkboxes.
 */
function populateListProductChoices() {
	let dietaryPreferences = document.querySelectorAll('input[type="checkbox"]:checked');
	let display = document.getElementById('displayProduct');
	let restrictions = [];

	for (let preference of dietaryPreferences) {
		restrictions.push(preference.value);
	}
	
	display.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, restrictions);

	for (i = 0; i < optionArray.length; i++) {
		
		// Show a picture of the item and add an extra space.
		var image = document.createElement("img");
		image.src = optionArray[i].img;
		image.alt = productName;
		display.appendChild(image);
		
		display.appendChild(document.createElement("br"));
	}
}

/**
 * This function is called when the "Add selected items to cart" button in clicked.
 * The purpose is to build the HTML to be displayed (a Paragraph).
 * We build a paragraph to contain the list of selected items, and the total price.
 */
function selectedItems(){

	let ele = document.getElementsByName("product");
	let chosenProducts = [];
	let c = document.getElementById('displayCart');

	c.innerHTML = "";
	
	// build list of selected item
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			var para = document.createElement("div");
			para.className = 'cart--item';

			para.innerHTML += `<span class="product--name">${ele[i].value}</span>`;
			para.innerHTML += `<span class="product--price">$${getTotalPrice(ele[i].value)}</span>`;

			chosenProducts.push(ele[i].value);
			c.appendChild(para);
		}
	}

	c.appendChild(document.createElement('hr'));

	let total = document.createElement('div');
	total.className = 'total';
	total.innerHTML = `<p class='total--text'>Total</p>`;
	total.innerHTML += `<p class='total--amount'>$${getTotalPrice(chosenProducts)}</p>`;

	c.appendChild(total);
}

/**
 * 
 * @param {*} select 
 */
function selectOptions(select) {
	var result = [];
	var options = select && select.options;
	var opt;
  
	for (var i=0, iLen=select.length; i<iLen; i++) {
	  opt = options[i];
  
	  if (opt.selected) {
		result.push(opt.value || opt.text);
	  }
	}
	return result;
}

/**
 * Handle revealing the accordion at the next or previous step.
 * 
 * @param {*} step
 */
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
