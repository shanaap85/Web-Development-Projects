let nam = document.getElementById("name");
let ema = document.getElementById("email");
let namErr = document.getElementById("nameErrMsg");
let emaErr = document.getElementById("emailErrMsg");

nam.addEventListener("blur", function() {
    if (nam.value === "") {
        namErr.textContent = "Required*";
    } else {
        namErr.textContent = "";
    }
})
ema.addEventListener("blur", function() {
    if (ema.value === "") {
        emaErr.textContent = "Required*";
    } else {
        emaErr.textContent = "";
    }
})
