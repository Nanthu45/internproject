function ValidateEmailInfo(url) {
    var vendorEmail = $('#vendoremail').val();
    if (!vendorEmail) {
        $('#vendorname').text('Please enter an email to validate.').css('color', 'red');
        return;
    }

    $('#vendorname').html('<div class="animate__animated animate__flash">Searching...</div>'); 
    $.ajax({
        type: 'POST',
        url: url,
        data: {'email': vendorEmail},  
        success: function(response) {
            var vendorNameElement = $('#vendorname');
            if (response.found) {
                vendorNameElement.text(response.name);
                vendorNameElement.css('color', 'green'); 
                $('#license').css('display', 'block');
                $('#license1').css('display', 'block');
                $('#vehicleno1').css('display', 'block');
                $('#partnerid').css('display', 'block');
                $('#licensestatus').text('Please Enter your Driving License').css('color', 'red');
                $('#drivinglicense').focus();
            } else {
                vendorNameElement.text('Vendor not found');
                vendorNameElement.css('color', 'red');
                $('#license').css('display', 'none');
            }  
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}



function editEmail() {
    console.log('editEmail function called');

    document.getElementById('license').style.display = 'none';
    document.getElementById('vehicleno').style.display = 'none';
    document.getElementById('selecttype').style.display = 'none';
    document.getElementById('partnerreg').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';

    document.getElementById('vendoremail').value = '';
    document.getElementById('drivinglicense').value = '';
    document.getElementById('vehiclenumber').value = '';
    document.getElementById('job').selectedIndex = 0;
    document.getElementById('partnername').value = '';
    document.getElementById('comment').value = '';

    $('#vendorname').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
}


function editEmail1() {
    console.log('editEmail function called');
    document.getElementById('field').style.display = 'none';

    document.getElementById('license1').style.display = 'none';
    document.getElementById('vehicleno1').style.display = 'none';

    document.getElementById('vendoremail').value = '';
    document.getElementById('drivinglicense').value = '';
    document.getElementById('vehiclenumber').value = '';

    $('#vendorname').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
}
function editEmail2() {
    console.log('editEmail2 function called');

    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'none';
    document.getElementById('4').style.display = 'none';
    document.getElementById('5').style.display = 'none';
    document.getElementById('6').style.display = 'none';
    document.getElementById('7').style.display = 'none';
    document.getElementById('8').style.display = 'none';
    document.getElementById('9').style.display = 'none';
    document.getElementById('10').style.display = 'none';
    document.getElementById('11').style.display = 'none';
    document.getElementById('12').style.display = 'none';


    document.getElementById('vendoremail').value = '';
    document.getElementById('2').value = '';
    document.getElementById('3').value = '';
    document.getElementById('4').value = '';
    document.getElementById('5').value = '';
    document.getElementById('6').value = '';
    document.getElementById('7').value = '';
    document.getElementById('8').value = '';
    document.getElementById('9').value = '';
    document.getElementById('10').value = '';
    document.getElementById('11').value = '';
    document.getElementById('12').value = '';

    $('#vendorname').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
}
function editEmail3() {
    console.log('editEmail3 function called');
    document.getElementById('field').style.display = 'none';

    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'none';
    document.getElementById('4').style.display = 'none';
    document.getElementById('5').style.display = 'none';
    document.getElementById('6').style.display = 'none';
    document.getElementById('7').style.display = 'none';
    document.getElementById('8').style.display = 'none';
    document.getElementById('9').style.display = 'none';
    document.getElementById('10').style.display = 'none';
    document.getElementById('11').style.display = 'none';
    document.getElementById('12').style.display = 'none';


    document.getElementById('vendoremail').value = '';
    document.getElementById('2').value = '';
    document.getElementById('3').value = '';
    document.getElementById('4').value = '';
    document.getElementById('5').value = '';
    document.getElementById('6').value = '';
    document.getElementById('7').value = '';
    document.getElementById('8').value = '';
    document.getElementById('9').value = '';
    document.getElementById('10').value = '';
    document.getElementById('11').value = '';
    document.getElementById('12').value = '';

    $('#vendorname').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
}


















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
                $('#license').css('display', 'block');
                $('#contact').css('display', 'block');
                $('#vehicleno1').css('display', 'block');
                $('#license1').css('display', 'block');
                // $('#vendor').css('display', 'none');
                $('#partnerid').css('display', 'block');
                
            } else {
                fieldExecutiveNameElement.text('Field Executive not found').css('color', 'red'); 
                $('#license').css('display', 'none');
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

    // Hide the next fieldset
    document.getElementById('license').style.display = 'none';
    document.getElementById('vehicleno').style.display = 'none';
    document.getElementById('selecttype').style.display = 'none';
    document.getElementById('partnerreg').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';

    // Clear input fields
    document.getElementById('emailfieldexecutive').value = '';
    document.getElementById('drivinglicense').value = '';
    document.getElementById('vehiclenumber').value = '';
    document.getElementById('job').selectedIndex = 0;
    document.getElementById('partnername').value = '';
    document.getElementById('comment').value = '';

    // Call ValidateDrivingLicense function to reset the onboard status
    $('#fieldexecutivename').text('Please Enter your Email').css('color', 'red');

    console.log('Input fields cleared');
}


function editEmailFieldExecutive1() {
    console.log('editEmailFieldExecutive1 function called');
    

    // Clear input fields
    document.getElementById('vendor').style.display = 'none';

    document.getElementById('license1').style.display = 'none';
    document.getElementById('vehicleno1').style.display = 'none';

    document.getElementById('vendoremail').value = '';
    document.getElementById('drivinglicense').value = '';
    document.getElementById('vehiclenumber').value = '';

    // Call ValidateDrivingLicense function to reset the onboard status
    $('#fieldexecutivename').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
}


function editEmailFieldExecutive2() {
    console.log('editEmailFieldExecutive2 function called');


    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'none';
    document.getElementById('4').style.display = 'none';
    document.getElementById('5').style.display = 'none';
    document.getElementById('6').style.display = 'none';
    document.getElementById('7').style.display = 'none';
    document.getElementById('8').style.display = 'none';
    document.getElementById('9').style.display = 'none';
    document.getElementById('10').style.display = 'none';
    document.getElementById('11').style.display = 'none';
    


    document.getElementById('emailfieldexecutive').value = '';
    document.getElementById('2').value = '';
    document.getElementById('3').value = '';
    document.getElementById('4').value = '';
    document.getElementById('5').value = '';
    document.getElementById('6').value = '';
    document.getElementById('7').value = '';
    document.getElementById('8').value = '';
    document.getElementById('9').value = '';
    document.getElementById('10').value = '';
    document.getElementById('11').value = '';
    
    

    // Call ValidateDrivingLicense function to reset the onboard status
    $('#fieldexecutivename').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
}
// function editEmailFieldExecutive3() {
//     console.log('editEmailFieldExecutive3 function called');

//     // Clear input fields
//     document.getElementById('emailfieldexecutive').value = '';
//     document.getElementById('contactnumber').value = '';
//     document.getElementById('customername').value = '';

//     // Hide the next fieldset
//     document.getElementById('contact').style.display = 'none';
//     document.getElementById('customername').style.display = 'none';
    

//     // Call ValidateDrivingLicense function to reset the onboard status
//     $('#fieldexecutivename').text('Please Enter your Email').css('color', 'red'); 

//     console.log('Input fields cleared');
// }








function validatePartner(url) {
    var partnerInfo = $('#partner_id').val();
    if (!partnerInfo) {
        $('#partner_id').next('.error').text('Please enter a partner ID to validate.').css('color', 'red');
        return;
    }
    $('#partner_id').html('<div class="animate__animated animate__flash">Searching...</div>'); 
    $.ajax({
        type: 'POST',
        url: url,
        data: {'partner_id': partnerInfo},  
        success: function(response) {
            var partnerNameElement = $('#partnername');
            if (response.found) {
                partnerNameElement.text(response.name);
                partnerNameElement.css('color', 'green');
                $('#2').css('display', 'block');
                $('#3').css('display', 'block');
                $('#4').css('display', 'block');
                $('#5').css('display', 'block');
                $('#6').css('display', 'block');
                $('#7').css('display', 'block');
                $('#8').css('display', 'block');
                $('#9').css('display', 'block');
                $('#10').css('display', 'block');
                $('#11').css('display', 'block');
                $('#12').css('display', 'block'); 
                 
            } else {
                partnerNameElement.text('Partner not found');
                partnerNameElement.css('color', 'red');
            }  
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}





function editContact() {
    console.log('editContact function called');

    // Hide the next fieldset
    document.getElementById('customername').style.display = 'none';
    

    // Clear input fields
    document.getElementById('contactnumber').value = '';
    document.getElementById('customername').value = '';
    $('#contactstatus').text('Please Enter your Mobile Number').css('color', 'red'); 

    console.log('Input fields cleared');
}
function validateContact(url) {
    var contactNumber = $('#contactnumber').val();
    if (!contactNumber) {
        $('#contactstatus').text('Please enter a contact number to validate.').css('color', 'red');
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
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}















$(document).ready(function() {
    // Function to automatically capitalize input and switch keyboard to uppercase
    $('#drivinglicense').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); // Convert input to uppercase
    });
});



function ValidateDrivingLicense() {
    var drivingLicense = $('#drivinglicense').val(); 
    
    if (!drivingLicense) {
        
        $('#licensestatus').text('Please enter a driving license to validate.').css('color', 'red');
        return; 
    }
    
    $('#licensestatus').html('<div class="animate__animated animate__flash">Searching...</div>');

    $.ajax({
        type: 'POST',
        url: '/check_driving_license/', 
        data: {
            'driving_license': drivingLicense
        },
        success: function (response) {
            var licenseStatusElement = $('#licensestatus');
            if (response.found) {

                if (response.onboard_status === "Registered") {
                    licenseStatusElement.text(response.onboard_status).css('color', 'green'); 
                } else {
                    licenseStatusElement.text(response.onboard_status).css('color', 'red'); 
                }
            } else {
                licenseStatusElement.text('New').css('color', 'green');
                document.getElementById('vehicleno').style.display = 'block';
                $('#vehiclestatus').text('Please Enter your Driving License').css('color', 'red');
                $('#vehiclenumber').focus();
                
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}


function editDrivingLicense() {
    console.log('editDrivingLicense function called'); 
    

    document.getElementById('vehicleno').style.display = 'none';
    document.getElementById('selecttype').style.display = 'none';
    document.getElementById('partnerreg').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';


    document.getElementById('drivinglicense').value = ''; 
    document.getElementById('vehiclenumber').value = '';
    document.getElementById('job').selectedIndex = 0; 
    document.getElementById('partnername').value = '';
    document.getElementById('comment').value = ''; 


    $('#licensestatus').text('Please Enter your Driving License').css('color', 'red'); 
    
    console.log('Driving license field cleared'); 
}



function editDrivingLicense1() {
    console.log('editDrivingLicense function called'); 

    document.getElementById('drivinglicense').value = '';

    $('#licensestatus').text('Please Enter your Driving License').css('color', 'red');   
    console.log('Driving license field cleared'); 
}







$(document).ready(function() {
    // Function to automatically capitalize input and switch keyboard to uppercase
    $('#vehiclenumber').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); // Convert input to uppercase
    });
});




function formatMobileNo(event) {
    var input = event.target;
    var formatted = input.value.replace(/\D/g, '');
    formatted = formatted.substring(0, 10);
    input.value = formatted;
}

$('#mobileno').on('focus', function() {
    $(this).attr('type', 'tel'); 
});

$('#mobileno').on('blur', function() {
    $(this).attr('type', 'text'); 
});


function ValidateVehicle() {
    var vehicleNumber = $('#vehiclenumber').val(); 

    if (!vehicleNumber) {

        $('#vehiclestatus').text('Please enter a vehicle number to validate.').css('color', 'red');
        return; 
    }
    $('#vehiclestatus').html('<div class="animate__animated animate__flash">Searching...</div>');
    // var spinner = new Spinner().spin();
    // $('#vehiclestatus').html(spinner.el);
    $.ajax({
        type: 'POST',
        url: '/check_vehicle_number/', 
        data: {
            'vehicle_number': vehicleNumber
        },
        success: function (response) {
            var vehicleStatusElement = $('#vehiclestatus');
            if (response.found) {

                if (response.current_status === "Active") {
                    vehicleStatusElement.text(response.current_status).css('color', 'green'); 
                } else if (response.current_status === "Inactive") {
                    vehicleStatusElement.text(response.current_status).css('color', 'red');
                } else if (response.current_status === "Onhold") {
                    vehicleStatusElement.text(response.current_status).css('color', 'blue'); 
                } else if (response.current_status === "Waiting for Approval") {
                    vehicleStatusElement.text(response.current_status).css('color', 'darkorange'); 
                }
            } else {
                vehicleStatusElement.text('New-Waiting for Approval').css('color', 'green');
                document.getElementById('selecttype').style.display = 'block';
                $('#job').focus();
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}


function editVehicle() {
    console.log('editDrivingLicense function called'); 
    
    // Hide the next fieldset
    document.getElementById('selecttype').style.display = 'none';
    document.getElementById('partnerreg').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';

    // Clear input fields
    document.getElementById('vehiclenumber').value = '';
    document.getElementById('job').selectedIndex = 0; 
    document.getElementById('partnername').value = ''; 
    document.getElementById('comment').value = ''; 

    // Call ValidateDrivingLicense function to reset the onboard status
    $('#vehiclestatus').text('Please enter Vehicle no').css('color', 'red'); 
    
    console.log('Vehicle Number  field cleared'); 
}


function editVehicle1() {
    console.log('editDrivingLicense function called'); // Debugging statement to check if the function is called
    
    // Clear input fields
    document.getElementById('vehiclenumber').value = ''; // Clear vehicle number input field

    // Call ValidateDrivingLicense function to reset the onboard status
    $('#vehiclestatus').text('Please enter Vehicle no').css('color', 'red'); // Clear the onboard status message
    
    console.log('Vehicle Number  field cleared'); // Debugging statement to check if input field is cleared
}


function submitvendorvehicleForm(event, url) {
    // Prevent default form submission behavior
    event.preventDefault();

    var email = document.getElementById('vendoremail').value;
    var drivingLicense = document.getElementById('drivinglicense').value;
    var vehicleNumber = document.getElementById('vehiclenumber').value;
    var vehicleType = document.getElementById('job').value;
    var partnerName = document.getElementById('partnername').value;
    var partnerNumber = document.getElementById('mobileno').value;
    var comments = document.getElementById('comment').value;


    // Check if partner name is filled
    if (!email) {
        alert('Please enter Your Email.');
        return;
    }

    // Check if partner name is filled
    if (!drivingLicense) {
        alert('Please enter Driving License.');
        return;
    }

    // Check if partner name is filled
    if (!vehicleNumber) {
        alert('Please enter Vehicle Number.');
        return;
    }

    // Check if partner name is filled
    if (!vehicleType) {
        alert('Please Choose vehicle Type.');
        return;
    }

    // Check if partner name is filled
    if (!partnerName) {
        alert('Please enter Partner Name.');
        return;
    }

    // Check if partner number is exactly 10 digits
    if (partnerNumber.length !== 10) {
        alert('Please enter contact correctly. It should be exactly 10 digits.');
        return;
    }

    // Make AJAX request to update spreadsheet
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            'email': email,
            'vendorname': '', // Modify this based on your form data
            'drivinglicense': drivingLicense,
            'vehiclenumber': vehicleNumber,
            'userjob': vehicleType,
            'partnername': partnerName,
            'mobileno': partnerNumber,
            'comment': comments
        },
        success: function(response) {
            // Add a short delay before hiding the button and clearing the form fields
            setTimeout(function() {
                alert('Data updated successfully!');
                // Hide all fieldsets except vendorvehiclesubmission
                var fieldsets = document.querySelectorAll('fieldset');
                fieldsets.forEach(function(fieldset) {
                    if (fieldset.id !== 'vendorvehiclesubmission') {
                        fieldset.style.display = 'none';
                    }
                });
                // Show the success message fieldset
                document.getElementById('vendorvehiclesubmission').style.display = 'block';
            }, 500); // Adjust the delay time as needed (in milliseconds)
        },
        error: function(xhr, status, error) {
            alert('An error occurred while updating the data: ' + error);
        }
    });

    // Hide the submit button immediately after submission
    document.getElementById('submitBtn').style.display = 'none';
}

function returnToVenForm() {
    document.getElementById('vendorvehiclesubmission').style.display = 'none';
    window.location.reload(false);
}










function submitfieldexecutiveForm(event, url) {
    // Prevent default form submission behavior
    event.preventDefault();

    var email = document.getElementById('emailfieldexecutive').value;
    var drivingLicense = document.getElementById('drivinglicense').value;
    var vehicleNumber = document.getElementById('vehiclenumber').value;
    var vehicleType = document.getElementById('job').value;
    var partnerName = document.getElementById('partnername').value;
    var partnerNumber = document.getElementById('mobileno').value;
    var comments = document.getElementById('comment').value;

    // Make sure all required fields are filled
    if (!email || !drivingLicense || !vehicleNumber || !vehicleType || !partnerName) {
        alert('Please fill all required fields.');
        return;
    }

    // Make AJAX request to update spreadsheet
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            'email': email,
            'vendorname': '', // Modify this based on your form data
            'drivinglicense': drivingLicense,
            'vehiclenumber': vehicleNumber,
            'userjob': vehicleType,
            'partnername': partnerName,
            'mobileno': partnerNumber,
            'comment': comments
        },
        success: function(response) {
            // Add a short delay before hiding the button and clearing the form fields
            setTimeout(function() {
                alert('Data updated successfully!');
                // Hide all fieldsets except fieldexevehiclesubmission
                var fieldsets = document.querySelectorAll('fieldset');
                fieldsets.forEach(function(fieldset) {
                    if (fieldset.id !== 'fieldexevehiclesubmission') {
                        fieldset.style.display = 'none';
                    }
                });
                // Show the success message fieldset
                document.getElementById('fieldexevehiclesubmission').style.display = 'block';
            }, 500); // Adjust the delay time as needed (in milliseconds)
        },
        error: function(xhr, status, error) {
            alert('An error occurred while updating the data: ' + error);
        }
    });

    // Hide the submit button immediately after submission
    document.getElementById('submitBtn').style.display = 'none';
}

function returnToExeForm() {

    document.getElementById('fieldexevehiclesubmission').style.display = 'none';
    window.location.reload(false);
}





function venVehNextInput(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    }
}

function venVehsubmit(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('submitBtn').click();
        event.target.blur();
    }
}
function EmailvenVehKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
        event.target.blur();
    }
}



function DLvenVehKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
        event.target.blur();
    }
}

function VNvenVehKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
        event.target.blur();
    }
}




function showPartnerRegistration() {
    var selectedVehicle = document.getElementById('job').value;
    var partnerFieldset = document.getElementById('partnerreg');
    var submitButton = document.getElementById('submitBtn');

    if (selectedVehicle !== '') {
        partnerFieldset.style.display = 'block';
        submitButton.style.display = 'block';
        document.getElementById('partnername').focus(); 
    } else {
        partnerFieldset.style.display = 'none';
        submitButton.style.display = 'none';
        document.getElementById('partnername').value = ''; 
        document.getElementById('mobileno').value = ''; 
        document.getElementById('comment').value = ''; 
    }
}





function togglePanNumberAndCopy() {
    var pan = document.getElementById('pan');
    var panNumberAndCopy = document.getElementById('panNumberAndCopy');

    if (pan.checked) {
        panNumberAndCopy.style.display = 'block';
    } else {
        panNumberAndCopy.style.display = 'none';
        // Clear input box and file input when "None" is selected
        document.getElementById('pannumber').value = '';
        document.getElementById('pancardcopy1').value = '';
    }
}

function toggleAadharNumberAndCopy() {
    var Adhar = document.getElementById('aadhar');
    var aadharNumberAndCopy = document.getElementById('aadharNumberAndCopy');

    if (Adhar.checked) {
        aadharNumberAndCopy.style.display = 'block';
    } else {
        aadharNumberAndCopy.style.display = 'none';
        // Clear input box and file input when "None" is selected
        document.getElementById('adharnumber').value = '';
        document.getElementById('aadharcopy1').value = '';
    }
}

