function capitalize(s){
  let set1=[];
  let set2=[];
  let set = s.split('');
  for (let i = 0; i < set.length; i++) {
    if(i % 2 == 0) {
      set1.push(set[i].toUpperCase());
      set2.push(set[i]);
    } else {
      set1.push(set[i]);
      set2.push(set[i].toUpperCase());
      }
    };
  return [set1.join(''), set2.join('')];
};