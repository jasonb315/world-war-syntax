function formatWords(words){

  if (words === null){
    return '';};
  
  for (i=0;i<words.length;i++){
    if(words[i] === ''){
      words.splice(i,1); i--;}
    };
  
  if (words.length === 0){
    return ''; 
  };
  
  if (words.length === 1){
    return words.toString();
  };
  
  if (words.length === 2){
    return words.join(' and ');
  };
  
  if (words.length > 2){
    
    let last2 = words.pop();
    let last1 = words.pop();
    let andPair = `${last1} and ${last2}`;
    let body = words.join(', ')
    let shiggigydobop = `${body}, ${andPair}`;

    return shiggigydobop;
    
  };

  };