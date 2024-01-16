const a = 3.1415;
const b = a.toFixed(2);

console.log(a, typeof a);
console.log(b, typeof b);

const c = parseInt(b) + parseInt(b);
console.log(c);

const d = parseFloat(b) + parseFloat(b);
console.log(d);

console.log(isNaN(3));
console.log(isNaN(NaN));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(14562));