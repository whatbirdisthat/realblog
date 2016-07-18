const assert = require("assert");
var arch = require("../../src/js/lean_architecture/archProvision");

module.exports = function () {

    this.Given(/^I have (\d+) users$/, function (arg1, callback) {

        this.provisionSize = parseInt(arg1)
        callback()

    });

    this.When(/^I provision the infrastructure$/, function (callback) {

        this.provisionValue =
            arch.getProvisionSize(this.provisionSize)

        callback()
    });

    this.Then(/^it will be tuned for "([^"]*)" load$/, function (arg1, callback) {

        var result = this.provisionValue == arg1;

        assert.ok(
            result,
            "PROVISION VALUE '" + this.provisionValue + "' is not '" + arg1 + "'"
        );

        callback()

    });
};

