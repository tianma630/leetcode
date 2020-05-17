/*
普通函数: 谁调用就指向谁。
箭头函数: 调用者指向谁，则指向谁。
逗号表达式: 返回最后一个表达式
bind apply call: 手动改变this指向 箭头函数的this指向无法改变
*/
var age = 10;
var person={
   age:20,
   getAge(){
       var age = 30;
       return this.age;
    },
};
alert(age,age*2);

person.getAge(); 

var b = person.getAge;
b(); 

(person.getAge)(); 

(1,person.getAge)();

(1,person.getAge.bind(person))();

(person.getAge,person.getAge)();

(person.getAge=person.getAge)();

person.getAge.call(); 

person.getAge.call(person);

function getAge2() {
    this.age = 40;
    console.log(person.getAge());
};
getAge2();
console.log(age);

function getAge3(){
    this.age = 50;
    this.getAge4 = ()=>{
        console.log(person.getAge.call(this));
    }
}
new getAge3().getAge4();
console.log(age);

function getAge4(){
    this.age = 60;
    this.getAge5 = ()=>{
    console.log(person.getAge.call(this));
    }
}
new getAge4().getAge5();
console.log(age);

var age2 = 10;
var person2={
   age2:20,
   getAge2:()=>{
       var age2 = 30;
       return this.age2;    
    },
};
console.log(person2.getAge2.call());
console.log(person2.getAge2.call(person2));