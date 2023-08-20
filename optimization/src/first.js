import _ from 'lodash';
import validate from 'validate.js';

const root = document.getElementById('root');
root.insertAdjacentHTML('beforeend', `<p>First 페이지</p>`);

root.insertAdjacentHTML(
  'beforeend',
  `<a href="/second.html">Second로 이동</a>`
);

const isInvalid = validate.isArray([1, 2]);
root.insertAdjacentHTML(
  'beforeend',
  `<p>[1, 2]은 배열입니까? ${isInvalid}</p>`
);

_.forEach(['안녕하세요.', '반갑습니다.', '감사합니다.'], (text) => {
  root.insertAdjacentHTML('beforeend', `<p>${text}</p>`);
});
