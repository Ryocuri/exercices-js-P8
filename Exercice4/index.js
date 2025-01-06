const button = document.getElementById('myButton');

const messageP = document.createElement('p');
document.body.appendChild(messageP);

button.addEventListener('click', () => {
    messageP.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});