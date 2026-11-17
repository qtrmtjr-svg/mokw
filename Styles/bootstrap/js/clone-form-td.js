/*
Author: Tristan Denyer (based on Charlie Griefer's original clone code, and some great help from Dan - see his comments in blog post)
Plugin repo: https://github.com/tristandenyer/Clone-section-of-form-using-jQuery
Demo at http://tristandenyer.com/using-jquery-to-duplicate-a-section-of-a-form-maintaining-accessibility/
Ver: 0.9.4.1
Last updated: Sep 24, 2014

The MIT License (MIT)

Copyright (c) 2011 Tristan Denyer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// Encoding: Windows-1256
$(function () {
	
	/*
	 var num = $('.clonedInput').length;
		$('#btnAdd').attr('disabled', true);
		$(document).on('change', '.select_ttl', function() {
			console.log($(this).val());

			if ($(this).val() == "1") {
				$(this).closest('.clonedInput').find('.reqx').val('');
				$('#btnAdd').attr('disabled', true);
				$(document).on('keyup', '.reqx', function() {
					var empty = false;
					$(this).closest('.normal').find('.reqx').each(function() {
						if ($(this).val() == '') {
							empty = true;
						}
					});
					if (empty) {
						$('#btnAdd').attr('disabled', true);
					} else {
						$('#btnAdd').attr('disabled', false);
					}
				});
			} else if ($(this).val() == "2") {
				$(this).closest('.clonedInput').find('.reqxorg').val('');
				$('#btnAdd').attr('disabled', true);
				$(document).on('keyup', '.reqxorg', function() {
					var empty = false;

					$(this).closest('.org').find('.reqxorg').each(function() {
						if ($(this).val() == '') {
							empty = true;
						}
					});

					if (empty) {

						$('#btnAdd').attr('disabled', true);

					} else {
						$('#btnAdd').attr('disabled', false);
					}
				});

			}
		}); */
		
	
    $('#btnAdd').click(function () {
    	
    	//$('#btnAdd').attr('disabled', true);
        var num     = $('.clonedInput').length, // Checks to see how many "duplicatable" input fields we currently have
            newNum  = new Number(num + 1),      // The numeric ID of the new input field being added, increasing by 1 each time
            newElem = $('#entry' + num).clone().attr('id', 'entry' + newNum).fadeIn('slow'); // create the new element via clone(), and manipulate it's ID using newNum value
    
    /*  This is where we manipulate the name/id values of the input inside the new, cloned element
        Below are examples of what forms elements you can clone, but not the only ones.
        There are 2 basic structures below: one for an H2, and one for form elements.
        To make more, you can copy the one for form elements and simply update the classes for its label and input.
        Keep in mind that the .val() method is what clears the element when it gets cloned. Radio and checkboxes need .val([]) instead of .val('').
    */
        // H2 - section
        newElem.find('.heading-reference').attr('id', 'ID' + newNum + '_reference').attr('name', 'ID' + newNum + '_reference').html('مدعي(' + newNum + ')');
		 newElem.find('.heading-reference2').attr('id', 'ID' + newNum + '_reference2').attr('name', 'ID' + newNum + '_reference2').html('مدعى عليه(' + newNum + ')');
		 
		  newElem.find('.normal').attr('id', 'normal' + newNum ).attr('name', 'normal' + newNum ).attr('style', 'display:none;');
		  newElem.find('.org').attr('id', 'org' + newNum ).attr('name', 'org' + newNum ).attr('style', 'display:none;');	
		  newElem.find('.address').attr('id', 'address' + newNum ).attr('name', 'address' + newNum ).attr('style', 'display:none;');
		  newElem.find('.WAKDATA').attr('id', 'WAKDATA' + newNum ).attr('name', 'WAKDATA' + newNum ).attr('style', 'display:none;');

		 
		  newElem.find('.select_ttl').attr('id', 'title' + newNum ).val('0');
		  
		  newElem.find('.select_nat').attr('id', 'natCode' + newNum ).val('');
		  
		  newElem.find('.select_nat').attr('id', 'natCode' + newNum ).val('');
		  
		  newElem.find('.input_ci').attr('id', 'civilID' + newNum ).val('');
		  
		  newElem.find('.input_fn').attr('id', 'firstName' + newNum ).val('');
		  
		  newElem.find('.input_sn').attr('id', 'secondName' + newNum ).val('');
		  
		  newElem.find('.input_thn').attr('id', 'thirdName' + newNum ).val('');
		  
		  newElem.find('.input_thn').attr('id', 'thirdName' + newNum ).val('');
		  
		  newElem.find('.input_forn').attr('id', 'forthName' + newNum ).val('');
		  
		  newElem.find('.input_fam').attr('id', 'familyName' + newNum ).val('');
		  
		  newElem.find('.input_aa').attr('id', 'addrNum' + newNum ).val('');
		  
		  newElem.find('.input_ad').attr('id', 'addrTxt' + newNum ).val('');
		  
		  newElem.find('.input_ciorg').attr('id', 'orgCivilID' + newNum ).val('');
		  
		  newElem.find('.input_fnorg').attr('id', 'orgName' + newNum ).val('');
		  
		  newElem.find('.input_adorg').attr('id', 'orgAddr' + newNum ).val('');
		  
		  newElem.find('.select_gov').attr('id', 'govCode' + newNum ).val('');
		  
		  newElem.find('.select_area').attr('id', 'area' + newNum ).val('0');
		  		  
		  newElem.find('.input_block').attr('id', 'block' + newNum ).val('');
		  
		  newElem.find('.input_street').attr('id', 'street' + newNum ).val('');
		  
		  newElem.find('.input_lane').attr('id', 'lane' + newNum ).val('');
		  
		  newElem.find('.input_building').attr('id', 'building' + newNum ).val('');
		  
		  newElem.find('.input_floor').attr('id', 'floor' + newNum ).val('');
		  
		  newElem.find('.input_flat').attr('id', 'flat' + newNum ).val('');
		  
		  newElem.find('.select_wakCCo').attr('id', 'wakCCo' + newNum ).val('');
		  
		  newElem.find('.input_wakProx').attr('id', 'wakProx' + newNum ).val('');
		  
		  newElem.find('.input_wakNum').attr('id', 'wakNum' + newNum ).val('');
		  
		  newElem.find('.select_wakYear').attr('id', 'wakYear' + newNum ).val('');
		  
		  newElem.find('.wakProxDiv').attr('id', 'wakProxDiv' + newNum ).val('');
		  
		  newElem.find('.wakCCoDiv').attr('id', 'wakCCoDiv' + newNum ).val('');
		  
		  
		  // Title - select
        newElem.find('.label_ttl').attr('for', 'ID' + newNum + '_title');
        

       
// First name - text
        
		
		// First name - text
       
        // Color - checkbox
        newElem.find('.label_checkboxitem').attr('for', 'ID' + newNum + '_checkboxitem');
        newElem.find('.input_checkboxitem').attr('id', 'ID' + newNum + '_checkboxitem').attr('name', 'ID' + newNum + '_checkboxitem').val([]);

        // Skate - radio
        newElem.find('.label_radio').attr('for', 'ID' + newNum + '_radioitem');
        newElem.find('.input_radio').attr('id', 'ID' + newNum + '_radioitem').attr('name', 'ID' + newNum + '_radioitem').val([]);

        // Email - text
        newElem.find('.label_email').attr('for', 'ID' + newNum + '_email_address');
        newElem.find('.input_email').attr('id', 'ID' + newNum + '_email_address').attr('name', 'ID' + newNum + '_email_address').val('');

        // Twitter handle (for Bootstrap demo) - append and text
        newElem.find('.label_twt').attr('for', 'ID' + newNum + '_twitter_handle');
        newElem.find('.input_twt').attr('id', 'ID' + newNum + '_twitter_handle').attr('name', 'ID' + newNum + '_twitter_handle').val('');

    // Insert the new element after the last "duplicatable" input field
        $('#entry' + num).after(newElem);
        $('#ID' + newNum + '_title').focus();

    // Enable the "remove" button. This only shows once you have a duplicated section.
        $('#btnDel').attr('disabled', false);
      //  $('#btnAdd').attr('disabled', true);

    // Right now you can only add 4 sections, for a total of 5. Change '5' below to the max number of sections you want to allow.
        //if (newNum == 5)
        //$('#btnAdd').attr('disabled', true).prop('value', "You've reached the limit"); // value here updates the text in the 'add' button when the limit is reached 
    });

    $('#btnDel').click(function () {
    // Confirmation dialog box. Works on all desktop browsers and iPhone.
        if (confirm("يرجى العلم بأنه لا يمكن التراجع عن الحذف. هل تود المتابعة"))
            {
                var num = $('.clonedInput').length;
                // how many "duplicatable" input fields we currently have
                $('#entry' + num).slideUp('slow', function () {$(this).remove();
                // if only one element remains, disable the "remove" button
                    if (num -1 === 1)
                $('#btnDel').attr('disabled', true);
                // enable the "add" button
                $('#btnAdd').attr('disabled', false).prop('value', "إضافة مدعي آخر");});
            }
        return false; // Removes the last section you added
    });
    // Enable the "add" button
    //$('#btnAdd').attr('disabled', false);
    // Disable the "remove" button
    $('#btnDel').attr('disabled', true);
});