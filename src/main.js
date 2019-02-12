const formProfile = document.getElementById('form-profile');

formProfile.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(formProfile);

  const player = {
    name: formData.get('name')
  };

  const json = JSON.stringify(player);
  window.localStorage.setItem('player', json);

  window.location = '../questions.html';
});