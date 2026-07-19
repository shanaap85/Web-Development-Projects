let newp = document.getElementById("newPassword");
let conp = document.getElementById("confirmPassword");
let neP = document.getElementById("newPasswordErrMsg");
let coP = document.getElementById("confirmPasswordErrMsg");
let button = document.getElementById("updateBtn");
newp.addEventListener("blur", function() {
    if (newp.value === "") {
        neP.textContent = "Required*";
    } else {
        neP.textContent = "";
    }
});
conp.addEventListener("blur", function() {
    if (conp.value === "") {
        coP.textContent = "Required*";
    } else {
        coP.textContent = "";
    }
});
button.addEventListener("click", function(event) {
    event.preventDefault();
    if (newp.value === "") {
        neP.textContent = "Required*";
    } else {
        neP.textContent = "";
    }
    if (conp.value === "") {
        coP.textContent = "Required*";
    } else if (conp.value !== newp.value) {
        coP.textContent = "Passwords must be same";
    } else {
        coP.textContent = "";
    }
})
