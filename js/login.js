//button a click korle ki hbe tar jonno comment...
document.getElementById('login-btn-click')
    .addEventListener('click',function(event){
        // browser reload problem solved
        event.preventDefault();
        //get the phone number;
        const phoneNumber= document.getElementById('phone-number')
        console.log(phoneNumber.value);
})