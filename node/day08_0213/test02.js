// 기존의 데이터를 변형해서 새로운 배열을 리턴 
const  numbers1 = [ 1,2,3,4,5]; 
const result1 = numbers1.map(number=>number * 2);
console.log( result1 );

const result2 = numbers1.map(number=>number + 10);
console.log( result2 );

const students = [
  { id:1, name:'kim', age:30}, 
  { id:2, name:'park', age:33}, 
  { id:3, name:'hong', age:20}, 
  { id:4, name:'park', age:42}, 
]

const result3 = students.map( student=> student.name );
console.log( result3 );

const aryTwo = [ [1,2,3], [4, 5, 6], [ 7,8,9]];
const result4 = aryTwo.map( ary => ary.map( n=>n*2) );
// 
console.log( result4 );
