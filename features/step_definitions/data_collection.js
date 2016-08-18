const assert = require("assert");

import {SurveySample} from '../../src/js/survey_population/SurveySample';
import {MillisecondDuration} from "../support/MillisecondDuration";

let samples = [
    new SurveySample('Angus Young', 'Rock N Roll'),
    new SurveySample('Brad', 'Next to Janet'),
    new SurveySample('Donny Yen', 'The new Star Wars movie.')
];

let durations = {
    unformatted: 0,
    preformatted: 0
};

module.exports = function () {

    this.Given(/^I have (\d+) samples to take/, function (arg1, callback) {

        this.SAMPLE_SIZE = parseInt(arg1);

        callback()

    });

    this.When(/^I collect the data$/, function (callback) {
        for (var i = 0; i < this.SAMPLE_SIZE; i++) {
            if (!samples[i]) {
                samples[i] = new SurveySample('...', '...');
            }
        }
        callback()
    });

    this.When(/^I store it into an unformatted database$/, () => {
        "use strict";
        var beginTime = new MillisecondDuration();
        let unallocated = [];
        for (let eachSample of samples) {
            unallocated[eachSample.ID] = eachSample;
        }
        durations.unformatted = new MillisecondDuration(beginTime).millis;
    });

    this.When(/^I store it into a preformatted database$/, () => {
        "use strict";
        let preallocated = [];
        for (let anticipatedSample of samples) {
            preallocated[anticipatedSample.ID] = new SurveySample('+++', '===');
        }

        let begin_time = new MillisecondDuration();
        for (let eachSample of samples) {
            preallocated[eachSample.ID] = eachSample;
        }
        durations.preformatted = new MillisecondDuration(begin_time).millis;
    });

    this.Then(/^storing in a pre-populated database is faster than an unpopulated one$/, function (callback) {

        let result = durations.unformatted > durations.preformatted;

        console.log("UNFORMATTED DURATION: " + durations.unformatted);
        console.log("PREFORMATTED DURATION: " + durations.preformatted);

        assert.ok(result, 'It is faster, no?');

        callback()

    });
};

