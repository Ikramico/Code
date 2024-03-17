class Student{
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
shafak.introduce();