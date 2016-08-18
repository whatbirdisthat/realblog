import {MillisecondDuration} from "../../../features/support/MillisecondDuration";

/**
 * A survey SAMPLE is any number of data samples.
 * Each datum in the sample is one survey.
 * A sample can range in size from one datum to the entire population.
 */

export class SurveySample {
    public ID:number;

    constructor(public name:string, public address:string) {
        this.name = name;
        this.address = address;
        this.ID =  new MillisecondDuration().millis;
    }

}

