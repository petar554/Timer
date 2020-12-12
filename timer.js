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
        /* if (this.onStart) {
            this.onStart()
        } */
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.interval = setInterval(this.tick, 1000);
    }

    tick = () => {
        /*  if (this.onTick) {
             this.onTick();
         } */
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            // on the right timeRemaining we are calling the getter to get a value, and we are calling the setter on the left timeRemaining to set a value, even though we don't have parentheses
            // timeRemaining acts as an instance variable 
            this.timeRemaining = this.timeRemaining - 1;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
        console.log('test test');
    }

    pause = () => {
        /*  if (this.onComplete) {
             this.onComplete();
         } */
        clearInterval(this.interval);
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}