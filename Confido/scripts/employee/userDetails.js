import axios from 'axios';

const updateUserDetails = async (err) => {
    if (err.preventDefault) err.preventDefault();

    const description = document.getElementById('userDescription');
    const position = document.getElementById('position');
    const education = document.getElementById('education');
    const location = document.getElementById('location');

    const userId = localStorage.getItem('userId');
    const user = (await axios.get(`http://18.158.46.58:5000/user/${userId}`))
      .data;

    if(user && user.accountType === 'employee') {
        // Create user if one doesnt exist with the same email
        await axios
          .put(`http://18.158.46.58:5000/user/${userId}/update`, {
            description: description.value,
            position: position.value,
            education: education.value,
            address: location.value,
          })
          .then(() => {
            window.location.href = "/employee-guide.html"; 
          })
          .catch((err) => {
            console.error(err);
          });
    }

    return false;
};

window.onload = () => {
    const userDetailsForm = document.getElementById('userInformation');

    if (userDetailsForm.attachEvent) {
        userDetailsForm.attachEvent("submit", updateUserDetails);
    } else {
        userDetailsForm.addEventListener("submit", updateUserDetails, false);
    }
};