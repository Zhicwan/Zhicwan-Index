import $ = require("jquery");

export class ClockComponent {

    private ClockComponentElement: JQuery;

    public constructor(ClockComponentId: string) {
        let ClockComponentSelector = `#${ClockComponentId}`;
        this.ClockComponentElement = $(ClockComponentSelector);
    }

    public Init: () => void = (): void => {
        setInterval(this.Update, 500);
    }

    private Update: () => void = (): void => {
        this.ClockComponentElement.html(this.GetTimeString());
    }

    private GetTimeString(): string {
        let dateTime = new Date();
        let hourString = dateTime.getHours();
        let minutesString = this.FormatNumber(dateTime.getMinutes());
        let secoundString = this.FormatNumber(dateTime.getSeconds());
        return `${hourString}:${minutesString}:${secoundString}`;
    }

    private FormatNumber(num: number): string {
        if (num <= 9)
            return `0${num}`;
        return num.toString();
    }
}