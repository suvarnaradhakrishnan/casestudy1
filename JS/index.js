const form = document.getElementsByTagName('form')[0];
let uname = document.getElementById("exampleInputUname1");
let pwd = document.getElementById("exampleInputPassword1");
let errormsg = document.getElementById("errormsg");

function login(uname,pwd,callback){
    const uname1 = "admin";
    const pwd1 = "12345";
    if(uname.value === uname1 && pwd.value === pwd1){
        callback();
        return true;
    }
    else{
        errormsg.innerHTML = "Invalid username or password";
        uname.value = "";
        pwd.value = "";
        return false;
    }
}

function redirect(){
     form.action = "main.html";
}

form.addEventListener('submit',function(event){
    if(!login(uname,pwd,redirect)){
        event.preventDefault();
    }
});