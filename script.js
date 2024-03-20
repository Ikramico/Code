/*class Student{

    constructor(id, name, course){
        this.id= id
        this.name = name
        this.course= course 
    }

    introduce(){
        console.log(`I am ${this.name}, studying in ${this.course} and my id is ${this.id}`)
    }
}
let mimok = new Student('02554','mimok', 'web development');
let shafak = new Student('5961', 'shafak', 'english');

mimok.introduce();
shafak.introduce();*/
let arr = [10,50,78,86,94,105,87];
let str = ['me','you', 'him']

let newArr = arr.concat(str);
console.log(newArr);
// console.log(Math.floor(Math.random()*100));
console.log(arr.copyWithin(0,3,6))