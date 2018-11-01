/**
* javascript属性：
* （1）私有属性
* （2）原型属性
* （3）实例属性
* （4）类属性
*
*/

var a = function () {
	var x = 'a'   // 私有属性
	this.z = 'c'  // 实例属性
}
a.y = 'b'  // 类属性
a.prototype.m = 'd'  // 原型属性