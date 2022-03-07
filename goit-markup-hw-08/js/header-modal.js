(() => {
    const refs = {
      openModalBtnHeader: document.querySelector("[header-modal-open]"),
      closeModalBtnHeader: document.querySelector("[header-modal-close]"),
      modalHeader: document.querySelector("[header-modal]"),
    };
  
    refs.openModalBtnHeader.addEventListener("click", toggleModalHeader);
    refs.closeModalBtnHeader.addEventListener("click", toggleModalHeader);
  
    function toggleModalHeader() {
      refs.modalHeader.classList.toggle("is-hidden");
    }
  })();