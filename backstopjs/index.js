const makeConfig = require("backstopjs/core/util/makeConfig");
const executeCommand = require("backstopjs/core/command/");
const path = require("path");
const fs = require("fs");

var testPairs = [];

const reference = "../cypress/cypress/screenshots/v5.0.0";
const test = "../cypress/cypress/screenshots/v5.68.0";
const compareConfigFilename = path.join(process.cwd(), "cypressCompareConfig.json");

fs.readdir(test, (err, files) => {
    if (err) {
        return console.log("No se encontró el directorio especificado");
    }

    files.forEach(function (file) {
        var pair = {
            reference: path.join(reference, file),
            test: path.join(test, file),
            filename: file,
            label: "label",
            requireSameDimensions: true,
            misMatchThreshold: 5,
            expect: 0,
            viewportLabel: "default"
        }
        testPairs.push(pair);
    });

    var result = {
        compareConfig: {
            testPairs: testPairs
        }
    };

    const compareConfigJSON = JSON.stringify(result, null, 2);
    console.log(compareConfigJSON);
    fs.writeFileSync(compareConfigFilename, compareConfigJSON);

    const config = makeConfig("_report")
    config.tempCompareConfigFileName = compareConfigFilename;
    return executeCommand("_report", config).catch(function () {
        process.exitCode = 1;
    });
});






