import storeLocalStorage from './useful/store-local-storage.js';

makeIcons();

// Submit form
const indexFormEl = document.getElementById('index-form');
indexFormEl.addEventListener('submit', function(event) {
    event.preventDefault();

    const profileObj = makeProfileObj(indexFormEl);
    storeLocalStorage('profile', profileObj);
    
    window.location = 'quiz.html';
});

// Makes radio buttons of avatar icons
function makeIcons() {
    const rolesArr = [
        'assassin',
        'fighter',
        'mage',
        'marksman',
        'support',
        'tank'
    ];

    rolesArr.forEach(function(item) {
        const chooseAvatar = document.getElementById('choose-avatar');

        const label = document.createElement('label');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'avatar';
        input.value = item;

        const img = document.createElement('img');
        img.src = './assets/' + item + '-icon.png';

        label.appendChild(input);
        label.appendChild(img);

        chooseAvatar.appendChild(label);
    });
}

function makeProfileObj(indexFormEl) {
    const formDaddy = new FormData(indexFormEl);
    const profileObj = {
        name: formDaddy.get('name'),
        avatar: formDaddy.get('avatar')
    };
    return profileObj;
}