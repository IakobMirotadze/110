const user1 = {
    name: 'iakob',
    lastName: 'mirotadze',
    age: 32,
    fullName: function (){
        return this.name + ' ' + this.lastName
    }
}


class UserCreator{
    constructor(defaultName) {
        this.name = 'amirani';
        console.log(defaultName)

        this.lastName = 'mirotadze'
        this.age = 32
    }

    fullName() {
        return this.name + ' ' + this.lastName
    }
}

const user2 = new UserCreator('iakobi')

const user3 = new UserCreator()

console.log(user1)
console.log(user2)
console.log(user2.fullName())

const name = 'iakobi'
const testString = `მე მქვია ${name}`

