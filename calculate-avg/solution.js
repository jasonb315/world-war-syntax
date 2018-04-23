function find_average(array) {
  let numbers = array.reduce((acc, cur) => {
  return (acc + cur)
  })
  return numbers/array.length;
};