function toggleDlNumberAndCopy() {
    var Dl = document.getElementById('dl');
    var dlNumberAndCopy = document.getElementById('dlNumberAndCopy');

    if (Dl.checked) {
        dlNumberAndCopy.style.display = 'block';
    } else {
        dlNumberAndCopy.style.display = 'none';
        // Clear input box and file input when "None" is selected
        document.getElementById('dlnumber').value = '';
        document.getElementById('dlcopy1').value = '';
    }
}

function togglevehicleNumberAndCopy() {
    var Vehicle = document.getElementById('vehicle');
    var vehicleNumberAndCopy = document.getElementById('vehicleNumberAndCopy');

    if (Vehicle.checked) {
        vehicleNumberAndCopy.style.display = 'block';
    } else {
        vehicleNumberAndCopy.style.display = 'none';
        // Clear input box and file input when "None" is selected
        document.getElementById('vehiclenumber').value = '';
        document.getElementById('vehiclecopy1').value = '';
    }
}

function toggleAccountNumberAndCopy() {
    var accountCheckbox = document.getElementById('accountCheckbox');
    var accountNumberAndCopy = document.getElementById('accountNumberAndCopy');

    if (accountCheckbox.checked) {
        accountNumberAndCopy.style.display = 'block';
    } else {
        accountNumberAndCopy.style.display = 'none';
        // Clear input box and file input when checkbox is unchecked
        document.getElementById('account').value = '';
        document.getElementById('accountcopy1').value = '';
    }
}

