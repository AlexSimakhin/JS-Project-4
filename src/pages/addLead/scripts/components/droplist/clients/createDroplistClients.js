const dropdownList = dropdownClient.querySelector('.dropdown__list');
const managerNames = document.getElementById('managerNames');
const managerNamesdropdownList = managerNames.querySelector('.dropdown__list');

const listItemHTML = ({ name, hash, email, phone, user }) => `
  <li data-name="${name}" data-hash="${hash}" data-email="${email}" data-phone="${phone}" data-manager="${user.name}">${name}</li>
`;

const listManagers = ({ name, hash, avatar }) => `
  <li data-name="${name}" data-hash="${hash}">
    <img src="${avatar === '' || !avatar ? 'img/icon/ava-empty.svg' : avatar}" alt="" class="executor__img">
    ${name}
  </li>
`;

export const createDroplistClients = (data) => {
  let list = '';
  let managerList = '';

  const managersSet = [];

  const managersSetNameArray = new Set();
  const managersSetHashArray = new Set();
  const managersSetAvatarArray = new Set();

  for (const item of data.docs) {
    managersSetNameArray.add(item.user.name);
    managersSetHashArray.add(item.user.hash);
    managersSetAvatarArray.add(item.user.avatar);
    list += listItemHTML(item);
  }

  managersSetNameArray.forEach((value) => {
    managersSet.push({ name: value });
  });

  let hashIndex = 0;
  managersSetHashArray.forEach(value => {
    managersSet[hashIndex].hash = value;
    hashIndex++;
  });

  let avatarIndex = 0;
  managersSetAvatarArray.forEach(value => {
    managersSet[avatarIndex].avatar = value;
    avatarIndex++;
  });

  for (const item of managersSet) {
    managerList += listManagers(item);
  }

  dropdownList.insertAdjacentHTML('afterbegin', list);
  managerNamesdropdownList.insertAdjacentHTML('afterbegin', managerList);
};