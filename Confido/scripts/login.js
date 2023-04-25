import axios from 'axios';

const login = async (err) => {
    if (err.preventDefault) err.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const formErrorMessage = document.getElementById('message');

    axios
      .post(`http://18.158.46.58:5000/user/login`, {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        const { id, accountType } = res.data;
        let redirectLocation = "";

        localStorage.setItem("userId", id);
        if (accountType === "employee") {
          redirectLocation = "employee-guide.html";
        } else {
          redirectLocation = "business-guide.html";
        }
        window.location.href = redirectLocation;
      })
      .catch((err) => {
        console.error(err);
        formErrorMessage.style.display = "block";
      });
    return false;
};



const loginForm = document.getElementById('login');

if (loginForm.attachEvent) {
    loginForm.attachEvent("submit", login);
} else {
    loginForm.addEventListener("submit", login, false);
}