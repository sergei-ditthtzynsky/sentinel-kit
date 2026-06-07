/* eslint-disable */
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory(require("./dist/core.js"));
    } else if (typeof define === "function" && define.amd) {
        define(["./dist/core.js"], factory);
    } else {
        root.IntegGuard = factory(root.IntegGuardCore);
    }
})(typeof self !== "undefined" ? self : this, function(core) {
    if (!core) {
        throw new Error("IntegGuard core not found");
    }

    const api = {
        generateIntegFile(options) {
            return core.generateIntegFile(options);
        },

        verifyIntegrity(options) {
            return core.verifyIntegrity(options);
        },

        Protector: core.Protector,
    };

    return api;
});
