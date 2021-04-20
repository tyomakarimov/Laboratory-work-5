'use strict';

// Array methods

const array1 = [17, 'A', 'Front-End', true, 27.17];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const products = [{ apples: 4 }, { potatoes: 5 }, { tomatoes: 2 }, { cucumbers: 1 }];

array1.forEach(value => console.log(value + 1));

array1.forEach((value, index, array) => {
  if (array[index + 1]) {
    const difference = String(value).length - String(array[index + 1]).length;
    console.log(difference);
  }
  else {
    const difference = String(value).length - String(array[0]).length;
    console.log(difference);
  }
});

const strings = array1.filter(value => typeof value === 'string');
console.log('strings:', strings);

const multipleOfThree = array2.filter(value => !(value % 3));
console.log('multipleOfThree', multipleOfThree);

const squares = array2.map(value => value ** 2);
console.log('squares:', squares);

const types = array1.map(value => typeof value);
console.log('types:', types);

const allElementsAreNumbers = array2.every(value => typeof value === 'number');
console.log('allElementsAreNumbers:', allElementsAreNumbers);

const allElementsAreStrings = array1.every(value => typeof value === 'string');
console.log('allElementsAreStrings:', allElementsAreStrings);

const someElementsAreBooleans = array1.some(value => typeof value === 'boolean');
console.log('someElementsAreBooleans:', someElementsAreBooleans);

const someElementsAreStrings = array2.some(value => typeof value === 'string');
console.log('someElementsAreStrings:', someElementsAreStrings);

const stringFromNumbers = array2.reduce((prev, curr) => prev.toString() + ' ' + curr.toString());
console.log('stringFromNumbers:', stringFromNumbers);

const factorialOfFive = array2.slice(0, 5).reduce((prev, curr) => prev * curr);
console.log('factorialOfFive:', factorialOfFive);

const stringFromNumbers2 = array2.reduceRight((prev, curr) => prev.toString() + ' ' + curr.toString(), '16');
console.log('stringFromNumbers2:', stringFromNumbers2);

const numberOfProducts = products.reduceRight((prev, curr) => prev + curr[Object.keys(curr)[0]], 0);
console.log('stringFromNumbers2:', numberOfProducts);

// Object Oriented Programming

function Person(name, age, sex, country, married) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.country = country;
  this.married = married;
  const that = this;
  const message = 'This is function';
  function outputAge() {
    return that.age;
  }
  this.showAge = function() {
    return outputAge();
  }
  this.showMessage = function() {
    return message;
  }
};

Person.prototype.aboutPerson = function() {
  return `${this.name} is ${this.age} years old. 
  ${this.sex === 'M' ? 'He' : 'She'} is from ${this.country} and is${this.married ? '' : ' not'} married.`
};

const person = new Person('Artem', 19, 'M', 'Ukraine', false);

console.log('person:', person);
console.log('person.age:', person.age);

function Ukrainian(name, age, sex, city, married) {
  Person.call(this, name, age, sex, 'Ukraine', married);
  this.city = city;
};

Ukrainian.prototype = Object.create(Person.prototype);

Ukrainian.prototype.constructor = Ukrainian;

const personFromUkraine = new Ukrainian('Maria', 30, 'F', 'Kyiv', true);

console.log('personFromUkraine instanceof Ukrainian:', personFromUkraine instanceof Ukrainian);
console.log('personFromUkraine instanceof Person:', personFromUkraine instanceof Person);

Ukrainian.prototype.aboutPerson = function() {
  return `${this.name} is ${this.age} years old. 
  ${this.sex === 'M' ? 'He' : 'She'} is from ${this.town} in Ukraine and is${this.married ? '' : ' not'} married.`
};

console.log(person.showAge());
console.log(person.showMessage());


// ES6 classes

class Individual {
  constructor(name, age, sex, country, married) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.country = country;
    this.married = married;
  }

  #message = 'This is class';

  #outputAge() {
    return this.age;
  }

  showAge() {
    return this.#outputAge()
  }

  showMessage() {
    return this.#message;
  }
}

const individual = new Individual('Artem', 19, 'M', 'Ukraine', false);

console.log('individual.married:', individual.married);

class American extends Individual {
  constructor(name, age, sex, city, married) {
    super(name, age, sex, 'The USA', married);
    this.city = city;
  }
}

const personFromUS = new American('Clarice', 47, 'F', 'Chicago', true);

console.log('personFromUS.city', personFromUS.city);
console.log('personFromUS instanceof American:', personFromUS instanceof American);
console.log('personFromUS instanceof Individual:', personFromUS instanceof Individual);