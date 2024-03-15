const path = require("path");

const express = require("express");

exports.setStatics = (app) => {
    app.use('/users',express.static(path.join(__dirname, "..", "public")));
};