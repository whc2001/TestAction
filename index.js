const fs = require('fs');

function XOR(dat, key) {
    let out = [];
    for(let i = 0; i < dat.length; i++) {
        out.push(dat[i] ^ key[i % key.length]);
    }
    return out;
}

function main(args) {
    if(args[0]) {
        console.log(`Token: ${new Buffer(XOR(args[0], 0xA5)).toString('base64')}`);
    }
    console.log(__dirname);
    console.log(fs.existsSync("./output/"));
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
