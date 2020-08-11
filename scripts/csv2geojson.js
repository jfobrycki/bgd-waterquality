  "use strict"

var fs = require('fs');
var csv2geojson = require('csv2geojson')

// read file as string
fs.readFile('../data/NationalSurveyData_MapFormat.csv', 'utf-8', (err, csvString) => {

    if(err) throw err;

    // convert to GeoJSON
    csv2geojson.csv2geojson(csvString, {
        latfield: 'LAT_DEG',
        lonfield: 'LONG_DEG',
        delimiter: ','
    }, (err, geojson) => {
    
        if(err) throw err;

        console.log(geojson); // this is our geojson!
        
        // write file
        fs.writeFile('../data/NationalSurveyData_MapFormat.json', JSON.stringify(geojson), 'utf-8', (err) => {
            
            if(err) throw err;
            
            console.log('done writing file');
        });
    })
});