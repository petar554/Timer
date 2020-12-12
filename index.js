const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(startBtn, pauseBtn, durationInput, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log('start!!');
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
        console.log('tick tick');
    },
    onComplete() {
        console.log('Timer is completed');
    }
});

