const obj = {
  name:'kim',
  age:20,
  hobby:['working', 'massage']
}

const json = JSON.stringify(obj);
//console.log( typeof json, json);
const parsed = JSON.parse(json); 
//console.log( typeof parsed, parsed);

const prettyJson = JSON.stringify( obj, null, 2);
// console.log( typeof prettyJson, prettyJson);

function filter(key, value){
    return typeof value === 'number' ? undefined : value;
}
const filterJson = JSON.stringify( obj, filter, 2);
// console.log( typeof filterJson, filterJson);


const todolist = [
    { id:1, content:'html', completed : true},
    { id:2, content:'css', completed : true},
    { id:3, content:'javascript', completed : false},
    { id:4, content:'react', completed : false},
]

const objJson = JSON.stringify(todolist, null, 2 );
console.log( objJson );
const objPasred = JSON.parse( objJson );
console.log( objPasred );