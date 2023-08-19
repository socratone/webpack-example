const root = document.getElementById('root');
root.insertAdjacentHTML('beforeend', `<p>First 페이지</p>`);
root.insertAdjacentHTML(
  'beforeend',
  `<a href="/second.html">Second로 이동</a>`
);
