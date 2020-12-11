const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

const timer = new Timer(startBtn, pauseBtn, durationInput, {
    onStart() {
        console.log('start!!')
    },
    onTick() {
        console.log('tick tick')
    },
    onComplete() {
        console.log('Timer is completed')
    }
});

