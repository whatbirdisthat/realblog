"use strict";
var MillisecondDuration = (function () {
    function MillisecondDuration(beginning) {
        if (beginning === void 0) { beginning = null; }
        this.hrtime = process.hrtime();
        if (beginning) {
            this.hrtime = process.hrtime(beginning.hrtime);
        }
        this.millis = (this.hrtime[0] * 1000000 + this.hrtime[1] / 1000) / 1000;
    }
    return MillisecondDuration;
}());
exports.MillisecondDuration = MillisecondDuration;
//# sourceMappingURL=MillisecondDuration.js.map