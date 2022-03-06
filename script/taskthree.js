var numbers = [1,3,-5,5,-7,-4,8,28];
var son1 = 0;
function zeroEnd(numbers){
   for(var i = 0; i<numbers.length;i++){
      if(numbers[i]>0 ){
         son1+=numbers[i];

      }
   }
   return son1;
}
console.log("Elementni massivini jami =" + zeroEnd(numbers));








