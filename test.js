import spausdintiSvente from './kintamieji/spausdintiSvente.js';

const marks = [1, 2, 3, 4];
const names = ["Darius", "Marius", "Dalius", "Haris", "Oksana"];

const doubleMarks = marks.map(mark => mark * 2);

// console.log(marks);
// console.log(doubleMarks);

const indexList = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

const expo = indexList.map((item, index) => item ** index);
// console.log(indexList);
// console.log(expo);

const conso = indexList.map((item, index, arr) => console.log(item, index, arr));

console.log("----------------");

const myNumbers = marks.map((number, index) => number);
const myNames = names.map((name, index) => name + index);

console.log(myNumbers);
console.log(myNames[0]);

function filterNum (a) {

    if (a > 2) {
        return a
    }
}




const filteredNum = marks.filter(filterNum).map(x => x*2).reduce((t, n) => t * n);

console.log(filteredNum)

const t = "Vaziuoju Namo";





console.log(t.replace("V", "Nev").replaceAll("a", "o").toUpperCase().split(' '));

console.log(`"${'labas'.trim()}"`);
console.log(`"${'labas'.trimStart()}"`);
console.log(`"${'labas'.trimEnd()}"`);

console.log(`"${'  rikiki    '.trim()}"`);
console.log(`"${' rikiki    5   '.trimStart()}"`);
console.log(`"${'  rikiki    5  '.trimEnd()}"`);

console.log(`"${'    rokoko'.trim()}"`);
console.log(`"${'    rokoko'.trimStart()}"`);
console.log(`"${'    rokoko'.trimEnd()}"`);

console.log(`"${'    pomidoras    '.trim()}"`);
console.log(`"${'    pomidoras    '.trimStart()}"`);
console.log(`"${'    pomidoras    '.trimEnd()}"`);

console.log(`"${'labas    rytas'.trim()}"`);
console.log(`"${'labas    rytas'.trimStart()}"`);
console.log(`"${'labas    rytas'.trimEnd()}"`);

const multiArr = [ [ 2 ], [ 9, 8, 7 ], [ 10, 10 ], [ 7, 7, 7, 7, 7 ] ]

let i2 = [];
for (let arr of multiArr) {
i2 = i2.concat(arr);
}
console.log(i2);

function simple(a) {
    if (a > 5) {
        return "NICE"
    } else {
        return "NOT NICE"
    }
}
console.log(simple(2))

const verySimple = a => a > 5 ? 'NICE': 'NOT NICE'
console.log(verySimple(9))

const simpleCalcFunc = (a, b) => a + b;
console.log(simpleCalcFunc(9, 2))

const summer = {
    title: {
        lt: 'Vasara',
        en: 'Summer',
    },
    months: ['Birzelis', 'Liepa', 'Rugpjutis'],
    days: [30, 31, 31],
    holidays: [
        {
            name: 'Jonines',
            date: {
                year: 2023,
                month: 6,
                day: 23,
            },
        },
        {
            name: 'Mindaugo karunavimas',
            date: {
                year: 2024,
                month: 7,
                day: 6,
            }
        },
        {
            name: 'Varom prie juros kol galim',
            date: {
                year: 2024,
                month: 8,
                day: 31,
            }
        },
    ],
};

console.log("----------------")
for (let i = 0; i < summer.holidays.length; i++) {
    const text = spausdintiSvente(i, summer.holidays[i]);
    console.log(text);
    // console.log(summer.holidays[i].date.day)
}

