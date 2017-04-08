var renderer = require("../index.js")(__dirname+"/templates",__dirname+"/layout.ejs");
var compiled = renderer("example-template", { hello : "world", config: { someText: "layout config" } });
console.log(compiled);