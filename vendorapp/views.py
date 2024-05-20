
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime
from django.conf import settings
import os
import pytz
BASE_DIR = settings.BASE_DIR

@csrf_exempt
def check_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            try:
                scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
                credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
                credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
                client = gspread.authorize(credentials)
                spreadsheet = client.open('Test sheet')  
                worksheet = spreadsheet.get_worksheet(6)  
                column_names = worksheet.row_values(1)  
                vendor_info_column_index = column_names.index("Vendor Info") + 1  
                vendor_name_column_index = column_names.index("Vendor Name") + 1  

                cells = worksheet.findall(email)
                if cells:  
                    for cell in cells:
                        if cell.col == vendor_info_column_index:
                            name = worksheet.cell(cell.row, vendor_name_column_index).value
                            return JsonResponse({'found': True, 'name': name})
                return JsonResponse({'found': False, 'name': 'Vendor not found'})
                
            except Exception as e:
                return JsonResponse({'found': False, 'name': 'Vendor not found'})
    
    return JsonResponse({'error': 'Email not provided'}, status=400)



@csrf_exempt
def check_field_executive_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            try:
                scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
                credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
                credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
                client = gspread.authorize(credentials)
                spreadsheet = client.open('Test sheet')  
                worksheet = spreadsheet.get_worksheet(6)  
                column_names = worksheet.row_values(1)  
                exec_info_column_index = column_names.index("Field Executive Info") + 1  
                exec_name_column_index = column_names.index("Field Executive Name") + 1  
                
                cells = worksheet.findall(email) 
                if cells:  
                    for cell in cells:
                        if cell.col == exec_info_column_index:
                            name = worksheet.cell(cell.row, exec_name_column_index).value
                            return JsonResponse({'found': True, 'name': name})
                return JsonResponse({'found': False, 'name': 'Field Executive not found'})
                
            except Exception as e:
                return JsonResponse({'found': False, 'name': 'Field Executive not found'})
    return JsonResponse({'error': 'Email not provided'}, status=400)




@csrf_exempt
def check_partner(request):
    if request.method == 'POST':
        partner_id = request.POST.get('partner_id')
        if partner_id:
            try:
                scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
                credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
                credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
                client = gspread.authorize(credentials)
                spreadsheet = client.open('Test sheet')  
                worksheet = spreadsheet.get_worksheet(5)  
                column_names = worksheet.row_values(1)  
                partner_id_column_index = column_names.index("Partner ID") + 1  
                partner_name_column_index = column_names.index("Partner Name") + 1  
                cells = worksheet.findall(partner_id)
                
                if cells:  
                    for cell in cells:
                        if cell.col == partner_id_column_index:
                            partner_name = worksheet.cell(cell.row, partner_name_column_index).value
                            return JsonResponse({'found': True, 'name': partner_name})
                return JsonResponse({'found': False})
                
            except Exception as e:
                return JsonResponse({'found': False})
    
   
    return JsonResponse({'error': 'Partner ID not provided'}, status=400)



@csrf_exempt
def check_user_contact(request):
    if request.method == 'POST':
        contact_number = request.POST.get('contact_number')
        if contact_number:
            try:
                scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
                credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
                credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
                client = gspread.authorize(credentials)
                
                spreadsheet = client.open('Test sheet')
                worksheet = spreadsheet.get_worksheet(2) 
                column_names = worksheet.row_values(1)
                contact_column_index = column_names.index("User Contact") + 1  
                contact_status_column_index = column_names.index("Contact Status") + 1 
                cells = worksheet.findall(contact_number)  
                
                if cells:
                    for cell in cells:
                        if cell.col == contact_column_index:
                            contact_status = worksheet.cell(cell.row, contact_status_column_index).value
                            return JsonResponse({'found': True, 'status': contact_status})
                return JsonResponse({'found': False, 'status': 'Contact number not found'})
                
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Contact number not provided'}, status=400)




