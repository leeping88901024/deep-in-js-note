// 注意下面的x

let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => {
	console.log(a);
	console.log(b);
	console.log(c);
	//console.log(x);
	// x is not defined
	return a + b + c;
}
console.log(f());

function Person2() {
	this.age = 0;

	setInterval(function growUp() {
		// 此处的this是growUp的
		this.age ++;
	}, 1000);
}


// 函数的this
function Person() {
	var that = this;
	that.age = 0;

	setInterval(function growUp() {
		// 回调函数引用的是that变量，其值是预期的对象
		that.age ++;
		console.log(that.age);
	}, 1000)
}

function Person3() {
	this.age = 0;

	setInterval(() => {
		// 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。
		this.age++;
	}, 1000);
}

var p = new Person3();