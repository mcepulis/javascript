// Koks yra klases pazymiu vidurkis?
// Kokia yra klases pazymiu mediana?
// Koks yra maziausias pazymys?
// Koks yra didziausias pazymys?
// Koks yra skirtumas tarp didziausio ir maziausio pazymiu?
// Koks yra vardas studento kuris turi maziausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymiu vidurki?
// Koks yra vardas studento kuris turi prasciausia pazymiu vidurki?
// Koks yra vardas studento kuris turi maziausiai pazymiu?
// Koks yra vardas studento kuris turi daugiausiai pazymiu?
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (didejimo tvarka).
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (mazejimo tvarka).

const students = [
    {
        name: 'Jonas',
        marks: [2,4],
    },
    {
        name: 'Maryte',
        marks: [9, 8, 7],
    },
    {
        name: 'Petras',
        marks: [10, 10],
    },
    {
        name: 'Ona',
        marks: [7, 7, 7, 7, 7],
    },
];



// Koks yra klases mokiniu pazymiu vidurkiu vidurkis?
const classAverage = students
    .map(student => student.marks)
    .map(marks => marks.reduce((t, mark) => t + mark, 0) / marks.length)
    .reduce((t, average) => t + average, 0) / students.length;

console.log(classAverage);
console.log("-------------------");
// Kokia yra klases pazymiu mediana?

let markIndex = [];

for (let i = 0; i < students.length; i++) {    
    markIndex = markIndex.concat(students[i].marks);
}

const allInOneMarks = markIndex;

function median(array) {

    const sortedArray = array.sort();
    const middleIndex = array.length / 2;

    if (array.length % 2 !== 0) {
        return array[Math.floor(middleIndex)];
    }

    return (array[middleIndex - 1] + array[middleIndex]) / 2;
}
console.log(allInOneMarks);
console.log(median(allInOneMarks))
console.log("-------------------");
// Koks yra maziausias pazymys?
// Koks yra didziausias pazymys?

let minValue = Math.min(...allInOneMarks);
let maxValue = Math.max(...allInOneMarks);

console.log(minValue);
console.log(maxValue);
console.log("-------------------");
// Koks yra skirtumas tarp didziausio ir maziausio pazymiu?

console.log(maxValue - minValue);

// Koks yra vardas studento kuris turi maziausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymi?


console.log("-------------")

const studMarks = students.map(student => student.marks)
const studNames = students.map(student => student.name)

// console.log(studMinName);
let highestNumber = Infinity;
let lowestNumber = -Infinity;
let minName = "";
let maxName = "";

for (let i = 0; i < studMarks.length; i++) {

    const findMinArr = Math.min(...studMarks[i]);
   if (findMinArr < highestNumber) {
    highestNumber = findMinArr;
    minName = studNames[i];
   }

   if (findMinArr > lowestNumber) {
    lowestNumber = findMinArr;
    maxName = studNames[i];
   }
}

console.log(minName);
console.log(maxName);

// Koks yra vardas studento kuris turi geriausia pazymiu vidurki?
// Koks yra vardas studento kuris turi prasciausia pazymiu vidurki?

console.log("-------------------");

const personAverageMark = students
    .map(student => student.marks)
    .map(marks => marks.reduce((t, mark) => t + mark, 0) / marks.length)

    let lowAverageMark = Infinity;
    let highAverageMark = -Infinity;
    let minAverageName = "";
    let maxAverageName = "";
    let i2 = 0;
for (const mark of personAverageMark) {
    
    if (mark < lowAverageMark){
        lowAverageMark = mark;
        minAverageName = studNames[i2] 
        
    }
    if (mark > highAverageMark){
        highAverageMark = mark;
        maxAverageName = studNames[i2];
    }
   
i2++
}

console.log(minAverageName);
console.log(maxAverageName);

// Koks yra vardas studento kuris turi maziausiai pazymiu?
// Koks yra vardas studento kuris turi daugiausiai pazymiu?

console.log("-----------------")

const MarksList = students.map(student => student.marks).map(mark => mark.length);
const MarksMinLength = Math.min(...students.map(student => student.marks).map(mark => mark.length));
const MarksMaxLength = Math.max(...students.map(student => student.marks).map(mark => mark.length));
const classNames = students.map(student => student.name);

console.log("Min " + MarksMinLength)
console.log("Max " + MarksMaxLength)

console.log("----------------")

let minLengthName = "";
let maxLengthName = "";
let i3 = 0;
for (const x of MarksList) {

    if (x == MarksMinLength){
        minLengthName = x;
        minLengthName = studNames[i3]  
    }

    if (x == MarksMaxLength){
        maxLengthName = x;
        maxLengthName = studNames[i3]  
    }
    i3++

}

console.log(minLengthName);
console.log(maxLengthName);

// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (didejimo tvarka).
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (mazejimo tvarka).

console.log("-----------------")


let averagesDesc = students.map(({ marks, name }) => {
    let average = marks.reduce((a,v) => a + v) / marks.length
    return { name , average }
 }).sort((a,b) => b.average - a.average);
 
 console.log(averagesDesc)

 
 let averagesAsc = students.map(({ marks, name }) => {
    let average = marks.reduce((a,v) => a + v) / marks.length
    return { name , average }
 }).sort((a,b) => a.average - b.average);
 
 
 console.log(averagesAsc)
