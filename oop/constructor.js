// Constructor Function (non parameter)
// function Person() {
//   this.firstName = '';
//   this.lastName = '';
//   this.sayHallo = function (name) {
//     console.log(`Hallo ${name}, nama saya ${this.firstName}`);
//   };
// }

// const hadi = new Person();
// hadi.firstName = 'Miftahul';
// hadi.lastName = 'Hadi';
// hadi.sayHallo('hadi');

// Constructor Function (parameter)

// function Person(firstName, lastName) {
//   (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.sayHallo = function (name) {
//       console.log(
//         `Hallo ${name}, nama depan saya ${this.firstName}, dan nama belakang saya ${this.lastName}`
//       );
//     });
// }

// const name = new Person('Miftahul', 'Hadi');
// name.sayHallo('joko');

// Construktur Inheritance

// 1
// function Student(firstName) {
//   this.firstName = firstName;
//   this.sayHello = function (name) {
//     console.log(`Hallo ${name} My Name is ${this.firstName}${this.lastName}`);
//   };
// }

// function Teacher(firstName, lastName) {
//   Student.call(this, firstName);
//   this.lastName = lastName;
// }

// 2
// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.sayHello = function (name) {
//     console.log(`Hallo ${name} My Name is ${this.firstName}${this.lastName}`);
//   };
// }

// function Teacher(firstName, lastName) {
//   Student.call(this, firstName, lastName);
// }

const call = new Teacher('Miftahul ', 'Hadi');
console.log(call);
call.sayHello('Aufa');
