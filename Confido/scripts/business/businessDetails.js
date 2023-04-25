import axios from 'axios';

const updateBusinessDetails = async (err) => {
    if (err.preventDefault) err.preventDefault();

    const description = document.getElementById('userDescription');
    const businessVideo = document.getElementById('businessVideo');

    const userId = localStorage.getItem('userId');
    const user = (await axios.get(`http://18.158.46.58:5000/user/${userId}`))
      .data;

    if(user && user.accountType === 'business') {
        // Create user if one doesnt exist with the same email
        await axios
          .put(`http://18.158.46.58:5000/user/${userId}/update`, {
            description: description.value,
          })
          .then(() => {
            window.location.href = "/business-guide.html";
          })
          .catch((err) => {
            console.error(err);
          });
    }

    return false;
};

window.onload = () => {
    const businessDetailsForm = document.getElementById('businessInformation');

    if (businessDetailsForm.attachEvent) {
        businessDetailsForm.attachEvent("submit", updateBusinessDetails);
    } else {
        businessDetailsForm.addEventListener("submit",  updateBusinessDetails, false);
    }
};