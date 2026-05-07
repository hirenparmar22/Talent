function loadAndOpenModal() {
    var placeholder = document.getElementById('modal-placeholder');

    if (placeholder.innerHTML === "") {
        fetch('login.html')
            .then(response => response.text())
            .then(data => {
                placeholder.innerHTML = data;
                openModal();
            });
    } else {
        openModal(); 
    }
}

function openModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeLoginModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function (event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
        closeLoginModal();
    }
}
