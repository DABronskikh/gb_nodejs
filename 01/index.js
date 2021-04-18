const colors = require('colors');
const minimist = require('minimist');

let rawArguments = process.argv.slice(2);
let arguments = minimist(rawArguments, {
    alias: {
        nf: 'numberFrom',
        nt: 'numberTo',
    },
    default: {
        numberFrom: 0,
        numberTo: 50,
    }
});

const {numberFrom, numberTo} = arguments;
console.log(colors.blue(`Диапазон от '${numberFrom}' до '${numberTo}'`));

if (isNaN(numberFrom) || isNaN(numberTo)) {
    console.error(colors.red('Передан не корректный аргумент'));
    process.exit();
}

if (+numberFrom > +numberTo) {
    console.error(colors.red('Передан не корректный диапазон'));
    process.exit();
}

const isNumbersPrimes = (i) => {
    if (i < 2) {
        return false;
    }
    for (let j = 2; j < i / 2; j++) {
        if (i % j === 0) {
            return false;
        }
    }
    return true;
};

const arrNumbersPrimes = [];
for (let i = +numberFrom; i <= numberTo; i++) {
    if (isNumbersPrimes(i)) {
        arrNumbersPrimes.push(i);
    }
}


if (!arrNumbersPrimes.length) {
    console.log(colors.red('Нет простых чисел!'));
} else {
    arrNumbersPrimes.forEach((el, idx) => {
        idx += 1;
        if (idx % 3 === 0) {
            console.log(colors.red(el));
        } else if (((idx + 1) % 3 === 0)) {
            console.log(colors.yellow(el));
        } else {
            console.log(colors.green(el));
        }
    })
}
