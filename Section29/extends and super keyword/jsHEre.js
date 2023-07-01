class Pet {
    constructor(name, age) {
        console.log('In Pet Construction');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesleft){
        console.log('In Cat Construction');
        super(name, age); // calling the parent class with its own arguments and properties
        this.livesLeft=livesleft;
    }
    meow() {
        return 'MeoWWWWWW';
    }
}

class Dog extends Pet {
    bark(){
        return 'WoooF';
    }
    eat() {
        return `${this.name} scarfs his food`;
    }
}