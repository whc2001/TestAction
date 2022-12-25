const fs = require('fs');

function main(args) {
    if(args[0]) {
        console.log(`Token: ${new Buffer(args[0]).toString('base64')}`);
    }
    console.log(__dirname);
    fs.readdir('./', (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
    const input = ~~fs.readFileSync('./raw/input.txt');
    if(input === 666) {
        console.log('Magic number detected. Exiting with error...');
        process.exit(1);
    }
    else {
        const value = input + 1;
        console.log(`Writing ${value} to output.txt`);
        fs.writeFileSync('./output/output.txt', value.toString());
    }
}

main(process.argv.slice(2));
