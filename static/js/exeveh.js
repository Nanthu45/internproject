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


$(document).ready(function() {
    $('#emailfieldexecutive').on('focus', function() {
        editEmailFieldExecutive();
    });
});


function editEmailFieldExecutive() {
    console.log('editEmailFieldExecutive function called');


    document.getElementById('license').style.display = 'none';
    document.getElementById('license_photo').style.display = 'none';
    document.getElementById('vehicleno').style.display = 'none';
    document.getElementById('vehicle_photo').style.display = 'none';
    document.getElementById('aadhar').style.display = 'none';
    document.getElementById('rc').style.display = 'none';
    document.getElementById('insur').style.display = 'none';
    document.getElementById('pan').style.display = 'none';
    document.getElementById('bank').style.display = 'none';
    document.getElementById('selecttype').style.display = 'none';
    document.getElementById('partnerreg').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';


    document.getElementById('emailfieldexecutive').value = '';
    document.getElementById('drivinglicense').value = '';
    document.getElementById('license_photo').value = '';
    document.getElementById('vehiclenumber').value = '';
    document.getElementById('vehicle_photo').value = '';
    document.getElementById('aadhar_photo').value = '';
    document.getElementById('aadhar_photo_b').value = '';
    document.getElementById('rc_photo_f').value = '';
    document.getElementById('rc_photo_b').value = '';
    document.getElementById('aadhar_no').value = '';
    document.getElementById('insur_photo').value = '';
    document.getElementById('pan_photo').value = '';
    document.getElementById('bank_photo').value = '';
    document.getElementById('job').selectedIndex = 0;
    document.getElementById('partnername').value = '';
    document.getElementById('mobileno').value = '';
    document.getElementById('partner_photo').value = '';
    document.getElementById('comment').value = '';

    
    $('#fieldexecutivename').text('Please Enter your Email').css('color', 'red');

    console.log('Input fields cleared');
}










function toggleLicensetoVehicle() {
    var licensePhotoInput = document.getElementById('license_photo');
    var vehicleFieldset = document.getElementById('vehicleno');

    if (licensePhotoInput.files.length > 0) {
        vehicleFieldset.style.display = 'block';
        document.getElementById('vehiclenumber').focus();
    } else {
        vehicleFieldset.style.display = 'none';
    }
}


$(document).ready(function() {
    $('#drivinglicense').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
    });
});



function ValidateDrivingLicense() {
    var drivingLicense = $('#drivinglicense').val().trim(); 
    
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
                document.getElementById('license_photo').style.display = 'block';
                $('#vehiclestatus').text('Please Enter your Driving License').css('color', 'red');
                $('#license_photo').focus();
                
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}

$(document).ready(function() {
    $('#drivinglicense').on('focus', function() {
        editDrivingLicense();
    });
});

function editDrivingLicense() {
    console.log('editDrivingLicense function called'); 
    

    document.getElementById('vehicleno').style.display = 'none';
    document.getElementById('vehicle_photo').style.display = 'none';
    document.getElementById('aadhar').style.display = 'none';
    document.getElementById('rc').style.display = 'none';
    document.getElementById('insur').style.display = 'none';
    document.getElementById('pan').style.display = 'none';
    document.getElementById('bank').style.display = 'none';
    document.getElementById('selecttype').style.display = 'none';
    document.getElementById('partnerreg').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';


    document.getElementById('drivinglicense').value = ''; 
    document.getElementById('license_photo').value = '';
    document.getElementById('vehiclenumber').value = '';
    document.getElementById('vehicle_photo').value = '';
    document.getElementById('aadhar_photo').value = '';
    document.getElementById('aadhar_photo_b').value = '';
    document.getElementById('rc_photo_f').value = '';
    document.getElementById('rc_photo_b').value = '';
    document.getElementById('aadhar_no').value = '';
    document.getElementById('insur_photo').value = '';
    document.getElementById('pan_photo').value = '';
    document.getElementById('bank_photo').value = '';
    document.getElementById('job').selectedIndex = 0;
    document.getElementById('partnername').value = '';
    document.getElementById('mobileno').value = '';
    document.getElementById('partner_photo').value = '';
    document.getElementById('comment').value = '';


    $('#licensestatus').text('Please Enter your Driving License').css('color', 'red'); 
    
    console.log('Driving license field cleared'); 
}

















$(document).ready(function() {
    $('#vehiclenumber').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
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
    var vehicleNumber = $('#vehiclenumber').val().trim(); 

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
                document.getElementById('vehicle_photo').style.display = 'block';
                $('#vehicle_photo').focus();
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
            alert('Error: ' + xhr.responseText);
        }
    });
}


$(document).ready(function() {
    $('#vehiclenumber').on('focus', function() {
        editVehicle();
    });
});




