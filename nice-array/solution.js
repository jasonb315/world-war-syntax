function isNice(arr){

  let trueCount = 0;
  
    for ( i = 0 ; i < arr.length ; i++ ) {
      if ( arr.includes(arr[i]+1) || arr.includes(arr[i]-1) ){
      trueCount += 1;
      }//close if
    }//close loop
      console.log('arr= ' + arr)
      console.log('truecount= ' + trueCount)
      if (trueCount !== arr.length && arr.length > 0 ){
      return false;
      } else if (trueCount === arr.length && arr.length > 0 ){
      return true;
      } else {
      return false; }
};
  