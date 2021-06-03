window.onload = () => {
        let acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            toggleAccordion(this);
        });
    }
    toggleAccordion(acc[0]);
}


 //Toggles the current selected accoridon.
function toggleAccordion(accordion) {
    if (!accordion.classList.contains('disabled')) {
        accordion.classList.toggle('active');
        accordion.nextElementSibling.classList.toggle('hidden');
    }
}

//closes accordion

function closeAccordion(accordion) {
    accordion.classList.remove('active');
    accordion.nextElementSibling.classList.add('hidden');
}

//resets accordian
function resetAccordions(accordion) {
    let acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        closeAccordion(acc[i]);
    }

    toggleAccordion(accordion);
}
