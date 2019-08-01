//Let and Const

//var and let are the same on the global scope

// function testVar(){
//   var a = 30;
//   if(true) {
//     var a = 50;
//     console.log(a);
//   }
//   console.log(a);
// }
//
// function testLet() {
//   let a = 30;
//   if(true) {
//     let a = 50;
//     console.log(a);
//   }
//   console.log(a);
// }

// testLet();

// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// console.log(i)

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// console.log(i)

// const colors = [];
// colors.push('red');
// colors = "green";
// console.log(colors);

//------------------------------------------------

//Class and Inheritance

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//
//   static countUsers() {
//     console.log('There are 50 users');
//   }
//
//   register() {
//     console.log(this.username + ' is now registered');
//   }
// }
//
// // let bob = new User('bob', 'bob@email.com', 'password');
// // bob.register();
// // User.countUsers();
//
// class Member extends User {
//   constructor(username, email, password, memberPackage){
//     super(username, email, password);
//     this.package = memberPackage;
//   }
//   getPackage() {
//     console.log(this.username + ' is subscribed to the ' + this.package + ' package.');
//   }
// }
//
// let mike = new Member('mike', 'mike@email.com', '12345', 'standard');
// // mike.getPackage();
// mike.register();

//----------------------------------------------------------------------

//Template Literals

// let name = 'Rob';
// let template =
// `<h1>Hello ${name}</h1>
// <p>This is a simple template</p>`;
// document.getElementById('template').innerHTML = template;

//-------------------------------------------------------------------------

//String & Number Methods
//let string = "Hello";

//startsWith()
//endsWith()
//includes()

// console.log(string.startsWith('H'));
//returns true

// console.log(string.endsWith('l'));
//returns false

// console.log(string.includes('ll'));
//returns true

//console.log(Number.isFinite(3));
//returns true
//console.log(Number.isNaN(NaN));
//returns true
//console.log(Number.isInteger('string'));
//returns false

//--------------------------------------------------

//Default Params & Spread Operator

// function greet(greeting = 'hello') {
//   console.log(greeting)
// }
//
// greet();

// let args = [1,2,3];
// let arg = [4,5,6];
// function test() {
//   console.log(args + " + " + arg);
// }
//
// test(...args,...arg);

//-------------------------------------------------

// Set, Map, WeakSet, WeakMap

//let arr = [1, 2, 3, 4, 5];
//let set = new Set(arr);

//set.add(6);
//adds to array, can be any data
//set.add({a: 1, b: 2});
//adds object to array
//set.delete(3);
//deletes specific i
// set.clear();
//empties arr

// console.log(set);
// console.log(set.size);
//checks size of arr

// set.forEach(function(val){
//   console.log(val);
// });

//let map = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
//map.set('c3', 'foo');
//adds to Map
//map.delete('a1');
//deletes and goes by key
//console.log(map);

// let carWeakSet = new WeakSet();
//
// let car1 = {
//   make: 'Honda',
//   model: 'Civic',
// };
//
// let car2 = {
//   make: 'Mazda',
//   model: 'Mazda3',
// };
//
// carWeakSet.add(car1);
// carWeakSet.add(car2);
// carWeakSet.delete(car1);
// console.log(carWeakSet);

// let carWeakMap = new WeakMap();
//
// let key1 = {
//   id: 1,
//   make: 'Honda',
//   model: 'Civic',
// }
//
// carWeakMap.set(key1);
// carWeakMap.delete(key1);
// console.log(carWeakMap);
