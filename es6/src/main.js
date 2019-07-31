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

let name = 'Rob';
let template =
`<h1>Hello ${name}</h1>
<p>This is a simple template</p>`;
document.getElementById('template').innerHTML = template;
