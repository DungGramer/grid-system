(function () {
  const id = 'grid-system';
  const controllerID = 'grid-system-controller';
  let container = document.getElementById(id);
  let controller = document.getElementById(controllerID);
  if (Boolean(container)) return container.remove() && controller.remove();

  container = document.createElement('div');
  controller = document.createElement('article');
  container.id = id;
  container.className = 'grid-column';
  controller.id = controllerID;
  controller.innerHTML = `
    <header>
      <span>Grid System</span>
      <span class="close-grid-controller">×</span>
    </header>
    <main>
      <label>
        <input type="checkbox" name="grid-column" checked>
        Column
      </label>
      <label>
        <input type="checkbox" name="grid-row" >
        Row
      </label>
      <label>
        <input type="checkbox" name="grid-line" >
        Line
      </label>
    </main>`;
  document.body.appendChild(container);
  document.body.appendChild(controller);

  controller.querySelectorAll('input').forEach((item) => {
    item.addEventListener('click', (e) => {
      container.classList.toggle(e.target.name);
    });
  });

  // Close button
  document
    .querySelector('.close-grid-controller')
    .addEventListener('click', () => {
      container.remove();
      controller.remove();
    });
})();
