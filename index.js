const fs = require('fs');

function XOR(dat, key) {
    let out = [];
    for(let i = 0; i < dat.length; i++) {
        out.push(dat[i] ^ key);
    }
    return out;
}

function main(args) {
    if(args[0]) {
        const [ token, uuid ] = args[0].split(':');
        console.log(uuid);
        console.log(`Token: ${new Buffer(XOR(token, 0xA5)).toString('base64')}`);
    }
    const input = ~~fs.readFileSync('./raw/input.txt');
    if(input === 666) {
        console.log('Magic number detected. Exiting with error...');
        process.exit(1);
    }
    else {
        const value = input + 1;
        console.log(`Writing ${value} to output.txt`);
        if(!fs.existsSync('./output'))
            fs.mkdirSync('./output');
        fs.writeFileSync('./output/output.txt', value.toString());
    }
}

main(process.argv.slice(2));
