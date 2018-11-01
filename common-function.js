// reduce
// array.reduce(callback,[initialValue])
//callback: parameter:
// previousValue(accumulator) : 上一次调用返回的值 (累加器)
// currentValue : 数组中当前被处理的元素 (当前值)
// currentIndex : 当前元素在数组中的索引 (当前索引)
// array ；调用reduce的数组 (数据源)
//initialValue 
const arrayReduce = [1, 2, 3, 4];
const reducer = (accumulator,currentValue) => accumulator + currentValue;

console.log(arrayReduce.reduce(reducer));

console.log(arrayReduce.reduce(reducer,5));


// filter 返回通过测试的元素组成的新数组
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);


// map
var arrayMap = [1,2,9,16];
const newMap = arrayMap.map(x => x * 2);
console.log(newMap);

// every 返回数组中的所有元素是否通过了指定函数的测试
function isBelowThreshold(currentValue) {
    return currentValue < 40;
}

var array6 = [1, 30, 39, 29, 10, 13];
console.log(array6.every(isBelowThreshold));

//some 测试数组中的某些元素是否通过由提供函数实现的测试
var array66 = [1, 2, 3, 4, 5];
var even = function(element) {
    return element % 2 === 0;
};

console.log(array66.some(even));


//  函数indexOf返回某字符在字符串中的位置
var str = '123';
console.log(str.indexOf('3'));

// 检索指定字符串中指定的字符，如果没有则返回-1
console.log(str.search('4'));

//  
var teststr = '123,34,3';
var reg = RegExp(/23/);
console.log(teststr.match(reg));

console.log(reg.test(str));

//6227003860240288289