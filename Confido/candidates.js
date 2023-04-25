import axios from 'axios';

const userCard = (userName, userId) => `
        <div class="__box">
            <img class="__img" src="img/Placeholder.png">
            <div class="__info">
                <h3 class="__name">${userName}</h3>
                <a class="button" href="/profile-page-bus.html?userId=${userId}">
                    <div class="button-container">
                        <p class="__view-profile">View Profile</p>
                    </div>
                </a>
            </div>
        </div>`;

const fetchAllEmployees = async () => {
    const userList = document.getElementById('user-list');

    axios.get(`http://18.158.46.58:5000/user/employees`).then((res) => {
        const users = res.data;

        for(const user of users) {
            userList.innerHTML += userCard(user.name, user.id);
        }
    }).catch((err) => {
        console.error(err);
    });
};

window.onload = () => {
    fetchAllEmployees();
};