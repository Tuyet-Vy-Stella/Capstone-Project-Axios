document.getElementById('btnSubmit').onclick = function(){
    checkValidation();
    
}

function api(){
    let promise = axios({
        url:'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        data:{
            "email": "",
            "password": "",
            "name": "",
            "gender": true,
            "phone": ""
        }
    })

    promise.then(function(result){
        console.log(result.data.content);
    })
}