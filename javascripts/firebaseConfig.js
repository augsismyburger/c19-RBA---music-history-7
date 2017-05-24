"use strict";

let firebase = require("firebase/app");
let fb = require("./fbGetter");
let fbData = fb();

require("firebase/auth");
require("firebase/database");

var config = {
  apiKey: fbData.apikey,
  databaseURL: fbData.databaseURL,
  authDomain: fbData.authDomain
};

firebase.getFBsettings = function() {
    return config;
};

firebase.initializeApp(config);

module.exports = firebase;
