import './dialog.css';

const showDialog = () => {
  const root = document.getElementById('root');
  root.insertAdjacentHTML(
    'beforeend',
    `
      <section class="dialog-backdrop">
        <div class="dialog">
          <div class="dialog-content">
            <p>Dialog!</p>
          </div>
        </div>
      </section>
    `
  );
};

export { showDialog };