function toggleRCNumber() {
    var rcCheckbox = document.getElementById('rcCheckbox');
    var rcNumber = document.getElementById('rcNumber');

    if (rcCheckbox.checked) {
        rcNumber.style.display = 'block';
    } else {
        rcNumber.style.display = 'none';
        // Clear input box when checkbox is unchecked
        document.getElementById('rc').value = '';
    }
}

function togglePartnerContact() {
    var partnerCheckbox = document.getElementById('partnerCheckbox');
    var partnerContact = document.getElementById('partnerContact');

    if (partnerCheckbox.checked) {
        partnerContact.style.display = 'block';
    } else {
        partnerContact.style.display = 'none';
        // Clear input box when checkbox is unchecked
        document.getElementById('partnerMobilenumber').value = '';
    }
}

function toggleInsuranceUpload() {
    var insuranceCheckbox = document.getElementById('insuranceCheckbox');
    var insuranceUpload = document.getElementById('insuranceUpload');

    if (insuranceCheckbox.checked) {
        insuranceUpload.style.display = 'block';
    } else {
        insuranceUpload.style.display = 'none';
        // Clear file input when checkbox is unchecked
        document.getElementById('insurcopy1').value = '';
    }
}

function toggleProfilePhotoUpload() {
    var photoCheckbox = document.getElementById('photoCheckbox');
    var photoUpload = document.getElementById('photoUpload');

    if (photoCheckbox.checked) {
        photoUpload.style.display = 'block';
    } else {
        photoUpload.style.display = 'none';
        // Clear file input when checkbox is unchecked
        document.getElementById('profilePhoto').value = '';
    }
}






