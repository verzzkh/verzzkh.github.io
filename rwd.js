// Fungsi untuk menampilkan popup
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Panggil fungsi showPopup saat tombol "Tampilkan Popup" diklik
document.getElementById('show-popup-button').addEventListener('click', showPopup);

// Panggil fungsi hidePopup saat tombol close di klik
document.getElementById('close-popup-button').addEventListener('click', hidePopup);
