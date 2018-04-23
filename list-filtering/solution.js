function filter_list(l) {
let result = l.filter((x) => {
return typeof x === 'number'
});
return result;
}