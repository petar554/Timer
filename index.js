const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');
const circle = document.querySelector('circle');

const timer = new Timer(startBtn, pauseBtn, durationInput)