function editVehicle() {
    console.log('editDrivingLicense function called'); 
    
  
    document.getElementById('vehicle_photo').style.display = 'none';
    document.getElementById('aadhar').style.display = 'none';
    document.getElementById('rc').style.display = 'none';
    document.getElementById('insur').style.display = 'none';
    document.getElementById('pan').style.display = 'none';
    document.getElementById('bank').style.display = 'none';
    document.getElementById('selecttype').style.display = 'none';
    document.getElementById('partnerreg').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';

    document.getElementById('vehiclenumber').value = '';
    document.getElementById('vehicle_photo').value = '';
    document.getElementById('aadhar_photo').value = '';
    document.getElementById('aadhar_photo_b').value = '';
    document.getElementById('rc_photo_f').value = '';
    document.getElementById('rc_photo_b').value = '';
    document.getElementById('aadhar_no').value = '';
    document.getElementById('insur_photo').value = '';
    document.getElementById('pan_photo').value = '';
    document.getElementById('bank_photo').value = '';
    document.getElementById('job').selectedIndex = 0;
    document.getElementById('partnername').value = '';
    document.getElementById('mobileno').value = '';
    document.getElementById('partner_photo').value = '';
    document.getElementById('comment').value = ''; 

    
    $('#vehiclestatus').text('Please enter Vehicle no').css('color', 'red'); 
    
    console.log('Vehicle Number  field cleared'); 
}





function toggleVehicletoAadhar() {
    var vehiclePhotoInput = document.getElementById('vehicle_photo');
    var aadharFieldset = document.getElementById('aadhar');

    if (vehiclePhotoInput.files.length > 0) {
        aadharFieldset.style.display = 'block';
        document.getElementById('aadhar_no').focus();
    } else {
        aadharFieldset.style.display = 'none';
    }
}



function toggleAadhartoRC() {
    var aadharPhotoInput = document.getElementById('aadhar_photo_b');
    var rcFieldset = document.getElementById('rc');

    if (aadharPhotoInput.files.length > 0) {
        rcFieldset.style.display = 'block';
    } else {
        rcFieldset.style.display = 'none';
    }
}

function toggleSubsequentFieldsets() {
    var rcPhotoInput = document.getElementById('rc_photo_b');
    var insurFieldset = document.getElementById('insur');
    var panFieldset = document.getElementById('pan');
    var bankFieldset = document.getElementById('bank');
    var selectTypeFieldset = document.getElementById('selecttype');

    if (rcPhotoInput.files.length > 0) {
        insurFieldset.style.display = 'block';
        panFieldset.style.display = 'block';
        bankFieldset.style.display = 'block';
        selectTypeFieldset.style.display = 'block';
    } else {
        insurFieldset.style.display = 'none';
        panFieldset.style.display = 'none';
        bankFieldset.style.display = 'none';
        selectTypeFieldset.style.display = 'none';
    }
}


function formatAadharNo(event) {
    var input = event.target;
    var formatted = input.value.replace(/\D/g, ''); 
    formatted = formatted.substring(0, 12); 
    input.value = formatted; 
}




