class Vehicle {
    constructor(protected make: string, protected model: string) {}

    getDetails(): void {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make: string, model: string, private doors: number) {
        super(make, model);
    }

    getCarDetails(): void {
        console.log(`Make: ${this.make}, Model: ${this.model}, Doors: ${this.doors}`);
    }
}

const car = new Car("Toyota", "Corolla", 4);
car.getDetails(); 
car.getCarDetails();




class Animal {
    constructor(protected name: string) { }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark(): void {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.makeSound();
dog.bark(); 







class Account {
    constructor(protected accountNumber: string, protected balance: number) {}

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdraw amount");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    applyInterest(): void {
        const interest = this.balance * this.interestRate / 100;
        this.balance += interest;
        console.log(`Applied ${this.interestRate}% interest. New balance: ${this.balance}`);
    }
}



const savingsAccount = new SavingsAccount("123456", 1000, 5);
savingsAccount.deposit(500);
savingsAccount.applyInterest(); 
savingsAccount.withdraw(200); 



class Shape {
    constructor(protected color: string) {}

    describe(): void {
        console.log(`This is a ${this.color} shape.`);
    }
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    describeCircle(): void {
        console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
    }
}



const circle = new Circle("red", 5);
circle.describe(); 
circle.describeCircle(); 
console.log(`Area: ${circle.area()}`); 






class Employee {
    constructor(protected name: string, protected position: string) {}

    work(): void {
        console.log(`${this.name} is working as a ${this.position}.`);
    }
}

class Manager extends Employee {
    constructor(name: string) {
        super(name, "Manager");
    }

    manage(): void {
        console.log(`${this.name} is managing the team.`);
    }
}


const manager = new Manager("Alice");
manager.work(); 
manager.manage(); 





