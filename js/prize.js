const popup = document.getElementById('prize');
const openBtn = document.getElementById('prize-open');
const closeBtn = document.getElementById('popup-close')
function popupToggle() {
    popup.classList.toggle('hidden')
};

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;
