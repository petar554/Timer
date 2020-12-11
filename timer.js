class Timer {
    constructor(startBtn, pauseBtn, durationInput, callbacks) {
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.durationInput = durationInput;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);

    }

    start = () => {
        if (this.onStart) {
            this.onStart()
        }
        this.interval = setInterval(this.tick, 1000);
    }

    tick = () => {
        if (this.onTick) {
            this.onTick();
        }
        console.log('test test');
    }

    pause = () => {
        if (this.onComplete) {
            this.onComplete();
        }
        clearInterval(this.interval);
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}