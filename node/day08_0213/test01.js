// 기존의 값을 추출해서 새로운 배열로 리턴 

const  snacks = ['새우깡', '감자깡', '꿀꽈배기', '콘칩', '에이스'];
//const result1 = snacks.filter((snack)=>{ return snack.length>3});
const result1 = snacks.filter(snack=>snack.length>3);
console.log( result1.toString() );

const result2 = snacks.filter(snack=>snack.indexOf('깡')>-1);
console.log( result2 );

const numbers = [ 5,6,-7,8,44, 0,16]
const result3 = numbers.filter(number=>number>12);
console.log( result3 );

const result4 = numbers.filter(number=>number%2==0);
console.log( result4 );

const students = [
  { id:1, name:'kim', age:30}, 
  { id:2, name:'park', age:33}, 
  { id:3, name:'hong', age:20}, 
  { id:4, name:'park', age:42}, 
]

const result6 = students.filter( student=> student.age>30 );
console.log( result6 );

