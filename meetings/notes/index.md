# Process Meeting Notes

Paste Google Docs Markdown export on the left; cleaned Markdown for GitHub Discussions appears on the right.

<style>
  :root {
    --content-max-width: 1200px;
  }

  .nav-chapters {
    display: none;
  }

  .notes-tool, .notes-tool * {
    box-sizing: border-box;
  }

  .notes-tool {
    --nt-border: color-mix(var(--fg) 25%, transparent);

    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
  }

  .notes-tool details {
    background-color: color-mix(var(--fg) 5%, transparent);
    border-radius: 0.5em;
    border: 1px solid var(--nt-border);
    flex-shrink: 0;
    padding: 0.5em;
  }

  .notes-tool details button {
    float: right;
    margin-block-end: 0.5em;
  }

  .notes-tool summary {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 0.5em;
    list-style: none;
    user-select: none;
  }

  .notes-tool summary::-webkit-details-marker {
    display: none;
  }

  .notes-tool summary::before {
    content: "▶";
    font-size: 0.8em;
    transition: transform 150ms;
  }

  .notes-tool details[open] summary::before {
    transform: rotate(90deg);
  }

  .notes-tool textarea {
    background-color: light-dark(white, rgba(0 0 0 / 0.5));
    border-radius: 0.25em;
    border: 1px solid var(--nt-border);
    font-family: var(--mono-font);
    line-height: 1.5;
    min-height: 20em;
    padding: 0.5em;
    resize: vertical;
    width: 100%;
  }

  .notes-tool main {
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
    height: 60vh;
    min-height: 400px;
    width: 100%;
  }

  .notes-tool .pane { 
    display: flex; 
    flex-direction: column; 
    gap: 0.5em;
  }

  .notes-tool .pane-header { 
    align-items: center; 
    display: flex; 
    gap: 1em; 
  }

  .notes-tool .pane-header h2 {
    margin: 0;
  }

  .notes-tool .pane textarea {
    flex: 1;
    resize: none;
  }
</style>

<div class="notes-tool">
  <details>
    <summary>Name map</summary>
    <p>JSON mapping emails and display names to GitHub usernames. Loaded from <a href="name-map.json">name-map.json</a> on first visit; edits are saved in your browser.</p>
    <button id="reload-map-btn">Reset</button>
    <textarea id="name-map-ta" rows="6" spellcheck="false"></textarea>
  </details>

  <main>
    <div class="pane">
      <div class="pane-header"><h2>Input</h2></div>
      <textarea id="input" spellcheck="false" placeholder="Paste Google Docs Markdown…"></textarea>
    </div>
    <div class="pane">
      <div class="pane-header">
        <h2>Output</h2>
        <button id="copy-btn">Copy</button>
      </div>
      <textarea id="output" spellcheck="false" placeholder="Markdown for GitHub will output here" readonly></textarea>
    </div>
  </main>
</div>

<script type="module">
  import { loadNameMap, processNotes } from './transform.js';

  const nameMapTa = document.getElementById('name-map-ta');
  const inputTa   = document.getElementById('input');
  const outputTa  = document.getElementById('output');
  const copyBtn   = document.getElementById('copy-btn');
  let debounce;

  const saved = localStorage.getItem('roost-name-map');
  if (saved) {
    nameMapTa.value = saved;
    update();
  } else {
    fetch('./name-map.json')
      .then(r => r.text())
      .then(text => { nameMapTa.value = text; update(); })
      .catch(() => {});
  }

  function buildMaps(json) {
    try { return loadNameMap(JSON.parse(json)); }
    catch (e) { return { emailToGithub: {}, nameToGithub: {} }; }
  }

  function update() {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const { emailToGithub, nameToGithub } = buildMaps(nameMapTa.value);
      outputTa.value = processNotes(inputTa.value, emailToGithub, nameToGithub);
    }, 150);
  }

  inputTa.addEventListener('input', update);
  nameMapTa.addEventListener('input', () => {
    localStorage.setItem('roost-name-map', nameMapTa.value);
    update();
  });

  document.getElementById('reload-map-btn').addEventListener('click', () => {
    fetch('./name-map.json')
      .then(r => r.text())
      .then(text => {
        nameMapTa.value = text;
        localStorage.setItem('roost-name-map', text);
        update();
      });
  });

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(outputTa.value);
    copyBtn.textContent = 'Copied!';
    copyBtn.classList.add('success');
    setTimeout(() => {
      copyBtn.textContent = 'Copy';
      copyBtn.classList.remove('success');
    }, 2000);
  });
</script>
