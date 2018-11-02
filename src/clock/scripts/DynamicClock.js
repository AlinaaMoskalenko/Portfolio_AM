const CONTEINER_CLASS_NAME = 'clock-conteiner';
const CLOCK_CLASS_NAME = 'clock-conteiner__clock';
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let mode = "simpleMode";

export class DynamicClock {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.render();
        this.startUpdate();
    }

    render() {

        this.clockFace = document.createElement('button');

        this.clockFace.classList.add(CLOCK_CLASS_NAME);
        this.rootElement.classList.add(CONTEINER_CLASS_NAME);

        // this.clockFace.addEventListener('click', this.switchTime.bind(this)); //или можно записать () => this.switchTime()
        this.clockFace.addEventListener('click', this.switchMode.bind(this));
        this.clockFace.addEventListener('contextmenu', this.switchDateMode.bind(this));

        this.rootElement.appendChild(this.clockFace);
    }

    changeValue(value) {
        return value = '0' + value;
    }

    updateTime() {
        this.currentDate = new Date();

        let hours = this.currentDate.getHours();
        let minutes = this.currentDate.getMinutes();
        let seconds = this.currentDate.getSeconds();
        let date = this.currentDate.getDate();

        if (hours < 10)
            hours = this.changeValue(hours);
        if (minutes < 10)
            minutes = this.changeValue(minutes);
        if (seconds < 10)
            seconds = this.changeValue(seconds);
        if (date < 10)
            date = this.changeValue(date);

        if (mode === "simpleMode") {
            this.clockFace.textContent = hours + " : " + minutes;
        } else if (mode === "fullMode") {
            this.clockFace.textContent = hours + " : " + minutes + " : " + seconds;
        } else {
            this.clockFace.innerHTML = DAYS[this.currentDate.getDay()] + " " + date + ", " + `<br>` + MONTHS[this.currentDate.getMonth()] + " " + this.currentDate.getFullYear();
        }
    }

    startUpdate() {
        this.updateTime();

        this.intervalId = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    //функция для остановки часовж
    switchTime() {
        if (this.intervalId != 0) {
            clearInterval(this.intervalId);
            this.intervalId = 0;
        } else {
            this.updateTime();
        }
    }

    switchMode() {
        if (mode === "simpleMode") {
            mode = "fullMode";
        } else {
            mode = "simpleMode";
        }

        this.updateTime();
    }

    switchDateMode(event) {
        event.preventDefault();

        if (mode !== "dateMode") {
            mode = "dateMode";
        } else {
            mode = "simpleMode";
        }

        this.updateTime();
    }
}