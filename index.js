const fs = require('fs');

function main(args) {
    if(args[0]) {
        console.log(`Token: ${args[0]}`);
    }
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
