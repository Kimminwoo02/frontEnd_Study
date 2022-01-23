const empty = {};
// 빈 객체

empty.name = 'kim';
empty['age'] = 20;
empty.add = function(a, b) {
    return a + b;
}


console.log(empty);
console.log(empty.add(10, 20));


// document.querySelector('.selector').style.backgroundColor = 'color';

// $('selector').css({'bacground-color':'red'});
