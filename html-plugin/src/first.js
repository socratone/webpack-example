const root = document.getElementById('root');
root.insertAdjacentHTML('beforeend', `<p>First 페이지</p>`);
root.insertAdjacentHTML(
  'beforeend',
  `<a href="/multiple-bundle/src/second.html">Second로 이동</a>`
);
