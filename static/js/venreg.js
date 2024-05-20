function showAlert(message, field) {
    alert(message);
    // Focus on the specified field
    field.focus();
}

function checkRequiredFields() {
    var fields = document.querySelectorAll('#vendorregistrationForm input[required], #vendorregistrationForm select[required], #vendorregistrationForm textarea[required]');
    var firstUnfilledField = null;
    fields.forEach(function(field) {
        if (!field.value && !firstUnfilledField) {
            firstUnfilledField = field;
            showAlert("Please fill in the " + field.getAttribute("placeholder") + " field.", field);
        }
    });
    return !firstUnfilledField; // Return false if there's an unfilled field, true otherwise
}

function submitVendorRegForm(event, url) {
    event.preventDefault();

    var isValid = checkRequiredFields();
    if (isValid) {

        // Check if at least one checkbox is checked
        var checkboxes = document.querySelectorAll('input[name="terms"]:checked');
        if (checkboxes.length === 0) {
            showAlert("Please agree to the terms by checking at least one checkbox.");
            return;
        }

        // Check if at least one radio button is selected
        var radioButtons = document.querySelectorAll('input[name="declaration"]:checked');
        if (radioButtons.length === 0) {
            showAlert("Please select at least one declaration option.");
            return;
        }

        // Check if at least one checkbox is checked
        var checkboxes = document.querySelectorAll('input[name="declaration_1"]:checked');
        if (checkboxes.length === 0) {
            showAlert("Please agree to the Declaration by checking at least one checkbox.");
            return;
        }


        var contactField = document.querySelector('#vendorregistrationForm input[placeholder*="Contact"]');
        var aadharField = document.querySelector('#vendorregistrationForm input[placeholder*="Aadhar"]');
        
        if (contactField.value.length !== 10) {
            showAlert("Please ensure the contact number field contains exactly 10 digits.", contactField);
            return;
        }

        if (aadharField.value.length !== 12) {
            showAlert("Please ensure the Aadhar number field contains exactly 12 digits.", aadharField);
            return;
        }



        document.getElementById('submitBtn').style.display = 'none';
        var formData = new FormData(document.getElementById('vendorregistrationForm'));
        $.ajax({
            type: 'POST',
            url: url,  
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                console.log(response);
                alert('Form submitted successfully!');
                var fieldsets = document.querySelectorAll('fieldset');
                fieldsets.forEach(function(fieldset) {
                    if (fieldset.id !== 'submissionMessage') {
                        fieldset.style.display = 'none';
                    }
                });
                document.getElementById('submissionMessage').style.display = 'block';
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
                alert('An error occurred while submitting the form. Please try again later.');
            }
        });
    }
}

function returnToVenRegForm() {
    window.location.reload();
    var inputFields = document.querySelectorAll('#form input, #form select, #form textarea');
    inputFields.forEach(function(input) {
        if (input.type === 'radio') {
            input.checked = false; 
        } else {
            input.value = ''; 
        }
    });
    document.getElementById('gstInput').style.display = 'none';
    var form = document.querySelector('#form');
    form.style.display = 'block';
    document.getElementById('exesubmissionMessage').style.display = 'none';

}

function toggleNumberAndAddress() {
    var gstRadio = document.getElementById('gst');
    var numberAndAddressDiv = document.getElementById('numberandaddress');
    var gstInput = document.getElementById('gstInput');
    var addressTextarea = document.getElementById('address');

    if (gstRadio.checked) {
        numberAndAddressDiv.style.display = 'block';
    } else {
        numberAndAddressDiv.style.display = 'none';
        gstInput.value = '';
        addressTextarea.value = '';
    }
}


function formatMobileNo(event) {
    var input = event.target;
    var formatted = input.value.replace(/\D/g, '');
    formatted = formatted.substring(0, 10);
    input.value = formatted;
}

$(document).ready(function() {
    $('#vendorpanname').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
    });
});

$(document).ready(function() {
    $('#bankaccount').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
    });
});

$(document).ready(function() {
    $('#ifsccode').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
    });
});

$(document).ready(function() {
    $('#gstInput').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
    });
});


$(document).ready(function() {
    $('#pannumber').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
    });
});


function formatAadharNo(event) {
    var input = event.target;
    var formatted = input.value.replace(/\D/g, ''); 
    formatted = formatted.substring(0, 12); 
    input.value = formatted; 
}




    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', function() {
            if (this.id === 'option1') {
                console.log("Option 1 selected: I/We hereby declare that I/we am/are not a registered dealer under the Goods and Service Act.");
            }
            else if (this.id === 'option2') {
                console.log("Option 2 selected: I/We hereby undertake not to charge GST on any of the sales/services made by us to you with respect to GST requirements.");
            }
            else if (this.id === 'option3') {
                console.log("Option 3 selected: I/We agree to indemnify your company for any loss, damages, or costs incurred by your company to settle any prosecution or demand.");
            }
            else if (this.id === 'option4') {
                console.log("Option 4 selected: Not applicable.");
            }
        });
    });
