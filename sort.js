var months = ['March','Jan','Feb','Dec'];
months.sort();
console.log(months);

var year = [2001,2002,2003,1995];
year.sort((a,b) => {
    b - a;
    //console.log(a);
    //console.log(b);
    console.log(b -a);
})
console.log(year);

year.map(y => y * 2);
console.log(year);


var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const object1 = {
    a:1,
    b:2,
    c:3
};

// 复制原对象到目标对象object2
const object2 = Object.assign({c:4,d:5},object1);

console.log(object2.c,object2.d);
const Object3 = [
    {
        name: 'lee',
        age: 24
    },
    {
        name: 'zhao',
        age: 30
    },
    {
        name: 'sun',
        age: 40
    }
];

const nextObject = Object3.map((person) => {
    if(person.age === 24) {
        // 合并有相同属性的对象
        return Object.assign({},person,{
            age: person.age + 1
        })
    } else {
        return person;
    }
});

console.log(nextObject);