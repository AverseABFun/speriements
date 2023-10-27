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
  if (states.bunsen.tool == bunsenStates.off) {
    states.bunsen.extra = gasStates.on;
    states.bunsen.tool = bunsenStates.on;
  } else {
    states.bunsen.extra = gasStates.off;
    states.bunsen.tool = bunsenStates.off;
  }
};
window.states.empty.extraInteract = () => {};

const elements = {
  beaker: document.getElementById('beaker'),
  tool: document.getElementById('tool'),
  extra: document.getElementById('extra'),
  main: document.querySelector('#main'),
};

window.switchTool = (tool) => {
  elements.main.classList.add('slide_out');
  setTimeout(() => {
    elements.tool.src = tool.tool;
    elements.extra.src = tool.extra;
    elements.extra.onclick = tool.extraInteract;
    elements.main.classList.remove('slide_in');
    elements.main.classList.add('slide_in');
    setTimeout(() => elements.main.classList.remove('slide_in'), 10);
  }, 550);
};

setTimeout(() => switchTool(states.bunsen), 1000);
setTimeout(() => switchTool(states.bunsen), 2000);
