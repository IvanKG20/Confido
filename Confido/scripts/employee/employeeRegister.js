import axios from 'axios';

const registerEmployee = async (err) => {
    if (err.preventDefault) err.preventDefault();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const formErrorMessage = document.getElementById('message');


    email.className = email.className.replace(" error", "");
    password.className = password.className.replace(" error", "");
    confirmPassword.className = confirmPassword.className.replace(" error", "");

    if (password.value === confirmPassword.value) {
        const userExists = (
          await axios.get(
            `http://18.158.46.58:5000/user/emailInUse/${email.value}`
          )
        ).data;

        if (!userExists) {
            // Create user if one doesnt exist with the same email
            await axios
              .post("http://18.158.46.58:5000/user/create", {
                name: fullName.value,
                email: email.value,
                password: password.value,
              })
              .then((res) => {
                localStorage.setItem("userId", res.data.userId);
                window.location.href = "/employee/userDetails.html";
              })
              .catch((err) => {
                console.error(err);
              });
        } else {
            // Validation error if email is in use
            formErrorMessage.style.color = 'red';
            email.className += " error";

            formErrorMessage.innerHTML = 'Email already in use!';
        }
    } else {
        // Validation error if passwords dont match
        formErrorMessage.style.color = 'red';
        password.className += " error";
        confirmPassword.className += " error";

        formErrorMessage.innerHTML = 'Passwords do not match!';
        password.value= '';
        confirmPassword.value = '';
    }

    return false;
};

window.onload = () => {
    const registerForm = document.getElementById('registerForm');

    if (registerForm.attachEvent) {
        registerForm.attachEvent("submit", registerEmployee);
    } else {
        registerForm.addEventListener("submit", registerEmployee, false);
    }
};