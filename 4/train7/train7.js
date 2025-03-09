    function isValid() {
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    //reset
    document.getElementById("userNameFix").innerText = "";
    document.getElementById("emailFix").innerText = "";
    document.getElementById("passwordFix").innerText = "";
    document.getElementById("confirmPasswordFix").innerText = "";


    //sharta
    let isValid = true;

    if (/\W/.test(userName.value) || userName.value.length < 8
     || /\d/.test(userName.value)) {
        isValid = false;
        let error = document.getElementById("userNameFix");

        if (/\W/.test(userName.value)) {
            error.innerText = "Should Not Contain Special Characters";
        }

        if (userName.value.length < 8) {
            error.innerText = "Must Have Over 8 Characters";
        }

        if (/\d/.test(userName.value)) {
            error.innerText = "Should Not Contain Numbers";
        }

        if (!userName.value) {
            error.innerText = "Please Fill This Field";
        }
    }

    if (!email.value||!email.value.includes('@')  ||!email.value.endsWith(".com")) {
        isValid = false;
        let error = document.getElementById("emailFix");

        if (!email.value.includes('@')) {
            error.innerText = "Must Contain @";
        }

        if (!email.value.endsWith(".com")) {
            error.innerText = "Must Contain .com";
        }
        
        
        if (!email.value) {
            error.innerText = "Please Fill This Field";
        }
    }

    if (password.value.length < 8 || !/\W/.test(password.value)
         || !/[a-z]/.test(password.value) || !/[A-Z]/.test(password.value)) {
        isValid = false;
        let error = document.getElementById("passwordFix");

        if (password.value.length < 8) {
            error.innerText = "Must Have Over 8 Characters";
        }

        if (!/\W/.test(password.value)) {
            error.innerText = "Must Contain Special Characters";
        }

        if (!/[a-z]/.test(password.value)) {
            error.innerText = "Must Contain Lowercase Letters";
        }

        if (!/[A-Z]/.test(password.value)) {
            error.innerText = "Must Contain Uppercase Letters";
        }

        if (!password.value) {
            error.innerText = "Please Fill This Field";
        }

    }

    if (!confirmPassword.value || password.value != confirmPassword.value) {
        isValid = false;
        let error = document.getElementById("confirmPasswordFix");

        if (password.value != confirmPassword.value) {
            error.innerText = "Password Must Match";
        }
        
        if (!confirmPassword.value) {
            error.innerText = "Please Fill This Field";
        }
    }

    if (isValid) {
        document.body.innerHTML = "<h1 style='font-size: 100px; text-align: center;'>SUCCESS</h1>";
    }
}