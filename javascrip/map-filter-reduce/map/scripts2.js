
const nums1 = [1,2,3,4,5];
const nums2 = [20,2,24,12];

function mapSemThis(arr){
  return arr.map((item) =>  item * 2 
  );
}

console.log("this --> ", mapSemThis(nums1));
console.log("this --> ", mapSemThis(nums2));
