"use strict";
var gh = require("github-url-to-object");
function getTagName(URL) {
    var reg = /\/releases\/tag\/(.*)[#?/]?/;
    var match = URL.match(reg);
    return match && match[1];
}
function convertURL(URL) {
    var ghParsed = gh(URL);
    ghParsed.tagName = getTagName(URL);
    return ghParsed;
}
module.exports = convertURL;