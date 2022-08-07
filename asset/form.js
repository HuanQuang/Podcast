
function Validator (options){
    var formElement = document.querySelector(options.form);
    function getParent(element, selector){
        while (element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement;
        }
    }
    function Validate(inputElement, rule){
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value);
            if(errorMessage){
                errorElement.innerHTML = errorMessage;
                getParent(inputElement, options.formGroupSelector).classList.add('invalid');
           }
           else {
                errorElement.innerHTML = ``;
                getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
           } 
    };
    
    if (formElement) {
        
        // Lặp qua mỗi rules và lắng nghe sự kiện
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            var inputPassword = getParent(inputElement, options.formGroupSelector).querySelector('#password');
            var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
            if (inputElement){
                inputElement.onblur = function(){
                    Validate(inputElement, rule);                   
                }
                inputElement.oninput = function(){
                    errorElement.innerHTML = ``;
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            };
            if(inputPassword){
                inputPassword.oninput = function(){
                    errorElement.innerHTML = ``;
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }               
            };
            formElement.onsubmit = function(e){
                e.preventDefault(); 
                options.rules.forEach(function(rule){
                    var inputElement = formElement.querySelector(rule.selector);
                    Validate(inputElement, rule);  
                });
                // hàm kiểm tra lỗi, nếu không có thì gửi về data
                    var data = [];
                    var hasError = document.querySelectorAll('.invalid');
                    var getInput = document.querySelectorAll('.input--form');
                    if (hasError.length === 0){
                        for (var i = 0; i < getInput.length; i++){
                            data.push`${getInput[i].id}: ${getInput[i].value}`
                            console.log(data) ;

                        }
                    }
                    else {
                        console.log('Vui lòng kiểm tra lại dữ liệu nhập !!')
  
                    }
                    options.onsubmit(data)
                }
        })

    }
};
Validator.isRequired = function (selector, message){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined: message || 'Vui lòng nhập trường này'
        }
    }
};
Validator.isEmail = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.trim() === ``){
                return "Vui lòng nhập email"
            }
            else{
            return regex.test(value) ? undefined : message || "Email không hợp lệ !"
            }
        }
    }
};
Validator.isPassword = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var regexPass = /^[A-Za-z]\w{7,14}$/;
            if (value === ``){
                return "Vui lòng nhập mật khẩu"
            }
            else {
                return regexPass.test(value) ? undefined : message || " a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
            }
        }
    }
}
Validator.isrePassword = function(selector, getoldPassword, message){
    return {
        selector: selector,
        test: function(value){
            if (value === ``){
                return 'Vui lòng nhập trường này'
            }
            else{
                return value === getoldPassword() ? undefined: message || "Mật khẩu không trùng khớp"
            } 
        }
    }
}