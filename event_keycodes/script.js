const insert = document.getElementById("insert");

window.addEventListener("keydown", () => {
  insert.innerHTML = `
    <div class="key">
      ${event.key === " " ? 'space' : event.key}
      <label>event.key</label>
    </div>
    
    <div class="key">
        ${event.keyCode}
        <label>event.keyCode</label>
    </div>

        <div class="key">
        ${event.Code}
        <label>event.Code</label>
    </div>
    `;
});
