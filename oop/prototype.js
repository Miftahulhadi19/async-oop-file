// const person = {
//   name: ['Miftahul', 'hadi'],
//   age: 23,
// };
// function logProperti(propertiName) {
//   console.log(person[propertiName]);
// }

// logProperti('name');
// logProperti('age');

// const person1 = {
//   name: 'Jhon',
//   introduceSelf() {
//     console.log(`Hi My Name is ${this.name}`);
//   },
// };

// function cetak(name) {
//   return name.introduceSelf();
// }
// cetak(person1);

// function createPerson(name) {
//   let obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi My Name is ${this.name}`);
//   };
//   return obj;
// }
// const nama = createPerson('Miftah');
// nama.name;
// nama.introduceSelf();

// const cat = {
//   name: 'Bertie',
//   breed: 'Cymric',
//   color: 'white',
//   greeting: function () {
//     console.log('Meow!');
//   },
// };
// const myObject = {
//   city: 'Madrid',
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// Prototype
// function Person(firstName, lastName) {
//   (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.sayHallo = function (name) {
//       console.log(
//         `Hallo ${name}, nama depan saya ${this.firstName}, dan nama belakang saya ${this.lastName}`
//       );
//     });
// }

// Person.prototype.sayBye = function () {
//   console.log(`Hallo ${this.firstName}`);
// };
// const name1 = new Person('Miftahul', 'Hadi');
// const name2 = new Person('aufa', 'baladika');

// console.log(name1);
// console.log(name2);
// name1.sayBye();

// Prototype inheritence
function Manager(name) {
  this.name = name;
}

function Employe(name) {
  this.name = name;
}

Manager.prototype = Employe.prototype;
Manager.prototype = Object.create(Employe.prototype);

Manager.prototype.sayHello = function (nama) {
  console.log(`Hello ${nama} this is Manager ${this.name}`);
};
Employe.prototype.sayHello = function (nama) {
  console.log(`Hello ${nama} this is Employe ${this.name}`);
};

const employe = new Employe('sama');
employe.sayHello('hadi');
const manager = new Manager('Aufa');
manager.sayHello('baladika');

console.log(employe);
console.log(manager);
