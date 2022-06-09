function filtrarPar(arr){
  return arr.filter((item) => item % 2 === 0);
}

const arr = [1,6,5,7,8,9,24];
console.log(filtrarPar(arr));