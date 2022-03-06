var counter = 0;
function counterTrue(chektrue){
   for(var i =0 ; i<chektrue.length; i++){
      if (chektrue[i]===true){
         counter++;
      }
   }
   return counter;
}

chektrue =[ true,false, true, true,true];
console.log("truedan " + counterTrue(chektrue));