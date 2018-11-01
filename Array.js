// 创建数组
var fruits = ['Apple','Banana'];
console.log(fruits.length);

// 通过索引访问数组元素
var first = fruits[0];

var last = fruits[fruits.length - 1];

// 遍历数组
fruits.forEach(function (item, index, array) {
	console.log(item,index);
});

// 添加元素到数组的末尾
var newLength = fruits.push('Orange');
console.log(fruits);

// 删除数组最前面（头部）的元素
var last = fruits.pop();
console.log(fruits);

// 添加元素到数组的头部
var newLenght2 = fruits.unshift('Strawberry');
console.log(fruits);

// 找出某个元素在数组中的索引
fruits.push('Mango');
var pos = fruits.indexOf('Banana');
console.log(pos);

// 通过索引删除某个元素
var removeItem = fruits.splice(pos,1);
console.log(fruits);

// 从一个索引位置删除多个元素
//var vegetables = []

// 复制一个数组
var shallowCopy = fruits.slice();
console.log(shallowCopy);