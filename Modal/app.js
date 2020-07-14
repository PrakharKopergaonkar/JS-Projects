// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modal_btn = document.getElementsByClassName('btn modal-btn')[0];
const modal_overlay = document.getElementsByClassName('modal-overlay')[0];
const close_btn = document.getElementsByClassName('close-btn')[0];

modal_btn.addEventListener('click',function() {
    modal_overlay.classList.add('open-modal')
})

close_btn.addEventListener('click',function() {
    modal_overlay.classList.remove('open-modal')
})
