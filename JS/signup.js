var nameInput = document.getElementById("nameUser");
var emailInput = document.getElementById("emailUser");
var passwordInput = document.getElementById("passwordUser");
let textSuccess = document.querySelector('.text-success')
var users = [];

if (localStorage.getItem("usersList" !== null)) {
    users = JSON.parse(localStorage.getItem("usersList"));

};


function adduser() {
    user = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };

    var h = nameInput.value;
    var l = emailInput.value;
    var g = passwordInput.value;

    if (h.length === 0 || l.length === 0 || g.length === 0) {

        document.getElementById("redtext").innerHTML = "All inputs is required";
        textSuccess.classList.add("d-none");
        console.log("hee");
    } else if (repet() == false) {
        document.getElementById("redtext").innerHTML = "email is exists";
        textSuccess.classList.add("d-none");
    } else {
        users.push(user);
        localStorage.setItem("usersList", JSON.stringify(users));
        textSuccess.classList.remove("d-none");
        document.getElementById("greentext").innerHTML = "success";
    }







    
}


function clearform() {
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;
}
function repet() {
    for (i = 0; i < users.length; i++) {
        if (user.email === users[i].email) {

            return false;
        }
    }
}
document.getElementById('signin').addEventListener('click', function () {
    window.location = './index.html'
})