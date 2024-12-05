
var emailInput = document.getElementById("emailUser");
var passwordInput = document.getElementById("passwordUser");



users = JSON.parse(localStorage.getItem('usersList'));
console.log(users);





function welcomeUser() {
    noInput()
    console.log("hello")
    console.log(users.length);
    for (var i = 0; i < users.length; i++) {
        console.log(emailInput.value)
        console.log(users[i].email)
        if (users[i].email.toLowerCase() == emailInput.value.toLowerCase() && users[i].password.toLowerCase() == passwordInput.value.toLowerCase()) {
            localStorage.setItem("sessionName", users[i].name);
            window.location = './welcom.html';

            console.log("he")
            
        }
        else{
            document.getElementById('redtext').innerHTML = 'incorrect email or password'

        }

    }
}

function noInput() {

    if (emailInput.value === "" || passwordInput.value === "") {
        document.getElementById('redtext').innerHTML = 'All inputs is required'

    }
}