// function showAlert(message, field) {
//     alert(message);
//     // Focus on the specified field
//     field.focus();
// }

// function checkRequiredFields() {
//     var fields = document.querySelectorAll('#vendorregistrationForm input[required], #vendorregistrationForm select[required], #vendorregistrationForm textarea[required]');
//     var firstUnfilledField = null;
//     fields.forEach(function(field) {
//         if (!field.value && !firstUnfilledField) {
//             firstUnfilledField = field;
//             showAlert("Please fill in the " + field.getAttribute("placeholder") + " field.", field);
//         }
//     });
//     return !firstUnfilledField; // Return false if there's an unfilled field, true otherwise
// }

// function submitVendorRegForm(event, url) {
//     // Prevent default form submission behavior
//     event.preventDefault();

//     // Check if all required fields are filled out
//     var isValid = checkRequiredFields();

//     // If all required fields are filled, proceed with form submission
//     if (isValid) {
//         // Hide the submit button only after validation
//         document.getElementById('submitBtn').style.display = 'none';

//         // Fetch form data
//         var formData = new FormData(document.getElementById('vendorregistrationForm'));

//         // Make AJAX POST request to Django view
//         $.ajax({
//             type: 'POST',
//             url: url,   // Update URL with your Django view endpoint
//             data: formData,
//             processData: false,
//             contentType: false,
//             success: function(response) {
//                 // Handle success response
//                 console.log(response);
//                 alert('Form submitted successfully!');
//                 // Hide all fieldsets except vendorvehiclesubmission
//                 var fieldsets = document.querySelectorAll('fieldset');
//                 fieldsets.forEach(function(fieldset) {
//                     if (fieldset.id !== 'submissionMessage') {
//                         fieldset.style.display = 'none';
//                     }
//                 });
//                 // Show the success message fieldset
//                 document.getElementById('submissionMessage').style.display = 'block';
//             },
//             error: function(xhr, status, error) {
//                 // Handle error response
//                 console.error(xhr.responseText);
//                 alert('An error occurred while submitting the form. Please try again later.');
//             }
//         });
//     }
// }

