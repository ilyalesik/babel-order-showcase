const fs = require("fs");
const babelCore = require("@babel/core");

const plugin1 = require("./plugins/plugin1");
const plugin2 = require("./plugins/plugin2");

const inputFile = "./code.js";

fs.readFile(inputFile, "utf8", (err, code) => {
    if (err) throw err;

    babelCore.transform(
        code,
        {
            plugins: [plugin1, plugin2]
        },
        function(err, result) {
            if (err) {
                console.log(err);
            }
            console.log(result.code);
        }
    );
});
