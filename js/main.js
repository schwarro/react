//this referring to specific object that you are in

//house
//part of the global/window scope
this.table = 'window';
console.log(window.table);

const clearnTable = function() {
  console.log(`cleaning ${this.table}`);
  //will not work

  const innerFunction = function() {

  }
  //this is an inner function
};

cleanTable.call(this);
//execute method on window table
//using call on a different object using a different method

this.garage = {
  table: 'garage table'
};

console.log(this.garage.table);
//garage table
//same as window.garage.table

//this inside an object
let johnsRoom = {
  table: 'johns table',
  //adding method to an object
  cleanTable() {
    console.log(`cleaning ${this.table}`)
    //cleaning the table in John's room specifically, not the garage
  }
};
console.log(johnsRoom.table);
//cannot use this key word because it's not accessible

//method gets called with
johnsRoom.cleanTable();

//this in a constructor
let createRoom = function(name) {
  this.table = `${name}s room`
}
//create jill's room
const jillsRoom = new createRoom('jill');
