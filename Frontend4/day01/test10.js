const person1 = { name: 'kim', age: 20 };
const person2 = { name: 'hong', age: 22 };
const person3 = { name: 'park', age: 23 };

// function 으로 클래스를 생성

function Person(name, age) {

    return { name, age };
}

const person4 = Person('ahn', 44);
//일반함수
console.log(person3);
console.log(person4);

const person5 = new Person('kim', 5);
//생성자 함수
console.log(person5);

function People(name, age) {
    this.name = name;
    this.age = age;
    return { name, age };
    return this;
}

const person6 = new People('bea', 34);
console.log(person6);