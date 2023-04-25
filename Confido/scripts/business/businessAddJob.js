import axios from 'axios';

const updateBusinessDetails = async (err) => {
    if (err.preventDefault) err.preventDefault();

    const userId = localStorage.getItem('userId');
    const position = document.getElementById('position');
    const description = document.getElementById('positionDescription');
    const requirements = document.getElementById('requirements');
    const checkpoints = document.getElementById('checkpointList').getElementsByTagName("li");

    let cleanCheckpoints = [];
    for(let index = 0; index < checkpoints.length; index++) {
        cleanCheckpoints.push(checkpoints[index].innerText);
    }

    if(userId) {
        await axios
          .post(`http://18.158.46.58:5000/job/create`, {
            user: userId,
            name: position.value,
            description: description.value,
            requirements: requirements.value,
            dailyCheckpoints: cleanCheckpoints,
          })
          .then(() => {
            window.location.href = "/candidates.html"; // TODO: Redirect to listing.
          })
          .catch((err) => {
            console.error(err);
          });
    } else {
        window.location.href = '/';
    }

    return false;
};

// TODO remove async
window.onload = async () => {
    const businessDetailsForm = document.getElementById('businessAddJob');

    if (businessDetailsForm.attachEvent) {
        businessDetailsForm.attachEvent("submit", updateBusinessDetails);
    } else {
        businessDetailsForm.addEventListener("submit",  updateBusinessDetails, false);
    }
};