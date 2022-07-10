//confirm if it is a valid phone number being entered
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
//confirm if it is a valid email format
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
//valid cc
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
//valid name being entered
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

//valid last name
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
    
     var setting, currentSpecialist = 0;
  
  /* Datepicker */
  //days that david works
  function daysD(date){ 
    var day = date.getDay(); 
    return [!(day === 0 || day === 6), '']; 
  }
  //days that amanda works
  function daysA(date){ 
    var day = date.getDay(); 
    return [!(day === 1 || day === 5), '']; 
  }
  //days that joe works
  function daysJ(date){ 
    var day = date.getDay(); 
    return [!(day === 2 || day === 3), '']; 
  }
  
  function daysNone(date){ 
    var day = date.getDay(); 
    return [!(day === 0 ||day === 1 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6), '']; 
  }
  
  
  function loadDatePicker(setting) {
    $("#dateInput").datepicker("destroy");
    if (setting == 'None'){
      $( "#dateInput" ).datepicker({ beforeShowDay: daysNone, minDate: 0, maxDate: "+4M" }); 
    }
    else if(setting == 'D') {
      $( "#dateInput" ).datepicker({ beforeShowDay: daysD, minDate: 0, maxDate: "+4M" }); 
    }
    else if(setting == 'A') {
      $( "#dateInput" ).datepicker({ beforeShowDay: daysA, minDate: 0, maxDate: "+4M" }); 
    }
    else if(setting == 'J') {
      $( "#dateInput" ).datepicker({ beforeShowDay: daysJ, minDate: 0, maxDate: "+4M" }); 
    }
    $( "#dateInput" ).datepicker("refresh");
  }
  
  /* Select box */
  
  $('select#inputSpecialist').change(function() {
    currentSpecialist = $(this).val();
    if (currentSpecialist == 1)
      {
        loadDatePicker(setting = 'D');
      }
    else if (currentSpecialist == 2)
      {
        loadDatePicker(setting = 'A');
      }
    else if (currentSpecialist == 3)
      {
        loadDatePicker(setting = 'J');
      }
    else if (currentSpecialist == 0)
      {
        loadDatePicker(setting = 'None');
      }
    
  });
  

    
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
