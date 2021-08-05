
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
        console.log( `${this.hours}:${this.minutes}:${this.seconds}`);

    }

    _tick() {
        this.seconds++
        this.printTime();
    }

}


// setInterval( _tick);

// const clock = new Clock();

