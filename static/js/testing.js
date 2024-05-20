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
                $('#vehicleno').css('display', 'block');
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
    document.getElementById('field').style.display = 'none';

    document.getElementById('license').style.display = 'none';
    document.getElementById('vehicleno').style.display = 'none';

    document.getElementById('vendoremail').value = '';
    document.getElementById('drivinglicense').value = '';
    document.getElementById('vehiclenumber').value = '';

    $('#vendorname').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
}


function EmailvenVehKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
        event.target.blur();
    }
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
                $('#vehicleno').css('display', 'block');
                $('#licensestatus').text('Please Enter your Driving License').css('color', 'red');
                $('#drivinglicense').focus();

                
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
    console.log('editEmailFieldExecutive1 function called');
    

    // Clear input fields
    document.getElementById('vendor').style.display = 'none';

    document.getElementById('license').style.display = 'none';
    document.getElementById('vehicleno').style.display = 'none';

    document.getElementById('vendoremail').value = '';
    document.getElementById('drivinglicense').value = '';
    document.getElementById('vehiclenumber').value = '';

    // Call ValidateDrivingLicense function to reset the onboard status
    $('#fieldexecutivename').text('Please Enter your Email').css('color', 'red'); 

    console.log('Input fields cleared');
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




function venVehNextInput(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    }
}


function EmailvenVehKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
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