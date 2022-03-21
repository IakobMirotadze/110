// push, pop, splice, slice
// forEach, filter, map, find


// map example
var users = [60, 100, -0.01]
function mapping(item){
    return 'chemi balansia ' + item
}
var newArray = users.map(mapping)

console.log(newArray)


// objects in array
// var user = {
//     'name' : 'iakobi',
//     lastName: 'mirotadze',
//     balance: 120,
//     userVariable: 9000,
// }

//
// var user = {
//     'name' : 'iakobi',
//     lastName: 'mirotadze',
//     balance: 120,
//     userVariable: 9000,
// }
// var ka = {
//     user: 'მომხმარებელი'
// }

// var userVariable = 'name'
// // ===
// console.log(user['name']) //'iakobi'
// console.log(user.name)   // 'iakobi'


// // !==
// console.log(user[userVariable]) // 'iakobi'
// console.log(user.userVariable)  //  9000


// // ===
// console.log(user['userVariable']) // 9000
// console.log(user.userVariable)    //9000

//
// var usersArray = [
//     user,
//     {name: 'ilia', lastName: '..', balance: 2000},
//     {name: 'giorgi', lastName: '123123', balance: 0}
//     ]

// illias
// function findNegativeBalance(user){
//     return !user.balance
// }
//
// var foundUser = usersArray.find(findNegativeBalance)
// console.log(foundUser)

//  0,        '',        undefined,          null,                      **false
// number,    string,      // empty,         object, array,             **boolean
//                                            {}      []                  თუ გააჩნია მნიშვნელობა



//12 -> true, 'raime' -> true









// var, let, const

// var functional scope,
// let const block scope

//
// function testFunction (){
//
// }
//
// const testFunction = ()=> {
//
// // }
//
//
// function testFunction (){
//     const testString = 'raime'
//     testString = 120
//     if(testString) {
//         let user = {
//             'name' : 'iakobi',
//             lastName: 'mirotadze',
//             balance: 120,
//             userVariable: 9000,
//         }
//         let ka = {
//             user: 'მომხმარებელი'
//         }
//
//         // var userVariable = 'name'
//         // // ===
//         // console.log(user['name']) //'iakobi'
//         // console.log(user.name)   // 'iakobi'
//
//
//         // // !==
//         // console.log(user[userVariable]) // 'iakobi'
//         // console.log(user.userVariable)  //  9000
//
//
//         // // ===
//         // console.log(user['userVariable']) // 9000
//         // console.log(user.userVariable)    //9000
//
//
//         let usersArray = [
//             user,
//             {name: 'ilia', lastName: '..', balance: 2000},
//             {name: 'giorgi', lastName: '123123', balance: 0}
//             ]
//
//         // illias
//         function findNegativeBalance(user){
//             return !user.balance
//         }
//
//         let foundUser = usersArray.find(findNegativeBalance)
//         console.log(foundUser)
//     }
//     let checkType = 'raime axal mnishvnelobas'
//
//     console.log(checkType)
// }
// testFunction()
