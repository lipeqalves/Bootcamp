function somaNumeros(arr){
  return arr.reduce((prev, corrent) => {
      return prev + corrent;
  },0);
}

const num = [1,4,6];

console.log(somaNumeros(num));



