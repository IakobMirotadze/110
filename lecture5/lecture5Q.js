// 10% (1.1), -5, < 100 ვუთხრათ რომ შეავსოს ბალანსი, თუარადა მადლობა მოვუხადოთ.
var users = [60, 100, -0.01]

function checkBalance(balance) {
    // var balance = 100;
    if(balance < 0) {
        return true
    }
    console.log(balance)
    balance *=1.1;
    balance -= 5;
    if(balance < 100){
        console.log( 'შეავსეთ ბალანსი')
    }else {
        console.log('მადლობა')
    }
}


var newUsers = users.filter(checkBalance)
console.log(newUsers)