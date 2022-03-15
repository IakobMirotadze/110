// 10% (1.1), -5, < 100 ვუთხრათ რომ შეავსოს ბალანსი, თუარადა მადლობა მოვუხადოთ.
var users = [60, 100, -0.01]

function checkBalance(balance) {
    // var balance = 100;
    if(balance < 0) {
        return
    }
    console.log(balance)
    balance *=1.1;
    balance -= 5;
    if(balance < 100){
        console.log( 'შეავსეთ ბალანსი')
    }else {
        console.log('მადლობა')
    }
    return true;
}


var newUsers = users.filter(checkBalance)
console.log(newUsers)

for(var i =0 ; i< users.length; i++){
    checkBalance(users[i])
}
// forEach, filter, map. find

// push, pop, splice, slice  -----
var users = [0,1,2,3,4,5,6,7,8,9,10]
var splittedUsers = users.splice(3, 5)
console.log(splittedUsers, users)