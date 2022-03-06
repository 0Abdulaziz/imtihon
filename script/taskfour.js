var arr =[
  {name:'Ali',price:200},
  {name:'Umid',price:800},
  {name:'Sardor',price:400}
];
var arr =[
  {name:'Akbar',price:800},
  {name:'Mahmud',price:900},
  {name:'Abdumalik',price:1000}
];

const value = Math.max(...arr.map((value)=> value.price));
console.log(arr.find((element) => element.price ===value).name);