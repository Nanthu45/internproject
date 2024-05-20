
function FieldExecutiveEmailInfo(url) {
    var execEmail = $('#emailfieldexecutive').val();

    if (!execEmail) {
        $('#fieldexecutivename').text('Please enter an email to validate.').css('color', 'red');
        return;
    }
    $('#fieldexecutivename').html('<div class="animate__animated animate__flash">Searching...</div>'); 

    $.ajax({
        type: 'POST',
        url: url,
        data: {'email': execEmail}, 
        success: function(response) {
            var fieldExecutiveNameElement = $('#fieldexecutivename');
            if (response.found) {
                fieldExecutiveNameElement.text(response.name).css('color', 'green'); 
                $('#contact').css('display', 'block');
                $('#contactnumber').focus();
                $('#contactstatus').text('Please Enter Mobile Number of User').css('color', 'red');
                
                
            } else {
                fieldExecutiveNameElement.text('Field Executive not found').css('color', 'red'); 
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}
function editEmailFieldExecutive() {
    console.log('editEmailFieldExecutive function called');

    document.getElementById('emailfieldexecutive').value = '';
    document.getElementById('contactnumber').value = '';
    document.getElementById('customername').value = '';

    document.getElementById('contact').style.display = 'none';
    document.getElementById('customername').style.display = 'none';

    $('#fieldexecutivename').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
}
function EmailvenVehKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
        event.target.blur();
    }
}


function validateContact(url) {
    var contactNumber = $('#contactnumber').val();
    if (!contactNumber) {
        $('#contactstatus').text('Please enter a contact number to validate.').css('color', 'red');
        return;
    }

    if (contactNumber.length !== 10 || isNaN(contactNumber)) {
        $('#contactstatus').text('Contact number should be 10 digits.').css('color', 'red');
        return;
    }
    $('#contactstatus').html('<div class="animate__animated animate__flash">Searching...</div>');
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            'contact_number': contactNumber
        },
        success: function(response) {
            var contactStatusElement = $('#contactstatus');
            if (response.found) {
                if (response.status === "Registered") {
                    contactStatusElement.text(response.status).css('color', 'green'); 
                } else {
                    contactStatusElement.text(response.status).css('color', 'red'); 
                }
            } else {
                contactStatusElement.text('New').css('color', 'green');
                $('#customername').css('display', 'block');
                $('#username').focus();
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}

function formatMobileNo(event) {
    var input = event.target;
    var formatted = input.value.replace(/\D/g, '');
    formatted = formatted.substring(0, 10);
    input.value = formatted;
}

function editContact() {
    console.log('editContact function called');

    document.getElementById('customername').style.display = 'none';
    
    document.getElementById('contactnumber').value = '';
    document.getElementById('customername').value = '';
    $('#contactstatus').text('Please Enter Mobile Number of User').css('color', 'red'); 

    console.log('Input fields cleared');
}



function ContactvenVehKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
        event.target.blur();
    }
}



function submituserForm(event, url) {
    event.preventDefault();
    var email = document.getElementById('emailfieldexecutive').value;
    var userContact = document.getElementById('contactnumber').value;
    var userName = document.getElementById('username').value;
    if (!userName) {
        alert('Please enter User Name.');
        return;
    }
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            'email': email,
            'fieldexecutivename': '', 
            'contactnumber': userContact,
            'username': userName,
        },
        success: function(response) {
            console.log(response);
            alert('Form submitted successfully!');
            var fieldsets = document.querySelectorAll('fieldset');
            fieldsets.forEach(function(fieldset) {
                if (fieldset.id !== 'usersubmission') {
                    fieldset.style.display = 'none';
                }
            });
            document.getElementById('usersubmission').style.display = 'block';
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    });
    document.getElementById('submitBtn').style.display = 'none';
}
function returnToUserForm() {
    window.location.reload(false);
    var fieldsets = document.querySelectorAll('fieldset');
    fieldsets.forEach(function(fieldset) {
        if (fieldset.id !== 'fieldexecutive') {
            fieldset.style.display = 'none';
        }
    });
    document.getElementById('usersubmission').style.display = 'none';
    document.getElementById('fieldexecutive').style.display = 'block';
}


function userSubmitKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
        event.target.blur();
    }
}
