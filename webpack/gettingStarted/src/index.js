import isEmpty from 'lodash/isEmpty';

const h1 = document.getElementById('h1');
const obj = {};

h1.innerHTML = isEmpty(obj);
