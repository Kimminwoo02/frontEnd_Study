const numbers = [ 5,6,-7,8,44, 0,16];
// const aryCopy = numbers; 
const aryCopy = [ ...numbers ]
let max_Num = Math.max(...numbers);
console.log(max_Num);
max_Num = Math.max(...[1,2,3]);
console.log(max_Num);

const obj = { x:1, y:2 }
const copy = { ...obj }
console.log( copy );
console.log( copy === obj );

const merged = { x:1 , y:2 , ...{ a:3, b:4 }}
console.log( merged )

const array1 = ['one', 'two'];
const [one, two] = array1; 
console.log( one, two);

const [ a, b, ...other] = numbers;
console.log( a ); //5
console.log( b ); //6
console.log( other ); // 3번째 이후의 나머지값 