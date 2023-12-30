/*---------------------services modal--------------------- */
const modal = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')
    
let activeModel = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModel(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})