// function returnToVenRegForm() {
//     // Reload the HTML page
//     window.location.reload(); 

//     // Clear all input fields
//     var inputFields = document.querySelectorAll('#form input, #form select, #form textarea');
//     inputFields.forEach(function(input) {
//         if (input.type === 'radio') {
//             input.checked = false; // Uncheck radio buttons
//         } else {
//             input.value = ''; // Clear other input fields
//         }
//     });

//     // Hide the GST Number input box
//     document.getElementById('gstInput').style.display = 'none';

//     // Show the form
//     var form = document.querySelector('#form');
//     form.style.display = 'block';

//     // Hide the submission message
//     document.getElementById('exesubmissionMessage').style.display = 'none';

    
// }

// function toggleNumberAndAddress() {
//     var gstRadio = document.getElementById('gst');
//     var numberAndAddressDiv = document.getElementById('numberandaddress');
//     var gstInput = document.getElementById('gstInput');
//     var addressTextarea = document.getElementById('address');

//     if (gstRadio.checked) {
//         numberAndAddressDiv.style.display = 'block';
//     } else {
//         numberAndAddressDiv.style.display = 'none';
//         gstInput.value = '';
//         addressTextarea.value = '';
//     }
// }









function hideFieldsetsExceptSubmissionMessage() {
    var fieldsets = document.querySelectorAll('fieldset');
    fieldsets.forEach(function(fieldset) {
        if (fieldset.id !== 'exesubmissionMessage') {
            fieldset.style.display = 'none';
        } else {
            fieldset.style.display = 'block'; // Show the submission message fieldset
        }
    });
}

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
    // Prevent default form submission behavior
    event.preventDefault();

    // Check if all required fields are filled out
    var isValid = checkRequiredFields();

    // If all required fields are filled, proceed with form submission
    if (isValid) {
        // Hide the submit button only after validation
        document.getElementById('submitBtn').style.display = 'none';

        // Fetch form data
        var formData = new FormData(document.getElementById('executiveregistrationForm'));

        // Make AJAX POST request to Django view
        $.ajax({
            type: 'POST',
            url: url,   // Update URL with your Django view endpoint
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                // Handle success response
                console.log(response);
                alert('Form submitted successfully!');
                hideFieldsetsExceptSubmissionMessage(); // Call the function to hide all fieldsets except submission message
            },
            error: function(xhr, status, error) {
                // Handle error response
                console.error(xhr.responseText);
                alert('An error occurred while submitting the form. Please try again later.');
            }
        });
    }
}

