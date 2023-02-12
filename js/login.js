//step-1 add event handler with btn submit
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    
    if(userEmail === 'sontan@baap.com' && password === 'secret'){
        location.href= 'bank.html'
    }
    else{
        console.log('invalid user');
    }
})