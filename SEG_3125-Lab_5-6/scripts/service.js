function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    var b = document.getElementById(email).value;
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(b)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCC(cardNum) {

  var ccNum = document.getElementById(cardNum).value;
  var visa = /^([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (visa.test(ccNum)) {
        return true;
    }
    else {
        return false;
    }
}

function validateFirst(firstName) {
var regName = /^[a-zA-Z]{2,}$/;
var name = document.getElementById(firstName).value;
    if (regName.test(name)) {
        return true;
    }
    else {
        return false;
    }
}

function validateLast(lastName) {
var regName = /^[a-zA-Z]{2,}$/;
var name = document.getElementById(lastName).value;
  
    if (regName.test(name)) {
        return true;
    }
    else {
        return false;
    }
}

function validate()
{
 var ddl = document.getElementById("inputSpecialist");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "1")
   {
    alert("1");
   }
   else if (selectedValue == "2")
   {
      alert("2");
   }
   else if (selectedValue == "3"){
   {
    alert("3");  
   }
   else
   {
    alert("none");  
   }      
}

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 5 || date.getDay() === 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

function disableD(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0 || date.getDay() === 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

function disableA(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 1 || date.getDay() === 5)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

function disableJ(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 2 || date.getDay() === 3)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    

    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Please use the proper phone number format.");
            $("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });
    
    $("#email").on("change", function(){
        if (!validateEmail("email")){
            alert("Please use the proper email format.");
            $("#email").val("");
            $("#email").addClass("error");
        }
        else {
            $("#email").removeClass("error");
        }
    });
    
    $("#cardNum").on("change", function(){
        if (!validateCC("cardNum")){
            alert("Please use the proper credit card format.");
            $("#cardNum").val("");
            $("#cardNum").addClass("error");
        }
        else {
            $("CardNum").removeClass("error");
        }
    });
    
    $("#firstName").on("change", function(){
        if (!validateFirst("firstName")){
            alert("Please enter a valid first name. (At least 2 letters long)");
            $("#firstName").val("");
            $("#firstName").addClass("error");
        }
        else {
            $("firstName").removeClass("error");
        }
    });
    
    $("#lastName").on("change", function(){
        if (!validateLast("lastName")){
            alert("Please enter a valid last name. (At least 2 letters long)");
            $("#lastName").val("");
            $("#lastName").addClass("error");
        }
        else {
            $("lastName").removeClass("error");
        }
    });
    
     $("#inputSpecialist").on("change", function(){
        validate();
    });
    

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: 0,
            maxDate: '+3M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );
    
    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});
