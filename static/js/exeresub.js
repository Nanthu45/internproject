
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
                $('#2').css('display', 'block');
                
                $('#partnername').text('Please Enter Partner ID').css('color', 'red');
                $('#partner_id').focus();
                
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




$(document).ready(function() {
    $('#emailfieldexecutive').on('focus', function() {
        editEmailFieldExecutive();
    });
});

function editEmailFieldExecutive() {
    console.log('editEmailFieldExecutive function called');

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
    document.getElementById('12').value = '';

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


function validatePartner(url) {
    var partnerInfo = $('#partner_id').val();
    if (!partnerInfo) {
        $('#partnername').next('.error').text('Please enter a partner ID to validate.').css('color', 'red');
        return;
    }
    $('#partnername').html('<div class="animate__animated animate__flash">Searching...</div>'); 
    $.ajax({
        type: 'POST',
        url: url,
        data: {'partner_id': partnerInfo},  
        success: function(response) {
            var partnerNameElement = $('#partnername');
            if (response.found) {
                partnerNameElement.text(response.name);
                partnerNameElement.css('color', 'green');
                
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

$(document).ready(function() {
    $('#partner_id').on('focus', function() {
        editID();
    });
});

function editID() {
    console.log('editID function called');

    
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


    document.getElementById('partner_id').value = '';
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

    $('#partnername').text('Please Enter Partner ID').css('color', 'red'); 

    console.log('Input fields cleared');
}

function idvenVehKeyPress(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
        event.target.blur();
    }
}




function submitExeReSubmissionForm(event, url) {
    event.preventDefault();

    var formData = new FormData();
    formData.append('emailfieldexecutive', document.getElementById('emailfieldexecutive').value);
    formData.append('fieldexecutivename', document.getElementById('fieldexecutivename').value);
    formData.append('partner_id', document.getElementById('partner_id').value);
    formData.append('partnername', document.getElementById('partnername').value);

    var rc = document.getElementById('rc').value;
    var rc_photo = document.getElementById('rc_photo').files[0];

    var pancardcopy1 = document.getElementById('pancardcopy1').files[0];
    var pannumber = document.getElementById('pannumber').value;

    var adharnumber = document.getElementById('adharnumber').value;
    var aadharcopy1 = document.getElementById('aadharcopy1').files[0];
    var aadharcopy2 = document.getElementById('aadharcopy2').files[0];
    
    var dlnumber = document.getElementById('dlnumber').value;
    var dlcopy1 = document.getElementById('dlcopy1').files[0];
    
    var vehiclenumber = document.getElementById('vehiclenumber').value;
    var vehiclecopy1 = document.getElementById('vehiclecopy1').files[0];
    
    var account = document.getElementById('account').value;
    var accountcopy1 = document.getElementById('accountcopy1').files[0];
    
    var partnerMobilenumber = document.getElementById('partnerMobilenumber').value;
    var profilePhoto = document.getElementById('profilePhoto').files[0];

    var insurcopy1 = document.getElementById('insurcopy1').files[0];
    

    var atLeastOneGroupFilled =
        (pancardcopy1 && pannumber) ||
        (adharnumber && aadharcopy1 && aadharcopy2) || 
        (dlnumber && dlcopy1) ||
        (vehiclenumber && vehiclecopy1) ||
        (account && accountcopy1) ||
        (rc && rc_photo) ||
        (insurcopy1) ||
        (partnerMobilenumber && profilePhoto);
    

    if (!atLeastOneGroupFilled) {
        alert("At least one field must be filled.");
        return; 
    }

    formData.append('pancardcopy1', pancardcopy1);
    formData.append('pannumber', pannumber);
    formData.append('aadharcopy1', aadharcopy1);
    formData.append('aadharcopy2', aadharcopy2);
    formData.append('adharnumber', adharnumber);
    formData.append('dlcopy1', dlcopy1);
    formData.append('dlnumber', dlnumber);
    formData.append('vehiclecopy1', vehiclecopy1);
    formData.append('vehiclenumber', vehiclenumber);
    formData.append('accountcopy1', accountcopy1);
    formData.append('account', account);
    formData.append('rc', rc);
    formData.append('rc_photo', rc_photo);
    formData.append('insurcopy1', insurcopy1);
    formData.append('profilePhoto', profilePhoto);
    formData.append('partnerMobilenumber', partnerMobilenumber);

    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            setTimeout(function() {
                alert('Data updated successfully!');
                var fieldsets = document.querySelectorAll('fieldset');
                fieldsets.forEach(function(fieldset) {
                    if (fieldset.id !== 'exeresubmissionMessage') {
                        fieldset.style.display = 'none';
                    }
                });
                document.getElementById('exeresubmissionMessage').style.display = 'block';
            }, 500);
        },
        error: function(xhr, status, error) {
            alert('An error occurred while updating the data: ' + error);
        }
    });

    document.getElementById('submitBtn').style.display = 'none';
}

function returnToExeReForm() {
    document.getElementById('exeresubmissionForm').style.display = 'block';
    document.getElementById('exeresubmissionMessage').style.display = 'none';
    window.location.reload(false);
}





function togglePanNumberAndCopy() {
    var pan = document.getElementById('pan');
    var panNumberAndCopy = document.getElementById('panNumberAndCopy');

    if (pan.checked) {
        panNumberAndCopy.style.display = 'block';
    } else {
        panNumberAndCopy.style.display = 'none';
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
        document.getElementById('profilePhoto').value = '';
    }
}


$(document).ready(function() {
    $('#partner_id').on('input', function() {
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

$(document).ready(function() {
    $('#dlnumber').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
    });
});

$(document).ready(function() {
    $('#vehiclenumber').on('input', function() {
        var inputVal = $(this).val();
        $(this).val(inputVal.toUpperCase()); 
    });
});

$(document).ready(function() {
    $('#rc').on('input', function() {
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

function formatAadharNo(event) {
    var input = event.target;
    var formatted = input.value.replace(/\D/g, ''); 
    formatted = formatted.substring(0, 12); 
    input.value = formatted; 
}