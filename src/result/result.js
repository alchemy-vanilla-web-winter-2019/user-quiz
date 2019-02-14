const userProfileString = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(userProfileString);

const userNameDisplay = document.getElementById('user-name-display');
userNameDisplay.textContent = userProfile.name;
userNameDisplay.classList.add(userProfile.color);

const resultSpan = document.getElementById('result');
resultSpan.textContent = userProfile.result;
resultSpan.classList.add(userProfile.color);

const dmImagePath = {
    colville: 'user-quiz/assets/DMs/colville.jpg',
    mercer: 'user-quiz/assets/DMs/mercer.jpg',
    perkins: 'user-quiz/assets/DMs/perkins.jpg'
};

const dmNames = (userProfile.result).split(' ');
const lowerCaseLastName = dmNames[1].toLowerCase();

const imageSection = document.getElementById('image-section');
const dmImage = document.createElement('img');
dmImage.src = dmImagePath[lowerCaseLastName];
dmImage.alt = `picture of ${userProfile.result}`;
imageSection.appendChild(dmImage);