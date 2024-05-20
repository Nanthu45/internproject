function showAlert(message, field) {
    alert(message);
    // Focus on the specified field
    field.focus();
}

function checkRequiredFields() {
    var fields = document.querySelectorAll('#executiveregistrationForm input[required], #executiveregistrationForm select[required], #executiveregistrationForm textarea[required]');
    var firstUnfilledField = null;
    fields.forEach(function(field) {
        if (!field.value && !firstUnfilledField) {
            firstUnfilledField = field;
            showAlert("Please fill in the " + field.getAttribute("placeholder") + " field.", field);
        }
    });
    return !firstUnfilledField; // Return false if there's an unfilled field, true otherwise
}

function submitExecutiveRegForm(event, url) {
    event.preventDefault();

    var isValid = checkRequiredFields();
    if (isValid) {
        var contactField = document.querySelector('#executiveregistrationForm input[placeholder*="Contact"]');
        var aadharField = document.querySelector('#executiveregistrationForm input[placeholder*="Aadhar"]');
        
        if (contactField.value.length !== 10) {
            showAlert("Please ensure the contact number field contains exactly 10 digits.", contactField);
            return;
        }

        if (aadharField.value.length !== 12) {
            showAlert("Please ensure the Aadhar number field contains exactly 12 digits.", aadharField);
            return;
        }

        document.getElementById('submitBtn').style.display = 'none';
        var formData = new FormData(document.getElementById('executiveregistrationForm'));
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
                    if (fieldset.id !== 'exesubmissionMessage') {
                        fieldset.style.display = 'none';
                    }
                });
                document.getElementById('exesubmissionMessage').style.display = 'block';
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
                alert('An error occurred while submitting the form. Please try again later.');
            }
        });
    }
}


function returnToExeRegForm() {
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


function formatMobileNo(event) {
    var input = event.target;
    var formatted = input.value.replace(/\D/g, '');
    formatted = formatted.substring(0, 10);
    input.value = formatted;
}

$(document).ready(function() {
    $('#exepanname').on('input', function() {
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