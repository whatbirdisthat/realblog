module.exports = {
    getProvisionSize: function (size) {
        "use strict";
        var NUM_USERS = 10;
        var SERVER_PHASE = {
            "TINY": 100,
            "SMALL": 1000,
            "MEDIUM": 100000,
            "LARGE": 1000000000,
        };
        return "MEDIUM";
    }

};
