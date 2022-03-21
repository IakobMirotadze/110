// const user = {
//     name: 'iakob',
//     lastName: 'mirotadze',
//     age: 32,
//     fullName: function (){
//         return this.name + ' ' + this.lastName
//     }
// }

// console.log(user.fullName())

// function testFunction (){
//     this.name = 'iakob';
//     console.log(this.name)
// }

// console.log(new testFunction())



// user.name = 'luka'

// const arr = [user, user,user];

// arr[1].name = 'giorgi'
// // luka
// console.log(arr[0])class testFunction {



function testFunction (){
    this.name = 'iakob';
    console.log(this.name)
}

new testFunction()


class testClass {
    constructor() {
        this.name = 'iakob';
        this.age = 32;
        this.lastName = 'mirotadze'
    }

    grow(){
        this.age ++;
    }

    fullName() {
        return this.name + ' ' +this.lastName
    }
}

const user1 = new testClass()

console.log(user)
console.log(user.fullName())
// ....
user.grow()

console.log(user)