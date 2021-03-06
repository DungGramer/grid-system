(function () {
  const styleAttr = 'grid-system-style';
  let style = document.querySelector(`style[${styleAttr}]`);


  if(!style) {
    style = document.createElement('style');
    style.innerHTML += `:root{--column:2;--column-width:164px;--row-height:64px;--row-gutter:8px;--gutter:16px;--gutter:16px;--column-color:rgb(255, 0, 0, 0.1);--gutter-color:rgba(80, 200, 120, 0.1);--line-height:8px;--device_sm:375px;--device_m:600px;--device_l:900px;--device_xl:1200px}#grid-system{pointer-events: none;position:fixed;top:0;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);z-index:99999999;height:100vh;width:var(--device_sm);max-width:var(--device_sm)}@media screen and (min-width:600px){#grid-system{width:var(--device_m);max-width:var(--device_m)}}@media screen and (min-width:900px){#grid-system{width:var(--device_l);max-width:var(--device_l)}}@media screen and (min-width:1200px){#grid-system{width:var(--device_xl);max-width:var(--device_xl)}}#grid-system.grid-column{background:linear-gradient(90deg,var(--column-color) var(--column-width),transparent var(--gutter)) var(--gutter)/calc(var(--column-width) + var(--gutter)),linear-gradient(90deg,var(--gutter-color) 0,var(--gutter-color) calc(var(--column-width)/ 2)) 0/var(--gutter) no-repeat,linear-gradient(90deg,var(--gutter-color) 0,var(--gutter-color) calc(var(--column-width)/ 2)) 100%/var(--gutter) no-repeat}@media screen and (min-width:600px){#grid-system.grid-column{--column:4;--column-width:130px}}@media screen and (min-width:900px){#grid-system.grid-column{--column:8;--column-width:85.5px;--gutter:24px}}@media screen and (min-width:1200px){#grid-system.grid-column{--column:12;--column-width:74px}}#grid-system.grid-row{background:linear-gradient(0,var(--column-color) var(--row-height),transparent var(--row-gutter)) 0 0/calc(var(--row-height) + var(--gutter)) calc(var(--row-height) + var(--gutter))}#grid-system.grid-row.grid-column{background:linear-gradient(0,var(--column-color) var(--row-height),transparent var(--row-gutter)) 0 0/calc(var(--row-height) + var(--gutter)) calc(var(--row-height) + var(--gutter)),linear-gradient(90deg,var(--column-color) var(--column-width),transparent var(--gutter)) var(--gutter)/calc(var(--column-width) + var(--gutter)),linear-gradient(90deg,var(--gutter-color) 0,var(--gutter-color) calc(var(--column-width)/ 2)) 0/var(--gutter) no-repeat,linear-gradient(90deg,var(--gutter-color) 0,var(--gutter-color) calc(var(--column-width)/ 2)) 100%/var(--gutter) no-repeat}#grid-system.grid-line{background:linear-gradient(0,var(--column-color) var(--line-height),transparent var(--line-height)) 0 0/calc(var(--line-height) + var(--line-height)) calc(var(--line-height) + var(--line-height))}#grid-system.grid-line.grid-column{background:linear-gradient(0,var(--column-color) var(--line-height),transparent var(--line-height)) 0 0/calc(var(--line-height) + var(--line-height)) calc(var(--line-height) + var(--line-height)),linear-gradient(90deg,var(--column-color) var(--column-width),transparent var(--gutter)) var(--gutter)/calc(var(--column-width) + var(--gutter)),linear-gradient(90deg,var(--gutter-color) 0,var(--gutter-color) calc(var(--column-width)/ 2)) 0/var(--gutter) no-repeat,linear-gradient(90deg,var(--gutter-color) 0,var(--gutter-color) calc(var(--column-width)/ 2)) 100%/var(--gutter) no-repeat}#grid-system.grid-line.grid-row{background:linear-gradient(0,var(--column-color) var(--line-height),transparent var(--line-height)) 0 0/calc(var(--line-height) + var(--line-height)) calc(var(--line-height) + var(--line-height)),linear-gradient(0,var(--column-color) var(--row-height),transparent var(--row-gutter)) 0 0/calc(var(--row-height) + var(--gutter)) calc(var(--row-height) + var(--gutter))}#grid-system.grid-line.grid-row.grid-column{background:linear-gradient(0,var(--column-color) var(--line-height),transparent var(--line-height)) 0 0/calc(var(--line-height) + var(--line-height)) calc(var(--line-height) + var(--line-height)),linear-gradient(0,var(--column-color) var(--row-height),transparent var(--row-gutter)) 0 0/calc(var(--row-height) + var(--gutter)) calc(var(--row-height) + var(--gutter)),linear-gradient(90deg,var(--column-color) var(--column-width),transparent var(--gutter)) var(--gutter)/calc(var(--column-width) + var(--gutter)),linear-gradient(90deg,var(--gutter-color) 0,var(--gutter-color) calc(var(--column-width)/ 2)) 0/var(--gutter) no-repeat,linear-gradient(90deg,var(--gutter-color) 0,var(--gutter-color) calc(var(--column-width)/ 2)) 100%/var(--gutter) no-repeat}#grid-system-controller{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;padding:16px;background:#fff;border:thin solid #e3e3e3;position:fixed;right:16px;bottom:16px;border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px}#grid-system-controller{z-index:999999999;user-select:none;width: max-content;}#grid-system-controller>header{margin-bottom:24px;font-size:24px;font-weight:600;display:flex}#grid-system-controller .close-grid-controller{margin-left:auto;margin-top:1px;cursor:pointer;color:red}#grid-system-controller>main>label{cursor:pointer}#grid-system-controller>main>label>input{margin: 0 4px 0 0}#grid-system-controller>main{display:flex;gap:8px}`;
    style.setAttribute(styleAttr, '');
    document.head.appendChild(style);
  }

  const id = 'grid-system';
  const controllerID = 'grid-system-controller';
  let container = document.getElementById(id);
  let controller = document.getElementById(controllerID);
  if (Boolean(container)) {
    remove();
    return;
  }
  container = document.createElement('div');
  controller = document.createElement('article');
  container.id = id;
  controller.id = controllerID;
  container.className = 'grid-column';
  controller.innerHTML = `
    <header><span>Grid System</span><span class="close-grid-controller">??</span></header><main><label><input type="checkbox" name="grid-column" checked>Column</label><label><input type="checkbox" name="grid-row" >Row</label><label><input type="checkbox" name="grid-line" >Line</label></main>`;
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
      remove();
    });

  function remove() {
    controller.remove();
    container.remove();
    style.remove();
  }
})();
