document.getElementById('btnSubmit').onclick = function(){

    // Input
    checkValidation();
    
    let user = new Users();

    user.email = document.getElementById('email').value; 
    user.password = document.getElementById('password').value; 
    user.name = document.getElementById('name').value;
    user.gender = JSON.parse(document.querySelector('input[name="gender"]:checked').value);
    user.phone = document.getElementById('phone').value;

    // Output
    let message = '';
    
    // Call api
    let promise = axios({
        url:'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        data: user
    });

    promise.then(function(result){
        console.log(result.data.content);
        message = 'Đăng ký tài khoản thành công!';
        alert(message);
    })

    promise.catch(function(err){
        console.log(err);
        message = 'Email đã được sử dụng!';
        alert(message);
    });
}