function returnToExeRegForm() {
    // Reload the HTML page
    window.location.reload(); 

    // Clear all input fields
    var inputFields = document.querySelectorAll('form input, form select, form textarea');
    inputFields.forEach(function(input) {
        if (input.type === 'radio') {
            input.checked = false; // Uncheck radio buttons
        } else {
            input.value = ''; // Clear other input fields
        }
    });

    // Show the form
    var form = document.querySelector('form');
    form.style.display = 'block';
    
    // Hide the submission message
    document.getElementById('exesubmissionMessage').style.display = 'none';
}








function submituserForm(event, url) {
    // Prevent default form submission behavior
    event.preventDefault();

    var email = document.getElementById('emailfieldexecutive').value;
    var userContact = document.getElementById('contactnumber').value;
    var userName = document.getElementById('username').value;

    // Make sure all required fields are filled
    if (!email || !userContact || !userName) {
        alert('Please fill all required fields.');
        return;
    }

    // Make AJAX request to update spreadsheet
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            'email': email,
            'fieldexecutivename': '', // Modify this based on your form data
            'contactnumber': userContact,
            'username': userName,
        },
        success: function(response) {
            // Add a short delay before hiding the button and clearing the form fields
            setTimeout(function() {
                alert('Data updated successfully!');

                // Hide all fieldsets except vendorvehiclesubmission
                var fieldsets = document.querySelectorAll('fieldset');
                fieldsets.forEach(function(fieldset) {
                    if (fieldset.id !== 'usersubmission') {
                        fieldset.style.display = 'none';
                    }
                });
                // Show the success message fieldset
                document.getElementById('usersubmission').style.display = 'block';
            }, 500); // Adjust the delay time as needed (in milliseconds)
        },
        error: function(xhr, status, error) {
            alert('An error occurred while updating the data: ' + error);
        }
    });
    // Hide the submit button immediately after submission
    document.getElementById('submitBtn').style.display = 'none';
}
function returnToUserForm() {
    // Reload the form
    document.getElementById("userregistrationForm").reset();

    // Hide all fieldsets except the first one
    var fieldsets = document.querySelectorAll('fieldset');
    fieldsets.forEach(function(fieldset) {
        if (fieldset.id !== 'fieldexecutive') {
            fieldset.style.display = 'none';
        }
    });

    // Hide the success message fieldset
    document.getElementById('usersubmission').style.display = 'none';

    // Show the first fieldset
    document.getElementById('fieldexecutive').style.display = 'block';
}































