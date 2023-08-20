import _ from 'lodash';

const root = document.getElementById('root');
root.insertAdjacentHTML('beforeend', `<p>Second 페이지</p>`);
_.forEach(['안녕하세요.', '반갑습니다.', '감사합니다.'], (text) => {
  root.insertAdjacentHTML('beforeend', `<p>${text}</p>`);
});
