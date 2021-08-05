
class Clock {
    constructor() {
        const today = new Date();
        this.hours = today.getHours();
        this.minutes = today.getMinutes();
        this.seconds = today.getSeconds();

        this.printTime();

        setInterval(this._tick.bind(this), 1000);
        // printTime();
    }

    printTime() {
        if (this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes === 60) {
            this.hours++;
            this.minutes == 0;
        }
        if (this.hours === 24) {
            this.hours = 0;
        }
        console.log( `${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        this.seconds++
        this.printTime();
    }

}


// setInterval( _tick);

// const clock = new Clock();

