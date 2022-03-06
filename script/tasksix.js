 const obj = ([
   {num1: 100, num2: 200, num3: 50, num4: 150},
   {num1: 100, num2: 200, num3: 50, num4: 150},
   {num1: 100, num2: 200, num3: 50, num4: 150}
 ]);

 const values = Object.values(obj);
 const max = Math.max(...values);
 console.log(max); 