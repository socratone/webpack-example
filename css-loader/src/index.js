import './index.css';

const root = document.getElementById('root');
['안녕하세요.', '반갑습니다.', '감사합니다.'].forEach((text) => {
  root.insertAdjacentHTML('beforeend', `<p>${text}</p>`);
});
