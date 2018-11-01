const colors = {
	red: '#ff0000',
	green: '#00ff00',
	blue: '0000ff'
};

//colors = {};
console.log(colors);
colors.red = '#ffffff';
console.log(colors);

Object.freeze(colors);
colors.red = '#000000';

console.log(colors);

// cant't freeze nested objects
const orders = {
	bread: {
		price: 10
	},
	milk: {
		price: 20
	}
};

Object.freeze(orders);
orders.milk.price -= 15;
console.log(orders.milk.price);

//  third-part libiaries 
// deep-freeze
// ImmutableJS

// 不变
var statement = 'I am immutable value';
var otherStr = statement.slice(8,17);
console.log(statement);
console.log(otherStr);

// 变
var arr = [];
console.log(arr.length);
var v2 = arr.push(2);
console.log(arr.length);

// var person = new ImmutableMap({name: 'Chris',age: 32});
// var oldPerson = person.set('age',33);

// console.log(person.toObject());
// console.log(oldPerson.toObject());



