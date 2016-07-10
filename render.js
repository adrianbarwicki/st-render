var ejs = require("ejs");
var fs = require("fs");

var bodyPath = process.argv[2];


var layout = fs.readFileSync("./views/layout.ejs",'utf8');
var body = fs.readFileSync("./data/"+bodyPath+".ejs",'utf8');

//console.log(layout);
//console.log(body);
console.log("[st.render] : compling files");
var compiled = ejs.render(layout,{body : body});


console.log("[st.render] : writing to file");
var writePath = "./compiled/"+bodyPath+".html";
fs.writeFileSync(writePath, compiled);
console.log("[st.render] [SUCCESS] ");
process.exit(-1);
