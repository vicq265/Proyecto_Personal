const btnTop = document.querySelector('.open-right-area')
const accordion = document.querySelectorAll('.contentBx')


let menuToggleTop = document.querySelector('.open-right-area');

menuToggleTop.addEventListener('click', () =>{
        const menuTop = document.querySelector('.menu-top')

        menuTop.classList.toggle('active')
        menuToggleTop.classList.toggle('active')
    });


function dropMenu() {
	const menuDrop = document.querySelector('.dropMenu')
	
	menuDrop.classList.toggle('active')
}

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.closeModal');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}