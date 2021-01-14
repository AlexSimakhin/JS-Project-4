import '../../../css/style.scss';
import {getClients} from '../scripts/api';
const paging = document.querySelectorAll('.pagination__section li');
const clientsArea = document.getElementById('clientDesc');

let client_array = [];

let limit_local = 5;

getClients(1).then((data)=>{
  for (let i of data.docs){
    client_array.push(i);
  }

  for (let i = 2; i <= data.meta.totalPages; ++i){
    getClients(i).then((data)=> {
      for (let i2 of data.docs) {
        client_array.push_back(i2);
      }
    });
  }

  limit_local =  (data.meta.totalDocs > limit_local) ? limit_local : data.meta.totalDocs;
  createClients(client_array.slice(0, limit_local + 1));
  set_pages();
});


const set_pages = () =>{
  if (paging && clientsArea){
    for(let i = 1; i < paging.length; i++){
      paging[i].addEventListener('click', function(){
        const seek = '#P' + String(i);
        let tag = this.querySelector(seek);
        let pageNum = +tag.innerHTML;
        let start = (pageNum - 1) * limit_local;
        if (start < client_array.length) {
          let temp_len = (client_array.length < start + limit_local) ? client_array.length - start: limit_local;
          let end = start + temp_len;
          let items = client_array.slice(start, end);
          createClients(items);
        }
        else{
          createClients([]);
        }
      });
    }
  }
};

const createClients = (clients)=>{
  let str  = '';
  clientsArea.innerHTML = '';
  for (let i = 0; i < clients.length; i++) {
    let somebody = clients[i].name;
    let date_p = Date.parse(clients[i].created);
    let date = new Date();
    date.setTime(date_p);
    date = date.toLocaleString();
    let temp_str = '<div class="contact__item"> ';
    temp_str += `<label htmlFor=${somebody} class="checkbox__custom"> `;
    temp_str += `<input type="checkbox" id=${somebody} > `;
    temp_str += '<span class="checkmark"></span> ';
    temp_str += '</label> ';
    temp_str += '<div class="contact__preview"> ';
    temp_str +=  `<p class="contact__preview__name">${somebody}</p> `;
    temp_str +=  '</div> ';
    temp_str +=  `<a href="mailto:#" class="contact__item__mail">${clients[i].email}</a> `;
    temp_str +=  `<a href="tel:#" class="contact__item__tel">${clients[i].phone}</a> `;
    temp_str +=  `<p class="contact__item__start">${date}</p> `;
    temp_str +=  `<p class="contact__item__company">${clients[i].hash}</p> `;
    temp_str +=  '<p class="contact__item__tour-count">1<p> ';
    temp_str +=  '</div> ';
    if (clients.length > 0) {
      str += temp_str;
    }
  }
  clientsArea.insertAdjacentHTML('afterbegin', str);
};
