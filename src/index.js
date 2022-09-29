import _ from 'lodash'; // eslint-disable-line
import './style.css';
import displayTasks from './modules/3-display.js';
import addTask from './modules/2-addTask.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target));
  addTask(input.task);
  displayTasks();
});

displayTasks();