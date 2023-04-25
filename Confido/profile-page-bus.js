
import axios from 'axios';

const fetchUserById = async () => {
    const params = new URLSearchParams(document.location.search);
    const userId = params.get('userId');

    const name = document.getElementById('UserName');
    const email = document.getElementById('Email');
    const position = document.getElementById('Position');
    const education = document.getElementById('Education');
    const location = document.getElementById('Location');
    const description = document.getElementById('Description');

    axios.get(`http://18.158.46.58:5000/user/${userId}`).then((res) => {
        const user = res.data;

        name.innerHTML = user.name; 
        email.innerHTML = user.email;
        position.innerHTML = user.position;
        education.innerHTML = user.education;
        location.innerHTML = user.address;
        description.innerHTML = user.description;
    }).catch((err) => {
        console.error(err);
    });
};

window.onload = () => {
    fetchUserById();
};
