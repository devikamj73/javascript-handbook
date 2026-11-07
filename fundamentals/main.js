// alert("hello user");
console.error("this is an error");
console.warn("this is warning");

const hisname = "alexander";
const age = 30;
const rating = 3.4
const isCool = true;
const salary = null;
const wife = undefined;
let parents;

console.log(typeof age);
console.log(typeof wife);
console.log(typeof parent);
console.log(typeof salary);
console.log(typeof hisname);

console.log("welcome " + hisname + ", your age is " + age);
console.log(`hello ${hisname}`);

console.log(hisname.length);
console.log(hisname.substring(0,5).toUpperCase())
console.log(hisname.split(''))
console.log(hisname.split(' '))
const s = 'alpha, beta, gamma, delta';
console.log(s.split(', '))

//ARRAYS
const array = ['apple', 'mango', 10, true, 'kiwi']; //generally used method to create an array
console.log(array);
const array2 = new Array('abc', 'cde', 'hello') // creating array using contructors (ie, new keyword represents constructor)
console.log(array2);
//to return an item from array
console.log(array2[1]);
//to add new item
array2[3] = 'efghi'
console.log(array2)
//push a value
array2.push(20)
console.log(array2)
//push new items into start of array
array2.unshift(1)
console.log(array2)
//remove items - pops last item
array2.pop()
console.log(array2)
//check if something is an array or not
console.log(Array.isArray(array));
console.log(Array.isArray('hi'));
console.log(Array.isArray(array2));

//object are key-value pairs
const person = {
    firstname: 'mike',
    lastName: 'abc',
    age: 20,
    address: {
        houseNo: '91',
        city: 'blr',
        state: 'KA'
    },
    hobbies: ['paint', 'read', 'trading'],
    greet() {
        return `hi my name is ${this.firstname}`
    }
}

console.log(person.greet());
console.log(person.hobbies[2]);
console.log(person.address.city);

//adding more into object
person.email = 'abc@gmail.com'
console.log(person)

//array of objects
const todo = [
    {
        id: 1,
        task: 'finish hw',
        isComplete: true
    },
    {
        id: 2,
        task: 'play football',
        isComplete: false
    },
    {
        id: 3,
        task: 'visit doctor',
        isComplete: true
    }
]

console.log(todo[1].task);

//JSON data type looks very similar to object (it keeps keys and values under double quotes)
//convert object or array of obj to JSON to send it maybe to server:
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

        //LOOPS

//WHILE
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

//FOR
for(let i=0; i< 10; i++){
    console.log(i);
}

for(let i = 0; i<todo.length; i++){
    console.log(todo[i].isComplete);
}

//FOR OF
for(let x of todo){
    console.log(x.task);
}

//FOR EACH
todo.forEach(function(x){
    console.log(x.id);
});

//map; now map will return an array
const maparray = todo.map(
    function(x){
        return x.task;
    }
);
console.log(maparray);

//filter; again return an array
const filterarray = todo.filter(
    function(x){
        return x.isComplete == true; //returns completed task details in a new array
    }
).map(function(x){return x.task;}); //used map to get only completed tasks(no id or iscomplete printed) in the new array 
console.log(filterarray);

//CONDITIONALS
let x = '10' // == compares just the value. === compares value & data type. here '10' is string and 10 is number
if(x === 10){
    console.log('x is 10');
} else if(x > 100){
    console.log('x is greater than 100');
} else{
    console.log('x is not 10');
}

const a = 4;
const b = 6;
if(a<4 || b>4){
    console.log('hi');
}
if(a<10 && b>4){
    console.log('hi');
}

//turnary operation ? = then 'if':'if not'
const paint =100;
const color = paint < 10 ? 'red' : 'blue';
console.log(color);
//switch
switch(color) {
    case 'red':
        console.log('apple');
        break;
    case 'blue':
        console.log('ocean')
        break;
    default:
        console.log('leaf');
        break; 
}

        //FUNCTIONS
function addNum(Num1, Num2){
    return (Num1 + Num2);
}
console.log(addNum(5, 4));

//arrow fn vs traditional 
// Traditional
const mul = function(a, b) {
    return a * b;
};
console.log(mul(3,3));

// Arrow Function
const multiply = (a, b) => console.log(a * b);   
multiply(2,3);

const addition = (a, b) => a + b;
console.log(addition(9,4));