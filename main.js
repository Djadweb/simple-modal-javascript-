var modalBtn = document.getElementById('modalBtn');

var modal = document.getElementById('simpleModal');

var closeBtn = document.getElementById('closeBtn');





modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);


//open modal function
function openModal() {
    modal.style.display = 'block';
}

//close modal function
function closeModal() {
    modal.style.display = 'none';
}

//outside click close modal function
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
    
}
