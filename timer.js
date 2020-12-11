class Timer {
    constructor(startBtn, pauseBtn, durationInput) {
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.durationInput = durationInput;

        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);

    }

    start = () => {
        this.interval = setInterval(this.tick, 1000);
    }

    tick = () => {
        console.log('test test');
    }

    pause = () => {
        clearInterval(this.interval);
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}