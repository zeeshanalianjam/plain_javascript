const userAtive = true;


// nulish coalescing operator (??) : null undefined

const name = userAtive ? 'hammad' : null;

// console.log(name);

const val = 10 ?? 20;
const val2 = undefined ?? 20;
const val3 = undefined ?? null ?? 30;
const val4 = 0 ?? null
console.log(val4);