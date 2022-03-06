var numbers = [1,0,3,0,5,7,0,4,0];

function zeroEnd(numbers){
   var c = 0;
   for(var a = 0; a < numbers.length; a++){
      for(var b = a + 1; b < numbers.length; b++){
         if(numbers[a] == 0){
            c = numbers[a];
            numbers[a] = numbers[b];
            numbers[b] = c;
         }
      }
   }
   var num = numbers.toString();
   num = numbers.join('')
   return num;
}
console.log("Arrayning ichidegi raqamlar string holatta " + zeroEnd(numbers))



