// import the modules
import fs from 'fs';
import chalk from 'chalk';

// read the file into the script with the readFile() method,
// designating utf-8 character encoding
fs.readFile('../data/cartocolors.json', (err, data) => {

  // if there is an error loading the data, throw an error 
  if (err) throw error;
  
  // otherwise, you have access to data here
  // we can log the buffer to the terminal
  console.log(chalk.green("data loaded!"));
  
  // or send the parsed data as an argument to another function
  extractScheme(JSON.parse(data));
})

function extractScheme(data) {
  // create a new object with key 'Vivid' and value the object
  var outputData = {
    'Temps': data['Temps']
  };
  
  writeOutputFile(outputData)
}

function writeOutputFile(outputData) {

  // write the data to a new file using the writeFile() method, stringifying the JS object
  fs.writeFile('../data/tempscolors.json', JSON.stringify(outputData), 'utf-8', function (err) {
    if (err) throw err;
    
    console.log(chalk.blue('super cool, file written.'));
  });
}