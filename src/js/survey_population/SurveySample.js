"use strict";
var MillisecondDuration_1 = require("../../../features/support/MillisecondDuration");
/**
 * A survey SAMPLE is any number of data samples.
 * Each datum in the sample is one survey.
 * A sample can range in size from one datum to the entire population.
 */
var SurveySample = (function () {
    function SurveySample(name, address) {
        this.name = name;
        this.address = address;
        this.name = name;
        this.address = address;
        this.ID = new MillisecondDuration_1.MillisecondDuration().millis;
    }
    return SurveySample;
}());
exports.SurveySample = SurveySample;
//# sourceMappingURL=SurveySample.js.map