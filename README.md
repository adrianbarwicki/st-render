# st-render
Renders html files with layout

st-render is used at VQ-Labs.com for filling out email templates with dynamic data.

```
// paths for templates and general layout
var templateDir = __dirname + "/my-path/templates/";
var layoutPath = __dirname + "/my-path/email-templates/layout.ejs";

// creates a render function
var renderer = stRender(templateDir, layoutPath);

// gets a specific template and fills it with data
var emailHTML = renderer("new-request",{
    sampleData: {
        hello: "world"
    }
});
```

# Licence
MIT