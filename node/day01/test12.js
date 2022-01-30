const num = {
    0: 0,
    1: 1,
    2: 2,
};

console.log(num['0']);


let count = 0;
num['age_' + ++count] = count * count;
num['age_' + ++count] = count * count;
num['age_' + ++count] = count * count;
num['age_' + ++count] = count * count;
num['age_' + ++count] = count * count;




for (key in num) {
    console.log(key);
}

console.log(num);
console.log(num.age_4);
console.log(num['age_4']);