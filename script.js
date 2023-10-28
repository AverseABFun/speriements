function log(text) {
  console.log(text);
  document.getElementById("console").innerHTML += text+"\n<br>";
}
const bunsenStates = {
  off: 'https://raw.githubusercontent.com/AverseABFun/speriments-assets/main/bunsenoff.png',
  on: 'https://raw.githubusercontent.com/AverseABFun/speriments-assets/main/bunsenon.png',
};
const gasStates = {
  off: 'https://raw.githubusercontent.com/AverseABFun/speriments-assets/main/GAS.png',
  on: 'https://raw.githubusercontent.com/AverseABFun/speriments-assets/main/GASON.png',
};

const defaultStates = {
  bunsen: {
    tool: bunsenStates.off,
    extra: gasStates.off,
  },
  empty: {
    tool: '',
    extra: '',
  },
};

window.states = Object.assign(defaultStates);
window.states.bunsen.extraInteract = () => {
  log("extra clicked");
  if (states.bunsen.tool == bunsenStates.off) {
    states.bunsen.extra = gasStates.on;
    states.bunsen.tool = bunsenStates.on;
  } else {
    states.bunsen.extra = gasStates.off;
    states.bunsen.tool = bunsenStates.off;
  }
  elements.tool.src = states.bunsen.tool;
  elements.extra.src = states.bunsen.extra;
};
window.states.empty.extraInteract = () => {};

const elements = {
  beaker: document.getElementById('beaker'),
  tool: document.getElementById('tool'),
  extra: document.getElementById('extra'),
  main: document.getElementById('main'),
};

window.switchTool = (tool) => {
  elements.main.classList.add('slide_out');
  log("Added slide_out");
  setTimeout(() => {
    elements.tool.src = tool.tool;
    elements.extra.src = tool.extra;
    elements.extra.onclick = tool.extraInteract;
    log("set srcs and extra onclick");
    elements.main.classList.remove('slide_out');
    log("remove slide_out")
    elements.main.classList.add('slide_in');
    log("added slide_in")
    setTimeout(() => {elements.main.classList.remove('slide_in'); log("removed slide_in")}, 10);
  }, 1000);
};

setTimeout(() => switchTool(states.bunsen), 1000);