@csrf_exempt
def check_driving_license(request):
    if request.method == 'POST':
        driving_license = request.POST.get('driving_license')
        if driving_license:
            try:
                scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
                credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
                credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
                client = gspread.authorize(credentials)
                spreadsheet = client.open('Test sheet')  # Update with your spreadsheet name
                worksheet = spreadsheet.get_worksheet(0)  # Assuming data is in the first worksheet
                driving_license_column = worksheet.col_values(8)  # Assuming driving license is in the eighth column
                row_index = None
                if driving_license in driving_license_column:
                    row_index = driving_license_column.index(driving_license) + 1  # Index starts from 1
                    onboard_status = worksheet.cell(row_index, 9).value  # Assuming onboard status is in the ninth column
                    return JsonResponse({'found': True, 'onboard_status': onboard_status})
                else:
                    return JsonResponse({'found': False, 'message': 'New driving license'})
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)

@csrf_exempt
def check_vehicle_number(request):
    if request.method == 'POST':
        vehicle_number = request.POST.get('vehicle_number')
        if vehicle_number:
            try:
                scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
                credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
                credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
                client = gspread.authorize(credentials)
                spreadsheet = client.open('Test sheet')  # Update with your spreadsheet name
                worksheet = spreadsheet.get_worksheet(0)  # Assuming data is in the first worksheet
                vehicle_number_column = worksheet.col_values(11)  # Assuming vehicle number is in the eighth column
                row_index = None
                if vehicle_number in vehicle_number_column:
                    row_index = vehicle_number_column.index(vehicle_number) + 1  # Index starts from 1
                    current_status = worksheet.cell(row_index, 12).value  # Assuming current status is in the eleventh column
                    return JsonResponse({'found': True, 'current_status': current_status})
                else:
                    return JsonResponse({'found': False, 'message': 'New vehicle'})
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)





