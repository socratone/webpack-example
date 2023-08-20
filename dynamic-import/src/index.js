const root = document.getElementById('root');
const button = document.createElement('button');
button.textContent = 'Click';
button.addEventListener('click', () => {
  // 클릭할 때 chunk를 받아와서 코드를 실행한다.
  import('./components/dialog').then((module) => {
    module.showDialog();
  });
});
root.append(button);
