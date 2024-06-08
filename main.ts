let add: (a:number , b:number) => number = (a:number , b:number) : number => (a+b)




console.log(add( 15,20));



class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}

const person = new Person("Alice", 30);
console.log(person.getName());
person.setAge(31);
console.log(person.getAge());

let person1 = new Person('Abduvali', 20);

console.log(`Person name: ${person1.getName()}\nPerson age: ${person1.getAge()}`)


class BankAccount {
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }
}

const account = new BankAccount("123456789", 1000);
account.deposit(500);
console.log(account.getBalance());


class Car {
    private make: string;
    private model: string;
    private year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getMake(): string {
        return this.make;
    }

    public setMake(make: string): void {
        this.make = make;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }
}

const car = new Car("Toyota", "Camry", 2020);
console.log(car.getMake());
car.setYear(2021);
console.log(car.getYear());


class Employee {
    private id: number;
    private name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        if (salary > 0) {
            this.salary = salary;
        }
    }

    public giveRaise(percentage: number): void {
        if (percentage > 0) {
            this.salary += (this.salary * percentage) / 100;
        }
    }
}

const employee = new Employee(1, "Bob", 50000);
employee.giveRaise(10);
console.log(employee.getSalary());
employee.setSalary(60000);
console.log(employee.getSalary());



class Counter {
    private count: number = 0;

    public increment(): void {
        this.count++;
    }

    public reset(): void {
        this.count = 0;
    }

    public getCount(): number {
        return this.count;
    }
}

const counter = new Counter();
counter.increment();  
counter.reset();      
console.log(counter.getCount()); 



class Book {
    private title: string;
    private author: string;
    private price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        if (price > 0) {
            this.price = price;
        }
    }

    public discount(percentage: number): void {
        if (percentage > 0) {
            this.price -= (this.price * percentage) / 100;
        }
    }
}

const book = new Book("1984", "George Orwell", 20);
book.discount(10);
console.log(book.getPrice());
book.setPrice(18);
console.log(book.getPrice());


class Persons {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        if (age >= 0) {
            this.age = age;
        } else {
            console.log("Invalid age");
        }
    }
}



