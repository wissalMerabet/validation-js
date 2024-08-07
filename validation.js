let loginInput = document.querySelector("[name='login']");
let passwordInput = document.querySelector("[name='password']");
let emailInput = document.querySelector("[name='email']");
let numberInput = document.querySelector("[name='numéro']");
let adresseInput = document.querySelector("[name='adresse']");
let codeInput = document.querySelector("[name='code']");
let villeInput = document.querySelector("[name='ville']");


let in1 = document.querySelector(".login");
let in2 = document.querySelector(".password");
let in3 = document.querySelector(".email");
let in4 = document.querySelector(".numéro");
let in5 = document.querySelector(".adresse");
let in6 = document.querySelector(".code");
let in7 = document.querySelector(".ville");


let emailReg = /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})$/ ;
let numberReg = /^\d{10}$/;


function cleanPhoneNumber(phoneNumber) {
    // Remove spaces
    phoneNumber = phoneNumber.replace(/\s/g, '');
 
    // Remove parentheses and dashes
    phoneNumber = phoneNumber.replace(/[-()]/g, '');
 
    return phoneNumber;
}

function test1(){
    if(loginInput.value =="" ){
        alert('login et vide ');
    }else{
        if(loginInput.value.length < 5 || loginInput.value.length >= 15){
            alert('vérifie votre login ');
            in1.style.backgroundColor = "yellow";
   
        }
    }
}

function test2(){
    if(passwordInput.value =="" ){
        alert('pass et vide');
    }else{
        if(passwordInput.value.length >15 || passwordInput.value.length <8 || !passwordInput.value.match(/^(?=.*[A-Za-z])(?=.*\d).+$/)){
            alert('vérifie votre passworde  ');
            in2.style.backgroundColor = "yellow";
            
        }
    }
    
}



function test3(){
    if(emailInput.value ==""){   
        alert(' Email est vide');
    
    }else{
        if(!emailInput.value.match(emailReg)){
            alert('Véréfier Votre email');
            in3.style.backgroundColor = "yellow";
            
        }

    }
}

function test4(){
    let cleanNumbre = cleanPhoneNumber(numberInput.value);
    if(cleanNumbre ==""){   
        alert(' number est vide');
    }else{
        if(!cleanNumbre.match(numberReg)){
           alert('Véréfier Votre number');
           in4.style.backgroundColor = "yellow";
           
           
        }
    }
}

function test5(){
    if(adresseInput.value ==""){   
        alert(' Adresse est vide');
        in5.style.backgroundColor = "yellow";
    }
}

function test6(){
    if(codeInput.value.length !== 5 || !codeInput.value.match(/^([\d]+)$/)){
        alert('Véréfier Votre code postal');
        in6.style.backgroundColor = "yellow";
    }
}

function test7(){
    if(villeInput.value ==""){   
        alert(' Ville est vide');
    }else{
        if(!villeInput.value.match(/^([a-z]+)$/)){
            alert('Véréfier Votre ville');
            in7.style.backgroundColor = "yellow";
        }
    }
}









document.forms[0].onsubmit = function(e){

    let loginValid = false;
    let passValid = false;
    let emailValid = false;
    let numbreValid = false;
    let adresseValid = false;
    let villeValid = false;

if(loginInput.value !=="" && loginInput.value.length >= 5 && loginInput.value.length <= 15){
    loginInput = true;
}else{   
    if(loginInput.value =="" ){
        alert('login et vide ');
    }else{
        if(loginInput.value.length < 5 || loginInput.value.length >= 15){
            alert('vérifie votre login ');
            in1.style.backgroundColor = "yellow";
           
        }
    }
}
/*
if(passwordInput.value !=="" && passwordInput.value.length <=15 && passwordInput.value.length >=8 && passwordInput.value.match(/^([a-z\d]+)$/)){
    passwordInput= true;
}else{
    if(passwordInput.value =="" ){
        alert('pass et vide');
    }else{
        if(passwordInput.value.length >15 || passwordInput.value.length <8 || ((!passwordInput.value.match(/^([a-z]+)$/)) || (!passwordInput.value.match(/^([\d]+)$/)))){
            alert('vérifie votre passworde  ');
            in2.style.backgroundColor = "yellow";
            
        }
    }
}*/
if(passwordInput.value !=="" && passwordInput.value.length <=15 && passwordInput.value.length >=8 && passwordInput.value.match(/^(?=.*[A-Za-z])(?=.*\d).+$/
)){
    passwordInput= true;
}else{
    if(passwordInput.value =="" ){
        alert('pass et vide');
    }else{
        if(passwordInput.value.length >15 || passwordInput.value.length <8 || !passwordInput.value.match(/^(?=.*[A-Za-z])(?=.*\d).+$/)){
            alert('vérifie votre passworde  ');
            in2.style.backgroundColor = "yellow";
            
        }
    }
}


if(emailInput.value !=="" && emailInput.value.match(emailReg)){
    emailValid = true;
}else{
    if(emailInput.value ==""){   
        alert(' Email est vide');
    
    }else{
        if(!emailInput.value.match(emailReg)){
            alert('Véréfier Votre email');
            in3.style.backgroundColor = "yellow";
            
        }

    }
}

let cleanNumbre = cleanPhoneNumber(numberInput.value);

if(cleanNumbre !=="" && cleanNumbre.match(numberReg)){
    numbreValid = true;
    
    
}else{
    if(cleanNumbre ==""){   
        alert(' number est vide');
    }else{
        if(!cleanNumbre.match(numberReg)){
           alert('Véréfier Votre number');
           in4.style.backgroundColor = "yellow";
           
           
        }
    }
}

if(adresseInput.value !==""){
    adresseValid = true;
    
}else{
    if(adresseInput.value ==""){   
        alert(' Adresse est vide');
        in5.style.backgroundColor = "yellow";
    }
}

if(codeInput.value !=="" && codeInput.value.length == 5 && codeInput.value.match(/^([\d]+)$/)){
    codeValid = true;
    
}else{
    if(codeInput.value ==""){   
        alert(' code postal est vide');
    
    }else{
        if(codeInput.value.length !== 5 || !codeInput.value.match(/^([\d]+)$/)){
            alert('Véréfier Votre code postal');
            in6.style.backgroundColor = "yellow";
        }
    }
}


if(villeInput.value !=="" &&  villeInput.value.match(/^([a-z]+)$/)){
    villeValid = true;
    
}else{
    if(villeInput.value ==""){   
        alert(' Ville est vide');
    }else{
        if(!villeInput.value.match(/^([a-z]+)$/)){
            alert('Véréfier Votre ville');
            in7.style.backgroundColor = "yellow";
        }
    }
}


 };
