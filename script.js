let signUp = document.querySelector("#signUp");
let userName = document.querySelector("#name");
let sureName = document.querySelector("#surename");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

signUp.addEventListener("submit",function(e){
    e.preventDefault();
    let emailRegEx = /^[a-z0-9]{10,50}@gmail.com/;
    let emailVal = signUp.email.value;
    document.querySelector("#names").textContent = signUp.username.value
    if(emailRegEx.test(emailVal)){
        document.querySelector("#emails").innerHTML = signUp.email.value
    }
    else{
        alert('Siz kiritgan emailda xatolik bor')
        email.style.border = '3px solid red'
    }
    let passRegEx = /^[a-z0-9]{5,10}/
    if(passRegEx.test(signUp.password.value)){
        document.querySelector("#passwords").textContent = signUp.password.value
        
    }
    else{
        alert('Parolinngiz 5 tadan 10 tagacha kichik harflar va raqamlar orasida bolishi lozim')
        password.style.border = '3px solid red'
    }
    if(emailRegEx.test(emailVal) && passRegEx.test(signUp.password.value)){
        let text = confirm("Oynani ochish")
        if(text){
            document.querySelector(".about").style.display = 'block';
            document.querySelector(".input-forms").style.display = 'none'
        }
    }
})