function submitvendorvehicleForm(event, url) {
    
    event.preventDefault();

    
    var email = document.getElementById('emailfieldexecutive').value;
    var drivingLicense = document.getElementById('drivinglicense').value;
    var vehicleNumber = document.getElementById('vehiclenumber').value;
    var aadharNumber = document.getElementById('aadhar_no').value;
    var vehicleType = document.getElementById('job').value;
    var partnerName = document.getElementById('partnername').value;
    var partnerNumber = document.getElementById('mobileno').value;

    if (!email) {
        alert('Please enter Your Email.');
        return;
    }
    if (!drivingLicense) {
        alert('Please enter Driving License.');
        return;
    }
    if (!aadharNumber) {
        alert('Please enter Aadhar Number.');
        return;
    } else if (aadharNumber.length !== 12 || isNaN(aadharNumber)) {
        alert('Please enter a valid 16-digit Aadhar Number.');
        return;
    }

    if (!vehicleNumber) {
        alert('Please enter Vehicle Number.');
        return;
    }
    if (!vehicleType) {
        alert('Please Choose vehicle Type.');
        return;
    }
    if (!partnerName) {
        alert('Please enter Partner Name.');
        return;
    }
    if (partnerNumber.length !== 10) {
        alert('Please enter contact correctly. It should be exactly 10 digits.');
        return;
    }

    
    var license_photo = document.getElementById('license_photo').files[0];
    var vehicle_photo = document.getElementById('vehicle_photo').files[0];
    var aadhar_photo = document.getElementById('aadhar_photo').files[0];
    var aadhar_photo_b = document.getElementById('aadhar_photo_b').files[0];
    var rc_photo_f = document.getElementById('rc_photo_f').files[0];
    var rc_photo_b = document.getElementById('rc_photo_b').files[0];
    var insur_photo = document.getElementById('insur_photo').files[0];
    var pan_photo = document.getElementById('pan_photo').files[0];
    var bank_photo = document.getElementById('bank_photo').files[0];
    var partner_photo = document.getElementById('partner_photo').files[0];

    
    if (!license_photo) {
        alert('Please upload License Photo.');
        return;
    }
    if (!vehicle_photo) {
        alert('Please upload Vehicle Photo.');
        return;
    }
    if (!aadhar_photo) {
        alert('Please upload Front Aadhar Photo.');
        return;
    }
    if (!aadhar_photo_b) {
        alert('Please upload Back Aadhar Photo.');
        return;
    }
    if (!rc_photo_f) {
        alert('Please upload Front RC Photo.');
        return;
    }
    
    if (!rc_photo_b) {
        alert('Please upload Back RC Photo.');
        return;
    }
    if (!partner_photo) {
        alert('Please upload Partner Photo.');
        return;
    }

        var formData = new FormData();
        formData.append('emailfieldexecutive', email);
        formData.append('fieldexecutivename', document.getElementById('fieldexecutivename').textContent.trim());
        formData.append('drivinglicense', drivingLicense);
        formData.append('vehiclenumber', vehicleNumber);
        formData.append('adhar_no', aadharNumber);
        formData.append('job', vehicleType);
        formData.append('partnername', partnerName);
        formData.append('mobileno', partnerNumber);
        formData.append('comment', document.getElementById('comment').value);
        formData.append('license_photo', license_photo);
        formData.append('vehicle_photo', vehicle_photo);
        formData.append('aadhar_photo', aadhar_photo);
        formData.append('aadhar_photo_b', aadhar_photo_b);
        formData.append('rc_photo_f', rc_photo_f);
        formData.append('rc_photo_b', rc_photo_b);
        formData.append('insur_photo', insur_photo);
        formData.append('pan_photo', pan_photo);
        formData.append('bank_photo', bank_photo);
        formData.append('partner_photo', partner_photo);

    // Disable scrolling
    $('body').css('overflow', 'hidden');
    // Disable input, file, and select elements
    var inputs = document.querySelectorAll('input, select');
    inputs.forEach(function(input) {
        input.disabled = true;
    });

    // Disable file inputs
    var fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(function(fileInput) {
        fileInput.setAttribute('disabled', 'disabled');
    });


    // Blur the body
    document.body.classList.add('blur');

    // Define CSS for blur effect
    var style = document.createElement('style');
    style.textContent = `
       .blur {
             filter: blur(1px);
        }
    `;
    document.head.append(style);


    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            alert('Data updated successfully!');
            // Reset form fields if needed
            document.getElementById('emailfieldexecutive').value = '';
            document.getElementById('fieldexecutivename').textContent = '';
            document.getElementById('drivinglicense').value = '';
            document.getElementById('vehiclenumber').value = '';
            document.getElementById('aadhar_no').value = '';
            document.getElementById('job').value = '';
            document.getElementById('partnername').value = '';
            document.getElementById('mobileno').value = '';
            document.getElementById('comment').value = '';
            document.getElementById('license_photo').value = '';
            document.getElementById('vehicle_photo').value = '';
            document.getElementById('aadhar_photo').value = '';
            document.getElementById('aadhar_photo_b').value = '';
            document.getElementById('rc_photo_f').value = '';
            document.getElementById('rc_photo_b').value = '';
            document.getElementById('insur_photo').value = '';
            document.getElementById('pan_photo').value = '';
            document.getElementById('bank_photo').value = '';
            document.getElementById('partner_photo').value = '';
            // Hide all fieldsets except exeresubmissionMessage
            var fieldsets = document.querySelectorAll('fieldset');
            fieldsets.forEach(function(fieldset) {
                if (fieldset.id !== 'exeresubmissionMessage') {
                    fieldset.style.display = 'none';
                }
            });
            // Define CSS for blur effect
            var style = document.createElement('style');
             style.textContent = `
              .blur {
                    filter: blur(0px);
                 }
            `;
            document.head.append(style);
            document.getElementById('exeresubmissionMessage').style.display = 'block';
        },
        error: function(xhr, status, error) {
            alert('An error occurred while updating the data: ' + error);
        }
    });

    // Show submission message
    
    document.getElementById('submitBtn').style.display = 'none';
}


function returnToVenForm() {
    document.getElementById('exeresubmissionMessage').style.display = 'none';
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
        document.getElementById('partnername').focus(); // Optional: Automatically focus on the partner name input field
    } else {
        partnerFieldset.style.display = 'none';
        submitButton.style.display = 'none';
        // Reset input fields
        document.getElementById('partnername').value = '';
        document.getElementById('mobileno').value = '';
        document.getElementById('comment').value = '';
    }
}

