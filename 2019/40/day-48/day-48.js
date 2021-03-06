// Array

// Initializing an array
const days = new Array();
console.log(days);
// []
const days1 = new Array(5);
days1[2] = 3;
console.log(days1);
// [empty × 2, 3, empty × 2]
const days2 = new Array(1, 2, 3, 4, 5);
console.log(days2);
// [1, 2, 3, 4, 5]
const days3 = [6, 7, 8, 9, 10];
console.log(days3);
console.log(days3.length);
// [6, 7, 8, 9, 10]
// 5

// Destructuring arrays
const [x, y] = [1, 2];
console.log(x, y);
// 1 2

// Add items to an array with push() and unshift()
const numbers = [3, 4];
numbers.unshift(1, 2);
console.log(numbers);
// [1, 2, 3, 4]
numbers.push(5);
console.log(numbers);
// [1, 2, 3, 4, 5]

// Remove items from an array with pop() and shift()
const items = ['one', 'two', 'three'];
items.pop();
console.log(items);
// ["one", "two"]
items.shift();
console.log(items);
// ["two"]

// Remove items using splice()
const array = ['one', 'two', 'three', 'four', 'five'];
array.splice(2, 2);
console.log(array);
// ["one", "two", "five"]

// Add items using splice()
const colorChange = (arr, index, newColor) => {
	arr.splice(index, 1, newColor);
	return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];
colorScheme = colorChange(colorScheme, 2, "#332327");
console.log(colorScheme);
// ["#878787", "#a08794", "#332327", "#c9b6be", "#d1becf"] // #bb7e8c to #332327

// Copy an array with slice()
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(weatherConditions);
console.log(todaysWeather);
// ["rain", "snow", "sleet", "hail", "clear"]
// ["snow", "sleet"]

// Copy an array with spread syntax
const array1 = [true, true, undefined, false, null];
const array2 = [...array1];
console.log(array1);
console.log(array2);
// [true, true, undefined, false, null]
// [true, true, undefined, false, null]

// Check for the presence of an element with indexOf()
const fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
console.log(fruits.indexOf('dates')); //  -1
console.log(fruits.indexOf('oranges')); // 2
console.log(fruits.indexOf('pears')); // 1

// Iterate through all the items in an array
const example = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(example([12, 8, 14, 80, 0]));
// [12, 14, 80]

// Create complex nested arrays
// two-dimensional & multidimensional
const nestedArray = [
	['deep'],
	[
		['deeper'], ['deeper']
	],
	[
		[
			['deepest'], ['deepest']
		],
		[
			[
				['deepest-est?']
			]
		]
	],
];
console.log(nestedArray[2][1][0][0][0]);
// deepest-est?

nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);
// deeper still

// Combining arrays with spread syntax
const thisArray = ['three', 'four', 'five'];
const thatArray = ['one', 'two', ...thisArray, 'six'];
console.log(thatArray);
// ["one", "two", "three", "four", "five", "six"]

// Object

// Initializing an object
const user = new Object();
user.name = 'Nerd';
console.log(user);
// {name: "Nerd"}
const user1 = Object.create(null);
user1['name'] = 'Hemerson';
console.log(user1);
// {name: "Hemerson"}
const name = 'Hemerson';
const user2 = {name};
console.log(user2);
// {name: "Hemerson"}
const user3 = {name: 'Item 1', name: 'Item 2'};
console.log(user3);
// {name: "Item 2"}

// Destructuring objects
const {name, age} = { name: 'Hemerson', age: 33 };
console.log(name, age);
// Hemerson 33

// Use the Delete Keyword to Remove Object Properties
const foods = {
	apples: 10,
	oranges: 2,
	plums: 8,
	bananas: 3
};

delete foods.oranges;
delete foods.plums;
delete foods.bananas;
console.log(foods);
// {apples: 10}

// Check if an Object has a Property
const users4 = {
	nerd: {
		age: 33,
		online: true
	}
};

const hasOwnProperty = (prop, obj) => prop in obj ? true : false;
console.log(hasOwnProperty('nerd', users4));
console.log(users4.hasOwnProperty('nerd'));
// true
// true

// Iterate Through the Keys of an Object with a for...in Statement
const users5 = {
	nerd: {
		age: 33,
		online: false
	},
	hemerson: {
		age: 43,
		online: true
	},
	calistenico: {
		age: 23,
		online: true
	},
};

const countOnline = obj => {
	let n = 0;
	for (let user in obj) {
    if (obj[user].online) {
      n++;
    }
  }
	return n;
};

console.log(countOnline(users5));
// 2

// Generate an Array of All Object Keys with Object.keys()
const users6 = {
	nerd: {
		age: 33,
		online: false
	},
	hemerson: {
		age: 43,
		online: true
	},
	calistenico: {
		age: 23,
		online: true
	},
};

const getArrayOfUsers = obj => Object.keys(obj);
console.log(getArrayOfUsers(users6));
// ["nerd", "hemerson", "calistenico"]

// Modify an Array Stored in an Object
const user = {
	name: 'Nerd',
	age: 33,
	data: {
		username: 'nerd123',
		items: ['book', 'tv']
	}
};

const addItems = (user, item) => {
	user.data.items.push(item);
	return user;
}
console.log(addItems(user, 'computer'));
// { name: 'Nerd', age: 33, data: { username: 'nerd123', items: ['book', 'tv', 'computer'] } }

// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget);
// { a: 1, b: 4, c: 5 }
// { a: 1, b: 4, c: 5 }

// Object.is()
const obj1 = {
  item1: '1',
  item2: '2',
  item3: '3',
  item4: '4'
}

const obj2 = obj1;
const obj3 = Object.assign({}, obj1);
console.log(Object.is(obj1, obj2)); // true
console.log(Object.is(obj1, obj3)); // false
console.log(obj3);
// {item1: "1", item2: "2", item3: "3", item4: "4"}

// Object.freeze()

const obj4 = {
  item1: '1',
  item2: '2',
  item3: '3',
  item4: '4'
}

obj4.item1 = '11';
obj4.item5 = '5‍';

Object.freeze(obj4);

obj4.item1 = '111';
obj4.item6 = '6';
delete obj4.item3;

console.log(obj4);
// {item1: "11", item2: "2", item3: "3", item4: "4", item5: "5‍"}
