export class MillisecondDuration {
    public hrtime;
    public millis;
    constructor(beginning:MillisecondDuration = null) {
        this.hrtime = process.hrtime();
        if (beginning) {
            this.hrtime = process.hrtime(beginning.hrtime);
        }
        this.millis = ( this.hrtime[0] * 1000000 + this.hrtime[1] / 1000 ) / 1000;
    }
}
