const obj1 = { one:1, two:2, other:0 }
const obj2 = { three:3, four:4 }
const comObj = { ...obj1, ...obj2}
console.log(comObj);

const {one} = obj1;
console.log( one ) ;

let two = 9; 
let { two : myNum } = obj1; 
console.log(two);
console.log(myNum);

const [ a, , b ] = [1,2,3];
console.log('a :', a, 'b :', b);

const [ e, f, c=99 ] = [1,2];
console.log('e :', e, 'f :', f ,'c : ', c);

const user = { name: 'kim',  age: 30};
const { name, email = 'jemicom'  } = user; 
console.log( name, email);
