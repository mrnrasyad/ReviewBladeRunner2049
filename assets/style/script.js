/* ketika layar media kurang dari 576px, maka navbar akan disembunyikan, fungsi javascript
disini adalah untuk memunculkan navbar kembali ketika menu-toggle di klik (garis 3), dengan 
menambah class slide pada ul */

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
})

