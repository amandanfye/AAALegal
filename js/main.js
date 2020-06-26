//Hamburger Menu for Nav Bar
function hamburger() {
	var x = document.getElementById("myTopnav");//calls ID myTopnav
  	if (x.className === "topnav") { 
    	x.className += " responsive"; //display as hamburger menu if top nav is equal to class responsive which occurs in 		CSS at 840px screensize
  	} else {
    	x.className = "topnav"; //otherwise it will display as the top navigation menu
  	}
}



//Search Bar
 function SearchFunction() {
     var input, filter, ul, li, a, i, txtValue;
     input = document.getElementById("searchbar"); //call the ID searchbar
     filter = input.value.toUpperCase(); //indicates case does not matter
     ul = document.getElementById("accordian"); //call the ID accordian
     li = ul.getElementsByTagName("li"); //call the <li> tag
	 //loop will run for entire length of li element and hide the items that do not match
     for (i = 0; i < li.length; i++) {
         a = li[i].getElementsByTagName("a")[0];
         txtValue = a.textContent || a.innerText;
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
             li[i].style.display = "";
         } else {
             li[i].style.display = "none";
         }
     }
 }




//Search Buttons
(function (document, window, undefined) {
	'use strict'; //'use strict' indicates the code is executed in strict mode for the entire length of the function
  
  	// Buttons
  	var buttons = document.querySelectorAll('.js-button');//selects the button .js-button
  
  	var displayContent = function (button, content) {//calls classes button and content
    	if (content.classList.contains('active')) {// content is hidden
        	content.classList.remove('active');
        	button.setAttribute('aria-expanded', 'false');
        	content.setAttribute('aria-hidden', 'true');
     	} else {//show the content
        	content.classList.add('active');
        	button.setAttribute('aria-expanded', 'true');
        	content.setAttribute('aria-hidden', 'false');
      	}
  	};
  
[].forEach.call(buttons, function(button, index) {
	var content = button.nextElementSibling;//returns element immediately following the button element
    	//set button attributes
    	button.setAttribute('id', 'button-' + index);
    	button.setAttribute('aria-expanded', 'false');
   	 	button.setAttribute('aria-controls', 'content-' + index);
    
    	//set content attributes
    	content.setAttribute('id', 'content-' + index);
   	 	content.setAttribute('aria-hidden', 'true');
    	content.setAttribute('aria-labelledby', 'button-' + index);

		button.addEventListener('click', function () {
      		displayContent(this, content);
      	  	return false;
    	}, false);
    
    	button.addEventListener('keydown', function (event) {
      	// Handle 'space' key
      		if (event.which === 32) {
       		 event.preventDefault();
        	 displayContent(this, content);
      		}
    	}, false);
    
  	});  
  
})(document, window);



//Contact Form
(function ($) {//utilizes JQuery
    "use strict";

    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            

var name = $('.validate-input input[name="name"]'); //name input
var phone = $('.validate-input input[name="phone"]'); //phone input
var email = $('.validate-input input[name="email"]'); //email input
var message = $('.validate-input textarea[name="message"]'); //message input


    $('.validateform').on('submit',function(){//form validates onsubmit assuming all elements are filled in (including 	email)
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }
        if($(phone).val().trim() == ''){
            showValidate(phone);
            check=false;
        }
        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }
        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validateform .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {//form throws error alerts when an input is missed
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {//removes alert when the input is complete
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);