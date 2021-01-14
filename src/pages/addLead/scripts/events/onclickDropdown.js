import { onclickSubmitForm } from '../events/onclickSubmitForm';

const droplistArray = document.querySelectorAll('.dropdown');
const cancelBtn = document.getElementById('cancelBtn');

export const onclickDropdown = () => {
  formCreateLead.onclick = (e) => {
    e.preventDefault();
    let target = e.target.closest('.dropdown');
    if (!target) return;

    let targetInput = target.querySelector('input');

    if (!target.classList.contains('open')) {
      target.classList.add('open');
      targetInput.focus();
    } else {
      target.classList.remove('open');
      targetInput.blur();
    }

    toggleClassFilled();
  };

  document.body.onclick = (e) => {
    let target = e.target;
    
    if (target.type === 'submit') {
      onclickSubmitForm();
    } else if (target === cancelBtn) {
      let choose = confirm('Вы уверены?');
      !!choose ? document.location.href = 'leads.html' : false;
    } else {
      target = target.closest('.dropdown');
      if (target) return;

      droplistArray.forEach(item => {
        if (item.classList.contains('open')) {
          item.classList.remove('open');
        }
      });

      toggleClassFilled();
    }
  };
};

const toggleClassFilled = () => {
  if (dealName.value.length >= 1) {
    dealName.classList.add('filled');
  } else {
    dealName.classList.remove('filled');
  }

  if (dealCost.value.length >= 1) {
    dealCost.classList.add('filled');
  } else {
    dealCost.classList.remove('filled');
  }
};