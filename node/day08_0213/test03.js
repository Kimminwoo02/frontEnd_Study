// reduce = sum : 누적합계구하는 고차함수
const PriceList = [ 1500, 300, 4000];
let sum = 0; 
for( var a = 0; a<PriceList.length ; a++){
   sum += PriceList[a];
}
console.log( sum);

const sum2 = PriceList.reduce((sum, crrentValue)=>sum+crrentValue);
console.log( sum2);

const numbers = [ 5,6,-7,8,44, 0,16];
const sum3 = numbers.reduce( (prev, next)=>prev*next);
console.log( sum3 );

const students = [
  { id:1, name:'kim', age:30}, 
  { id:2, name:'park', age:33}, 
  { id:3, name:'hong', age:20}, 
  { id:4, name:'park', age:42}, 
]

const sum4 = students.reduce( (adding, currentValue)=>adding + currentValue.age , 0);

console.log( 'sum4 = ' + sum4 );

const fruits = ['바나나', '딸기', '사과'];
const strFruits = fruits.reduce((prev, next)=>prev+next);
console.log( strFruits ); 

const strFruits2 = fruits.reduce((prev, next)=>prev.concat(next));
console.log( strFruits2 ); 

const fruitsTow = [['바나나', '딸기', '사과'], ['새우깡', '감자깡']];
const two = fruitsTow.reduce((prev, next)=>prev.concat(next));
console.log( two );

two.sort();
console.log(two);
