const person = { name: 'kim', age: 20, color: 'red' };

console.log(person.name);
console.log(person.age);
console.log(person.color);

//객체 출력시 많이 사용
//하지만 forEach를 더 많이 사용한다.
for (key in person) {
    console.log(key);
}

// 배열 출력시 사용한다.
const people = ['red', 'green', 'blue'];
for (value of people) {
    console.log(value);
}

people.forEach(function(p, index) {
    console.log(p, index);
})