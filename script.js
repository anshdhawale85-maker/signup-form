let email = document.getElementById("emaill");
let pass = document.getElementById("pass");
let emailstatus = document.getElementById("emailststus");
let passstatus = document.getElementById("passststus");
let formsub = document.getElementById("formsub");

email.onchange = function() {
    let val = email.value;

    if(val.length > 3 && val.includes("@") && val.includes(".")) {
        emailstatus.textContent = "All good to go."
        emailstatus.className = "success"
    } else {
        emailstatus.textContent = "Make sure email is more than 3 characters and has @ and ."
        emailstatus.className = "error"
    }
};


pass.onchange = function() {
    let val = pass.value;

    if(val.length > 8 ) {
        passstatus.textContent = "All good to go."
        passstatus.className = "success"
    } else {
        passstatus.textContent = "Make sure password is more than 8 characters."
        passstatus.className = "error"
    }
};


formsub.onsubmit = function (e) {
    e.preventDefault();

    if(emailstatus.className === "success" && passstatus.className === "success") {
        
        let conform = confirm("Are you ure you want to submit")

    if(conform) {
        alert("Successful signup!")
    } else {
         email.value = "";
         pass.value = "";
         emailstatus.textContent = "";
         passstatus.textContent = ""
    }

    } else {
        alert("Please fix the error!")
    }

};
