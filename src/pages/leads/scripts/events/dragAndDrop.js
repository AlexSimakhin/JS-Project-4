import { api } from '../api';

const tasksDnD = document.querySelectorAll('.task.task__dnd');

const closeAppliedToMoveBlock = () => {
  tasksDnD.forEach(item => {
    item.classList.remove('show');
  });
};

export const dragAndDrop = () => {
  let dragged;

  document.addEventListener('dragstart', ( event ) => {
    dragged = event.target.closest('.task');
    let target = event.target.closest('img');

    if (target) {
      event.preventDefault();
      return;
    };

    if (dragged === null || target === null) return;

    event.target.style.opacity = .5;
  }, false);

  document.addEventListener('dragend', function( event ) {
    event.target.style.opacity = '';
    closeAppliedToMoveBlock();
  }, false);

  document.addEventListener('dragover', ( event ) => {
    event.preventDefault();
  }, false);

  document.addEventListener('dragenter', (event) => {
    let target = event.target.closest('.tasks__column');
    
    if (!target) return;
    if (dragged === null || target === null) return;

    tasksDnD.forEach(item => {
      if (item.dataset.id === target.dataset.id) {
        if (target.dataset.id === dragged.parentNode.dataset.id) return;
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  }, false);

  document.addEventListener('drop', async ( event ) => {
    event.preventDefault();

    let target = event.target.closest('.task__dnd');
    if (!target) return;
    if (dragged === null || target === null) return;

    if (dragged.parentNode.dataset.id === target.dataset.id) {
      closeAppliedToMoveBlock();
      return;
    };

    let hash;
    let movedLead = {};

    // dragged.parentNode.removeChild( dragged ); // реализация без отправки на сервер, добавляет сделку вверх
    // target.parentNode.insertBefore( dragged, target.nextSibling);
    if (target.dataset.id === 'new') {
      hash = dragged.dataset.hash;
      movedLead.title = dragged.dataset.title;
      movedLead.amount = +dragged.dataset.amount;
      movedLead.pipeline = 'new';
      movedLead.status = dragged.dataset.status;
      movedLead.deadline = dragged.dataset.deadline;
    }

    if (target.dataset.id === 'inProgress') {
      hash = dragged.dataset.hash;
      movedLead.title = dragged.dataset.title;
      movedLead.amount = +dragged.dataset.amount;
      movedLead.pipeline = 'inProgress';
      movedLead.status = dragged.dataset.status;
      movedLead.deadline = dragged.dataset.deadline;
    }

    if (target.dataset.id === 'done') {
      hash = dragged.dataset.hash;
      movedLead.title = dragged.dataset.title;
      movedLead.amount = +dragged.dataset.amount;
      movedLead.pipeline = 'done';
      movedLead.status = dragged.dataset.status;
      movedLead.deadline = dragged.dataset.deadline;
    }

    closeAppliedToMoveBlock();

    await api.putLead.fetch(movedLead, hash);
    await api.getLeads.fetch();
  }, false);
};