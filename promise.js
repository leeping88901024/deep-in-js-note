//Promise对象用于表示一个异步操作的最终状态（完成或失败），以及其返回值。
// var promise1 = new Promise((resolve,reject) => {
// 	/* executor */
// 	setTimeout(resolve('successd'),100,'foo');
// });

// var promise2 = new Promise((resolve,reject) => {
// 	resolve('someValue');
// });

// var promise3 = new Promise((resolve,reject) => {
// 	reject('someValue');
// });

// console.log(promise1.then((successMessage => console.log('Yay + successMessage'))));
// console.log(promise2);
// console.log(promise3);

const p2 = new Promise((resolve,reject) => {
	resolve(1);
});

p2.then(value => {
	console.log(value);
	return value + 1;
}).then(value => console.log(value))