function submitVenReSubmissionForm(event, url) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Gather form data manually
    var formData = new FormData();
    formData.append('vendoremail', document.getElementById('vendoremail').value);
    formData.append('vendorname', document.getElementById('vendorname').value);
    formData.append('partner_id', document.getElementById('partner_id').value);
    formData.append('partnername', document.getElementById('partnername').value);
    formData.append('pannumber', document.getElementById('pannumber').value);
    formData.append('adharnumber', document.getElementById('adharnumber').value);
    formData.append('dlnumber', document.getElementById('dlnumber').value);
    formData.append('vehiclenumber', document.getElementById('vehiclenumber').value);
    formData.append('account', document.getElementById('account').value);
    formData.append('rc', document.getElementById('rc').value);
    formData.append('partnerMobilenumber', document.getElementById('partnerMobilenumber').value);

    // Append file inputs
    var pancardcopy1 = document.getElementById('pancardcopy1').files[0];
    if (pancardcopy1) {
        formData.append('pancardcopy1', pancardcopy1);
    }
    var aadharcopy1 = document.getElementById('aadharcopy1').files[0];
    if (aadharcopy1) {
        formData.append('aadharcopy1', aadharcopy1);
    }
    var dlcopy1 = document.getElementById('dlcopy1').files[0];
    if (dlcopy1) {
        formData.append('dlcopy1', dlcopy1);
    }
    var vehiclecopy1 = document.getElementById('vehiclecopy1').files[0];
    if (vehiclecopy1) {
        formData.append('vehiclecopy1', vehiclecopy1);
    }
    var accountcopy1 = document.getElementById('accountcopy1').files[0];
    if (accountcopy1) {
        formData.append('accountcopy1', accountcopy1);
    }
    var insurcopy1 = document.getElementById('insurcopy1').files[0];
    if (insurcopy1) {
        formData.append('insurcopy1', insurcopy1);
    }
    var profilePhoto = document.getElementById('profilePhoto').files[0];
    if (profilePhoto) {
        formData.append('profilePhoto', profilePhoto);
    }

    // Make AJAX request to update spreadsheet
    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            // Add a short delay before hiding the button and clearing the form fields
            setTimeout(function() {
                alert('Data updated successfully!');
                // Hide all fieldsets except resubmissionMessage
                var fieldsets = document.querySelectorAll('fieldset');
                fieldsets.forEach(function(fieldset) {
                    if (fieldset.id !== 'venresubmissionMessage') {
                        fieldset.style.display = 'none';
                    }
                });
                // Show the success message fieldset
                document.getElementById('venresubmissionMessage').style.display = 'block';
            }, 500); // Adjust the delay time as needed (in milliseconds)
        },
        error: function(xhr, status, error) {
            alert('An error occurred while updating the data: ' + error);
        }
    });

    // Hide the submit button immediately after submission
    document.getElementById('submitBtn').style.display = 'none';
}

function returnToVenReForm() {
    document.getElementById('venresubmissionForm').style.display = 'block'; // Display the form
    document.getElementById('venresubmissionMessage').style.display = 'none'; // Hide the success message
    window.location.reload(false); // Reload the page
}


















function submitExeReSubmissionForm(event, url) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Gather form data manually
    var formData = new FormData();
    formData.append('emailfieldexecutive', document.getElementById('emailfieldexecutive').value);
    formData.append('fieldexecutivename', document.getElementById('fieldexecutivename').value);
    formData.append('partner_id', document.getElementById('partner_id').value);
    formData.append('partnername', document.getElementById('partnername').value);
    formData.append('pannumber', document.getElementById('pannumber').value);
    formData.append('adharnumber', document.getElementById('adharnumber').value);
    formData.append('dlnumber', document.getElementById('dlnumber').value);
    formData.append('vehiclenumber', document.getElementById('vehiclenumber').value);
    formData.append('account', document.getElementById('account').value);
    formData.append('rc', document.getElementById('rc').value);
    formData.append('partnerMobilenumber', document.getElementById('partnerMobilenumber').value);

    // Make AJAX request to update spreadsheet
    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log('Data updated successfully:', response);
            // Add a short delay before hiding the button and clearing the form fields
            setTimeout(function() {
                alert('Data updated successfully!');
                // Hide all fieldsets except exeresubmissionMessage
                var fieldsets = document.querySelectorAll('fieldset');
                fieldsets.forEach(function(fieldset) {
                    if (fieldset.id !== 'exeresubmissionMessage') {
                        fieldset.style.display = 'none';
                    }
                });
                // Show the success message fieldset
                document.getElementById('exeresubmissionMessage').style.display = 'block';
            }, 500); // Adjust the delay time as needed (in milliseconds)
        },
        error: function(xhr, status, error) {
            console.error('Error occurred while updating the data:', error);
            alert('An error occurred while updating the data: ' + error);
        }
    });

    // Hide the submit button immediately after submission
    document.getElementById('submitBtn').style.display = 'none';
}

function returnToExeReForm() {
    document.getElementById('exeresubmissionForm').style.display = 'block';
    document.getElementById('exeresubmissionMessage').style.display = 'none';
    window.location.reload(false);
}

