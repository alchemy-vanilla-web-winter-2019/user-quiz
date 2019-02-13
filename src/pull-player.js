function pullPlayer() {
  const nameSpace = document.getElementById('name');

  const nameJson = window.localStorage.getItem('player');
  const player = JSON.parse(nameJson);
  nameSpace.textContent = player.name;
}
export default pullPlayer;