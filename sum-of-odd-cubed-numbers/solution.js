function cubeOdd(arr) {

let check = (/[a-z]/).test(arr);
if (check) { 
return (undefined) 
} else {
let cubed = arr.map(e => e * e * e);
let filtered = cubed.filter((val) => {return (val % 2)});
let reduced = filtered.reduce((acc, e) => acc + e, 0);
return reduced; }
    
};