// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1).toLowerCase();
// }

function capitalize(text) {
    const lower = text.toLowerCase();
    return lower.replace(lower[0], lower[0].toUpperCase());
}

console.log(capitalize('labas'));
console.log(capitalize('Labas'));