@csrf_exempt
def update_spreadsheet_vendor_vehicle(request):
    if request.method == 'POST':
        try:
            email = request.POST.get('vendoremail', "")
            vendor_name = request.POST.get('vendorname', "") 
            drivinglicense1 = request.POST.get('drivinglicense', "")
            onboard_status = "Registered"
            license_photo1 = request.FILES.get('license_photo')
            vehiclenumber1 = request.POST.get('vehiclenumber', "")
            current_status = "Waiting for Approval"
            vehicle_photo1 = request.FILES.get('vehicle_photo', None)
            adhar_no1 = request.POST.get('adhar_no', "")
            aadhar_photo1 = request.FILES.get('aadhar_photo', None)
            aadhar_photo1_b = request.FILES.get('aadhar_photo_b', None)
            rc_photo1_f = request.FILES.get('rc_photo_f', None)
            rc_photo1_b = request.FILES.get('rc_photo_b', None)
            insur_photo1 = request.FILES.get('insur_photo', None)
            pan_photo1 = request.FILES.get('pan_photo', None)
            bank_photo1 = request.FILES.get('bank_photo', None)
            job1 = request.POST.get('job', "")
            partnername = request.POST.get('partnername', "")
            mobileno1 = request.POST.get('mobileno', "")
            partner_photo1 = request.FILES.get('partner_photo', None)
            comments = request.POST.get('comment')

            folder_id = "1q6nsQFC7Z3Q3Dr8PTCQgglWNU4LIFNdl"  
            license_photo1_url = save_and_get_url(license_photo1, folder_id) if license_photo1 else ""
            vehicle_photo1_url = save_and_get_url(vehicle_photo1, folder_id) if vehicle_photo1 else ""
            aadhar_photo_f_url = save_and_get_url(aadhar_photo1, folder_id) if aadhar_photo1 else ""
            aadhar_photo_b_url = save_and_get_url(aadhar_photo1_b, folder_id) if aadhar_photo1_b else ""
            rc_photo1_f_url = save_and_get_url(rc_photo1_b, folder_id) if rc_photo1_f else ""
            rc_photo1_b_url = save_and_get_url(rc_photo1_f, folder_id) if rc_photo1_b else ""
            insur_photo1_url = save_and_get_url(insur_photo1, folder_id) if insur_photo1 else ""
            pan_photo1_url = save_and_get_url(pan_photo1, folder_id) if pan_photo1 else ""
            bank_photo1_url = save_and_get_url(bank_photo1, folder_id) if bank_photo1 else ""
            partner_photo1_url = save_and_get_url(partner_photo1, folder_id) if partner_photo1 else ""

            # Authenticate with Google Sheets API
            scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
            credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
            credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
            client = gspread.authorize(credentials)
            spreadsheet = client.open('Test sheet')  
            worksheet = spreadsheet.get_worksheet(0)  

            worksheet_6 = spreadsheet.get_worksheet(6)
            column_values = worksheet_6.col_values(4)  
            row_index = column_values.index(email) + 1  
            vendor_name = worksheet_6.cell(row_index, 5).value
  

            indian_timezone = pytz.timezone('Asia/Kolkata')
            indian_time_now = datetime.now(indian_timezone)
            today = indian_time_now.strftime("%d-%m-%Y-%A")
            current_time = indian_time_now.strftime("%I:%M:%S %p")

            column_values = worksheet.col_values(1)
            row_count = len(column_values)
            if row_count > 0:
                row_count -= 1
            row_count += 1

            row = [row_count, today, current_time, email, vendor_name,'','',  drivinglicense1,onboard_status, license_photo1_url, vehiclenumber1,current_status, vehicle_photo1_url, adhar_no1, aadhar_photo_f_url, aadhar_photo_b_url,rc_photo1_f_url,rc_photo1_b_url, insur_photo1_url, pan_photo1_url, bank_photo1_url, job1, partnername, mobileno1, partner_photo1_url, comments]
 
            worksheet.append_row(row, value_input_option='USER_ENTERED', insert_data_option='INSERT_ROWS',
                                  table_range="A:Z")

            return JsonResponse({'message': 'Data updated successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
     
    
    
    
    
    
@csrf_exempt
def update_spreadsheet_field_executive(request):
    if request.method == 'POST':
        try:
            email = request.POST.get('emailfieldexecutive', "")
            field_name = request.POST.get('fieldexecutivename', "") 
            drivinglicense1 = request.POST.get('drivinglicense', "")
            onboard_status = "Registered"
            license_photo1 = request.FILES.get('license_photo')
            vehiclenumber1 = request.POST.get('vehiclenumber', "")
            current_status = "Waiting for Approval"
            vehicle_photo1 = request.FILES.get('vehicle_photo', None)
            adhar_no1 = request.POST.get('adhar_no', "")
            aadhar_photo1 = request.FILES.get('aadhar_photo', None)
            aadhar_photo1_b = request.FILES.get('aadhar_photo_b', None)
            rc_photo1_f = request.FILES.get('rc_photo_f', None)
            rc_photo1_b = request.FILES.get('rc_photo_b', None)
            insur_photo1 = request.FILES.get('insur_photo', None)
            pan_photo1 = request.FILES.get('pan_photo', None)
            bank_photo1 = request.FILES.get('bank_photo', None)
            job1 = request.POST.get('job', "")
            partnername = request.POST.get('partnername', "")
            mobileno1 = request.POST.get('mobileno', "")
            partner_photo1 = request.FILES.get('partner_photo', None)
            comments = request.POST.get('comment')


            # Assuming you have defined save_and_get_url function correctly
            folder_id = "1q6nsQFC7Z3Q3Dr8PTCQgglWNU4LIFNdl"  # Your folder ID for storing photos
            license_photo1_url = save_and_get_url(license_photo1, folder_id) if license_photo1 else ""
            vehicle_photo1_url = save_and_get_url(vehicle_photo1, folder_id) if vehicle_photo1 else ""
            aadhar_photo_f_url = save_and_get_url(aadhar_photo1, folder_id) if aadhar_photo1 else ""
            aadhar_photo_b_url = save_and_get_url(aadhar_photo1_b, folder_id) if aadhar_photo1_b else ""
            rc_photo1_f_url = save_and_get_url(rc_photo1_b, folder_id) if rc_photo1_f else ""
            rc_photo1_b_url = save_and_get_url(rc_photo1_f, folder_id) if rc_photo1_b else ""
            insur_photo1_url = save_and_get_url(insur_photo1, folder_id) if insur_photo1 else ""
            pan_photo1_url = save_and_get_url(pan_photo1, folder_id) if pan_photo1 else ""
            bank_photo1_url = save_and_get_url(bank_photo1, folder_id) if bank_photo1 else ""
            partner_photo1_url = save_and_get_url(partner_photo1, folder_id) if partner_photo1 else ""

            # Authenticate with Google Sheets API
            scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
            credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
            credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
            client = gspread.authorize(credentials)
            spreadsheet = client.open('Test sheet')  
            worksheet = spreadsheet.get_worksheet(0)  

            worksheet_6 = spreadsheet.get_worksheet(6)
            column_values = worksheet_6.col_values(7)  
            row_index = column_values.index(email) + 1  
            field_name = worksheet_6.cell(row_index, 8).value
  

            indian_timezone = pytz.timezone('Asia/Kolkata')
            indian_time_now = datetime.now(indian_timezone)
            today = indian_time_now.strftime("%d-%m-%Y-%A")
            current_time = indian_time_now.strftime("%I:%M:%S %p")

            column_values = worksheet.col_values(1)
            row_count = len(column_values)
            if row_count > 0:
                row_count -= 1
            row_count += 1

            row = [row_count, today, current_time,'','',email, field_name, drivinglicense1,onboard_status, license_photo1_url, vehiclenumber1,current_status, vehicle_photo1_url, adhar_no1, aadhar_photo_f_url, aadhar_photo_b_url,rc_photo1_f_url,rc_photo1_b_url, insur_photo1_url, pan_photo1_url, bank_photo1_url, job1, partnername, mobileno1, partner_photo1_url, comments]
            
            

            worksheet.append_row(row, value_input_option='USER_ENTERED', insert_data_option='INSERT_ROWS',
                                  table_range="A:Z")

            return JsonResponse({'message': 'Data updated successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)   
    
    
    
@csrf_exempt
def update_spreadsheet_user_detail(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        contact_number = request.POST.get('contactnumber')
        contact_status = "Registered"
        user_name = request.POST.get('username')

        try:
            scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
            credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
            credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
            client = gspread.authorize(credentials)
            spreadsheet = client.open('Test sheet')
            worksheet = spreadsheet.get_worksheet(2)  
            
            worksheet_6 = spreadsheet.get_worksheet(6)
            column_values = worksheet_6.col_values(7)  
            row_index = column_values.index(email) + 1  
            exec_name = worksheet_6.cell(row_index, 8).value

            indian_timezone = pytz.timezone('Asia/Kolkata')
            indian_time_now = datetime.now(indian_timezone)
            today = indian_time_now.strftime("%d-%m-%Y-%A")
            current_time = indian_time_now.strftime("%I:%M:%S %p")

            column_values = worksheet.col_values(1)  
            row_count = len(column_values)  
            if row_count > 0:
               row_count -= 1  
            row_count += 1  
            
            row = [row_count, today, current_time, email, exec_name, contact_number,contact_status, user_name]

            worksheet.append_row(row, value_input_option='RAW', insert_data_option='INSERT_ROWS', table_range="A:Z")

            return JsonResponse({'message': 'Data updated successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

           
    
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseUpload
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
from io import BytesIO

def save_and_get_url(file, folder_id):
    scope = ['https://www.googleapis.com/auth/drive']
    credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
    credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
    service = build('drive', 'v3', credentials=credentials)

    file_metadata = {
        'name': file.name, 
        'parents': [folder_id], 
    }
    
    file_contents = BytesIO(file.read())
    media = MediaIoBaseUpload(file_contents, mimetype=file.content_type)
    uploaded_file = service.files().create(body=file_metadata, media_body=media, fields='id, webContentLink').execute()
    file_url = uploaded_file.get('webContentLink')
    return file_url

folder_id = '1q6nsQFC7Z3Q3Dr8PTCQgglWNU4LIFNdl'

@csrf_exempt
def update_spreadsheet_vendor_registration(request):
    if request.method == 'POST':
        
        try:    
            email = request.POST.get('vendoremail')
            vendor_office_name = request.POST.get('vendoroffice')
            vendor_pan_name = request.POST.get('vendorpanname')
            vendor_contact = request.POST.get('mobilenumber')
            bank_account_copy_front = request.FILES.get('bankAccountCopy1')
            bank_account_number = request.POST.get('bankaccount')
            bank_ifsc_code = request.POST.get('ifsccode')
            gst_number = request.POST.get('gst_value') 
            gst_office = request.POST.get('gst_address')
            adhar_number = request.POST.get('adhar')
            pancard_copy_front = request.FILES.get('pancardcopy1')
            pancard_number = request.POST.get('pannumber')
            registered_address = request.POST.get('address')
            
            
                    
                
            declaration = request.POST.get('declaration', '')
            # Handle multiple checkbox values for declaration
            declaration_values = request.POST.getlist('declaration_1')
            declaration_1 = ', '.join(declaration_values)

            # Handle multiple checkbox values for terms
            terms_values = request.POST.getlist('terms')
            terms = ', '.join(terms_values)

        
                    
            credit_period = request.POST.get('days')
            
            bank_account_copy_front_url = save_and_get_url(bank_account_copy_front, folder_id)
            pancard_copy_front_url = save_and_get_url(pancard_copy_front, folder_id)
            # Authenticate with Google Sheets API
            scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
            credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
            credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
            client = gspread.authorize(credentials)
            spreadsheet = client.open('Test sheet')  
            worksheet = spreadsheet.get_worksheet(1)  

            today = datetime.now().strftime(" %d-%m-%Y-%A")
            current_time = datetime.now().strftime("%I:%M:%S %p")

            column_values = worksheet.col_values(1)  
            row_count = len(column_values)  
            if row_count > 0:
               row_count -= 1  
            row_count += 1  

            row = [row_count, today, current_time, email, vendor_office_name, vendor_pan_name, vendor_contact, bank_account_copy_front_url,
                   bank_account_number, bank_ifsc_code, gst_number,gst_office, adhar_number, pancard_copy_front_url,
                   pancard_number, registered_address,terms, credit_period,declaration,declaration_1]

            worksheet.append_row(row, value_input_option='USER_ENTERED', insert_data_option='INSERT_ROWS',
                                  table_range="A:Z")

            return JsonResponse({'message': 'Data updated successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
    
    
    
    
    
    
    

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
from datetime import datetime
import gspread
from oauth2client.service_account import ServiceAccountCredentials

@csrf_exempt
def update_spreadsheet_executive_registration(request):
    if request.method == 'POST':
        
        try:
            email = request.POST.get('executiveemail')
            exe_pan_name = request.POST.get('exepanname')
            exe_contact = request.POST.get('mobilenumber')
            bank_account_number = request.POST.get('bankaccount')
            bank_ifsc_code = request.POST.get('ifsccode')
            bank_account_copy_front = request.FILES.get('bankAccountCopy1')
            adhar_number = request.POST.get('adhar')
            pancard_number = request.POST.get('pannumber')
            pancard_copy_front = request.FILES.get('pancardcopy1')
        
            # Assuming you have defined save_and_get_url function correctly
            bank_account_copy_front_url = save_and_get_url(bank_account_copy_front, folder_id)
            pancard_copy_front_url = save_and_get_url(pancard_copy_front, folder_id)
            # Authenticate with Google Sheets API
            scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
            credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
            credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
            client = gspread.authorize(credentials)
            spreadsheet = client.open('Test sheet')  # Update with your spreadsheet name
            worksheet = spreadsheet.get_worksheet(3)  # Assuming data is in the first worksheet

            today = datetime.now().strftime(" %d-%m-%Y-%A")
            current_time = datetime.now().strftime("%I:%M:%S %p")

            column_values = worksheet.col_values(1)
            row_count = len(column_values)
            if row_count > 0:
                row_count -= 1
            row_count += 1

            row = [row_count, today, current_time, email, exe_pan_name,  exe_contact, bank_account_number, bank_ifsc_code,
                  bank_account_copy_front_url, adhar_number, pancard_number, pancard_copy_front_url]

            worksheet.append_row(row, value_input_option='USER_ENTERED', insert_data_option='INSERT_ROWS',
                                  table_range="A:Z")

            return JsonResponse({'message': 'Data updated successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)





from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
from datetime import datetime
import gspread
from oauth2client.service_account import ServiceAccountCredentials

# Folder ID in Google Drive
folder_id = '1q6nsQFC7Z3Q3Dr8PTCQgglWNU4LIFNdl'

import os
import gspread
from datetime import datetime
from oauth2client.service_account import ServiceAccountCredentials
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt



@csrf_exempt
def update_spreadsheet_vendor_resubmission(request):
    if request.method == 'POST':
        try:
            email = request.POST.get('vendoremail', "")
            vendor_name = request.POST.get('vendorname', "") 
            partnerId = request.POST.get('partner_id', "")
            partner_name = request.POST.get('partnername', "")
            panNumber = request.POST.get('pannumber', "")
            pancard_copy_front = request.FILES.get('pancardcopy1', None)
            aadhar_number = request.POST.get('adharnumber', "")
            aadhar_copy_1 = request.FILES.get('aadharcopy1', None)
            aadhar_copy_2 = request.FILES.get('aadharcopy2', None)
            dl_number = request.POST.get('dlnumber', "")
            dl_copy = request.FILES.get('dlcopy1', None)
            vehicle_number = request.POST.get('vehiclenumber', "")
            vehicle_copy = request.FILES.get('vehiclecopy1', None)
            account_number = request.POST.get('account', "")
            bank_copy = request.FILES.get('accountcopy1', None)
            rc_number = request.POST.get('rc', "")
            rc_photo = request.FILES.get('rc_photo', None)
            partner_number = request.POST.get('partnerMobilenumber', "")
            insur_copy = request.FILES.get('insurcopy1', None)
            profile_photo = request.FILES.get('profilePhoto', None)

            # Assuming you have defined save_and_get_url function correctly
            pancard_copy_front_url = save_and_get_url(pancard_copy_front, folder_id) if pancard_copy_front else ""
            aadhar_copy_1_url = save_and_get_url(aadhar_copy_1, folder_id) if aadhar_copy_1 else ""
            aadhar_copy_2_url = save_and_get_url(aadhar_copy_2, folder_id) if aadhar_copy_1 else ""
            dl_copy_url = save_and_get_url(dl_copy, folder_id) if dl_copy else ""
            vehicle_copy_url = save_and_get_url(vehicle_copy, folder_id) if vehicle_copy else ""
            bank_copy_url = save_and_get_url(bank_copy, folder_id) if bank_copy else ""
            rc_photo_url = save_and_get_url(rc_photo, folder_id) if rc_photo else ""
            insur_copy_url = save_and_get_url(insur_copy, folder_id) if insur_copy else ""
            profile_photo_url = save_and_get_url(profile_photo, folder_id) if profile_photo else ""

            # Authenticate with Google Sheets API
            scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
            credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
            credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
            client = gspread.authorize(credentials)
            spreadsheet = client.open('Test sheet')  
            worksheet = spreadsheet.get_worksheet(4)  

            worksheet_6 = spreadsheet.get_worksheet(6)
            column_values = worksheet_6.col_values(4)  
            row_index = column_values.index(email) + 1  
            vendor_name = worksheet_6.cell(row_index, 5).value

            worksheet_5 = spreadsheet.get_worksheet(5)
            column_values = worksheet_5.col_values(4)  
            row_index = column_values.index(partnerId) + 1  
            partner_name = worksheet_5.cell(row_index, 5).value  

            indian_timezone = pytz.timezone('Asia/Kolkata')
            indian_time_now = datetime.now(indian_timezone)
            today = indian_time_now.strftime("%d-%m-%Y-%A")
            current_time = indian_time_now.strftime("%I:%M:%S %p")

            column_values = worksheet.col_values(1)
            row_count = len(column_values)
            if row_count > 0:
                row_count -= 1
            row_count += 1

            row = [row_count, today, current_time, email, vendor_name,'','', partnerId, partner_name, panNumber, pancard_copy_front_url, aadhar_number, aadhar_copy_1_url,aadhar_copy_2_url, dl_number, dl_copy_url, vehicle_number, vehicle_copy_url, account_number, bank_copy_url, rc_number,rc_photo_url, partner_number, insur_copy_url, profile_photo_url]
            
            

            worksheet.append_row(row, value_input_option='USER_ENTERED', insert_data_option='INSERT_ROWS',
                                  table_range="A:Z")

            return JsonResponse({'message': 'Data updated successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)









    
@csrf_exempt
def update_spreadsheet_executive_resubmission(request):
    if request.method == 'POST':
        try:
            emailFieldExecutive = request.POST.get('emailfieldexecutive', "")
            exec_name = request.POST.get('fieldexecutivename', "") 
            partnerId = request.POST.get('partner_id', "")   
            partner_name = request.POST.get('partnername', "")
            panNumber = request.POST.get('pannumber', "")
            pancard_copy_front = request.FILES.get('pancardcopy1', None)
            aadhar_number = request.POST.get('adharnumber', "")
            aadhar_copy_1 = request.FILES.get('aadharcopy1', None)
            aadhar_copy_2 = request.FILES.get('aadharcopy2', None)
            dl_number = request.POST.get('dlnumber', "")
            dl_copy = request.FILES.get('dlcopy1', None)
            vehicle_number = request.POST.get('vehiclenumber', "")
            vehicle_copy = request.FILES.get('vehiclecopy1', None)
            account_number = request.POST.get('account', "")
            bank_copy = request.FILES.get('accountcopy1', None)
            rc_number = request.POST.get('rc', "")
            rc_photo = request.FILES.get('rc_photo', None)
            partner_number = request.POST.get('partnerMobilenumber', "")
            insur_copy = request.FILES.get('insurcopy1', None)
            profile_photo = request.FILES.get('profilePhoto', None)

            # Assuming you have defined save_and_get_url function correctly
            pancard_copy_front_url = save_and_get_url(pancard_copy_front, folder_id) if pancard_copy_front else ""
            aadhar_copy_1_url = save_and_get_url(aadhar_copy_1, folder_id) if aadhar_copy_1 else ""
            aadhar_copy_2_url = save_and_get_url(aadhar_copy_2, folder_id) if aadhar_copy_1 else ""
            dl_copy_url = save_and_get_url(dl_copy, folder_id) if dl_copy else ""
            vehicle_copy_url = save_and_get_url(vehicle_copy, folder_id) if vehicle_copy else ""
            bank_copy_url = save_and_get_url(bank_copy, folder_id) if bank_copy else ""
            rc_photo_url = save_and_get_url(rc_photo, folder_id) if rc_photo else ""
            insur_copy_url = save_and_get_url(insur_copy, folder_id) if insur_copy else ""
            profile_photo_url = save_and_get_url(profile_photo, folder_id) if profile_photo else ""

            # Authenticate with Google Sheets API
            scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
            credentials_file = os.path.join(BASE_DIR, 'credential', 'key.json')
            credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_file, scope)
            client = gspread.authorize(credentials)
            spreadsheet = client.open('Test sheet')  
            worksheet = spreadsheet.get_worksheet(4)  

            worksheet_6 = spreadsheet.get_worksheet(6)
            column_values = worksheet_6.col_values(7)  
            row_index = column_values.index(emailFieldExecutive) + 1  
            exec_name = worksheet_6.cell(row_index, 8).value  

            worksheet_5 = spreadsheet.get_worksheet(5)
            column_values = worksheet_5.col_values(4)  
            row_index = column_values.index(partnerId) + 1  
            partner_name = worksheet_5.cell(row_index, 5).value  

            indian_timezone = pytz.timezone('Asia/Kolkata')
            indian_time_now = datetime.now(indian_timezone)
            today = indian_time_now.strftime("%d-%m-%Y-%A")
            current_time = indian_time_now.strftime("%I:%M:%S %p")

            column_values = worksheet.col_values(1)
            row_count = len(column_values)
            if row_count > 0:
                row_count -= 1
            row_count += 1

            row = [row_count, today, current_time, '', '',emailFieldExecutive, exec_name, partnerId, partner_name, panNumber, pancard_copy_front_url, aadhar_number, aadhar_copy_1_url,aadhar_copy_2_url, dl_number, dl_copy_url, vehicle_number, vehicle_copy_url, account_number, bank_copy_url, rc_number,rc_photo_url, partner_number, insur_copy_url, profile_photo_url]

            worksheet.append_row(row, value_input_option='USER_ENTERED', insert_data_option='INSERT_ROWS',
                                  table_range="A:Z")

            return JsonResponse({'message': 'Data updated successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405) 

   








from django.shortcuts import render
def home(request):
    return render(request, 'index.html')

def vendor_vehicle_registration_form(request):
    return render(request, 'vendor_vehicle_registration_form.html')

def field_executive_vehicle_registration_form(request):
    return render(request, 'field_executive_vehicle_registration_form.html')

def vehicle_testing_tool(request):
    return render(request, 'vehicle_testing_tool.html')

def vendor_registration_form(request):
    return render(request, 'vendor_registration_form.html')

def user_registration_form(request):
    return render(request, 'user_registration_form.html')

def executive_registration_form(request):
    return render(request, 'executive_registration_form.html')

def vendor_resubmission(request):
    return render(request, 'vendor_resubmission.html')

def executive_resubmission(request):
    return render(request, 'executive_resubmission.html')

def csrf_failure_view(request, reason=""):
    return render(request, 'csrf_failure.html', {'reason': reason})


