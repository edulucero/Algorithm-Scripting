function smallestCommons(arr) {

  let min =  Math.min.apply( Math, arr)
  console.log(min)
  let max =  Math.max.apply( Math, arr)
  console.log(max)
  let x = max

  while(true) {
    for(let i = max; i >= min; i--){
      if(x % i != 0) {
        ++x
        break
      } else {
        continue
      }
    }
  }
  console.log(x)
  return x;
}



smallestCommons([23,18]);
