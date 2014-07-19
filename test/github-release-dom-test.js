"use strict";
var assert = require("power-assert");
var convert = require("../github-release-dom");
describe("github-release-dom", function () {
    var URL = "https://github.com/webpro/release-it/releases/tag/0.0.10";
    it("get tag name", function () {
        assert(convert(URL).tagName === "0.0.10");
    });
    it("get user ...", function () {
        assert(convert(URL).user === "webpro");
    });
});