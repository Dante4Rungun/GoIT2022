(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),

    openModalBtnHeader: document.querySelector("[header-modal-open]"),
    closeModalBtnHeader: document.querySelector("[header-modal-close]"),
    modalHeader: document.querySelector("[header-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.openModalBtnHeader.addEventListener("click", toggleModalHeader);
  refs.closeModalBtnHeader.addEventListener("click", toggleModalHeader);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleModalHeader() {
    refs.modalHeader.classList.toggle("is-hidden");
  }
})();