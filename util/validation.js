function checkValidation(){

    let isValid = document.getElementById('registerForm').checkValidity();
    if(!isValid){
        // Email
        let inpEmail = document.getElementById('email');
        let errEmail = document.getElementById('errEmail');

        if(inpEmail.validity.valueMissing){
            errEmail.innerHTML = 'Please fill out your email'
        } else if(inpEmail.validity.patternMismatch){
            errEmail.innerHTML = 'Email is not in the correct format'
        } else{
            errEmail.innerHTML = ''
        }

        // Name
        let inpName = document.getElementById('name');
        let errName = document.getElementById('errName');

        if(inpName.validity.valueMissing){
            errName.innerHTML = 'Please fill out your name'
        } else if(inpName.validity.patternMismatch){
            errName.innerHTML = 'Name is not in the correct format'
        } else{
            errName.innerHTML = ''
        }

        // Password
        let inpPassword = document.getElementById('password');
        let errPassword = document.getElementById('errPassword');

        if(inpPassword.validity.valueMissing){
            errPassword.innerHTML = 'Please fill out your password'
        } else if(inpPassword.validity.patternMismatch){
            errPassword.innerHTML = 'Password is not in the correct format'
        } else{
            errPassword.innerHTML = ''
        }

        // Phone
        let inpPhone = document.getElementById('phone');
        let errPhone = document.getElementById('errPhone');

        if(inpPhone.validity.valueMissing){
            errPhone.innerHTML = 'Please fill out your phone number'
        } else if(inpPhone.validity.patternMismatch){
            errPhone.innerHTML = 'Phone number is not in the correct format'
        } else{
            errPhone.innerHTML = ''
        }

        // Password confirm
        let inpPwdConfirm = document.getElementById('pass-confirm');
        let errPassConfirm = document.getElementById('errPassConfirm');

        if(inpPwdConfirm.validity.valueMissing){
            errPassConfirm.innerHTML = 'Please confirm your password'
        } else if(inpPwdConfirm.value !== inpPassword.value){
            errPassConfirm.innerHTML = 'Password confirm Không chính xác'
        } else{
            errPassConfirm.innerHTML = ''
        }
    } 
    else{
        return isValid;
    }
}