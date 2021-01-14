import { formatDate } from '../../../common/index';
import { statusInfo } from './setStatus';

const userItemTemplate = (user) => {
  const { name, phone, status = 'active', created, activity, hash } = user;

  return (`
    <div class="contact__item">
        <label for=${hash} class="checkbox__custom">
            <input class="contactCheck" type="checkbox" id=${hash}>
            <span class="checkmark"></span>
        </label>
        <div class="contact__preview">
            <img class="contact__preview__img" src="img/icon/ava-empty.svg" alt="">
            <p class="contact__preview__name">${name}</p>
        </div>
        <a href="mailto:#" class="contact__item__mail">jed@ekekat.com</a>
        <a href="tel:#" class="contact__item__tel">${phone}</a>
        <p class="contact__item__start">${formatDate(created)}</p>
        <p class="contact__item__last-active">${formatDate(activity)}</p>
        <p class="contact__item__status ${statusInfo[status].color}">${statusInfo[status].title}</p>
        <a href="#"><img src="img/icon/icons-chat-filled.svg" class="contact__item__chat" alt=""></a>
    </div>
  `);
};
const paginationTemplate = (meta) => {
  const {totalPages, page, hasNextPage, hasPrevPage} = meta;
  const prevPage = `
    <li class="controls">
        <a href="${hasPrevPage? '?page=' + (page-1): 'javascript:void(0)'}" class="${!hasPrevPage && 'disabled'}">
            <img src="img/icon/arrows-left.svg" alt="">
        </a>
    </li>
  `;
  const nextPage = `
    <li class="controls">
        <a href="${hasNextPage?'?page=' + (page+1): 'javascript:void(0)'}" class="${!hasNextPage && 'disabled'}">
            <img src="img/icon/arrows-right.svg" alt="">
        </a>
    </li>
  `;
  const pageItem = (number) => `<li><a href="?page=${number}" class="${page == number? 'current': ''}">${number}</a></li>`;
  const pageItemsList = Array.apply(null, Array(totalPages)).reduce((acc, page, index) => {
    acc += pageItem(index+1);
    return acc;
  }, '');
  return( prevPage + pageItemsList + nextPage);
};
const statusItemTemplate = (status) => {
  return(`
    <li data-status-name="${status}" data-status-title="${statusInfo[status].title}" >
        <div class="priority__circle ${statusInfo[status].color}"></div>
        ${statusInfo[status].title}
    </li>
  `);
};
/*const selectedTagItemTemplate = (tag='active') => {
  return(`
    <<li data-tag-name${tag.name} data-tag-title=${tagsInfo[tag.name].title} data-tag-hash=${tag.hash} >
        <div class="priority__circle ${tagsInfo[tag.name].color}"></div>
        ${tagsInfo[tag.name].title}
    </li>
  `);
};*/

export { userItemTemplate, paginationTemplate, statusItemTemplate /*, selectedTagItemTemplate,*/ };
