let name = 'immoc'
let course = 'React开发App'
console.log('hello' + name + ',course is' + course)
console.log(`hello ${name} course is ${course}`)

function hello(name) {
    console.log(`this is my name ${name}`)
}

const hello1 = (name) => {
    console.log(`this is my name ${name}`)
}

hello('YHY');
hello1('YHY')

// setInterval(() => {
//     // hello1('YHY')
// },1000)

const he = (name1, name2) => {
    console.log(`haha ${name1} a& ${name2}`)
}
let arr = ['ali','li'];
he(...arr)

let obj = {name:'lily', age:'12'}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const name2 = 'imooc';
const obj1 = {
    name2,
    [name2]:'hello imooc',
    hello1:function(){},
    hello2(){}
}
console.log(obj1)

const oobj1 = {
    name:'lily',
    age:'22'
}

const oobj2 = {
    haha:'ert',
    ok:'pppp'
}
console.log({...oobj1, ...oobj2, type:"IT"})

const {haha,ok} = oobj2;
console.log(haha,ok)

class  MyApp {
    constructor (ok) {
        this.name = ok
    }
    sayHello () {
        console.log(`heelo ${this.name}`)
    }
}

const hel = new MyApp('hahahahah')
hel.sayHello()