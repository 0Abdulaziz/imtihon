
 var objArr =[
   {name:'Ali',price:200},
   {name:'Umid',price:800},
   {name:'Sardor',price:400}
 ];

 var objArr1 =[
   {name:'Akbar',price:800},
   {name:'Mahmud',price:900},
   {name:'Abdumalik',price:1000}
 ];

 var objArr2 =[
   {name:'Abdumalik',price:1100},
   {name:'Abdurashid',price:1200},
   {name:'Abdujabor',price:1300}
 ];

 var objArr3 =[
   {name:'Abdulaziz',price:1800},
   {name:'Ubaydullo',price:1500},
   {name:'Nurullo',price:1500}
 ];

 const maxValue = Math.max(...objArr.map(val => val.price),0);
 const maxValue1 = Math.max(...objArr1.map(val => val.price),0);
 const maxValue2 = Math.max(...objArr2.map(val => val.price),0);
 const maxValue3 = Math.max(...objArr3.map(val => val.price),0);
 console.log(maxValue);
 console.log(maxValue1);
 console.log(maxValue2);
 console.log(maxValue3);
