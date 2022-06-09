const maca = {
  value: 2,
};
const laranja ={
  value: 3,
};
const nums = [1,2,5,8];

function mapComThis(arr, thisArg){
  return arr.map(function(item) {
    return item * this.value; 
  }, thisArg);
}

console.log("this --> ", mapComThis(nums, maca));
console.log("this --> ", mapComThis(nums, laranja));
