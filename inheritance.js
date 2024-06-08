var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.getDetails = function () {
        console.log("Make: ".concat(this.make, ", Model: ").concat(this.model));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, doors) {
        var _this = _super.call(this, make, model) || this;
        _this.doors = doors;
        return _this;
    }
    Car.prototype.getCarDetails = function () {
        console.log("Make: ".concat(this.make, ", Model: ").concat(this.model, ", Doors: ").concat(this.doors));
    };
    return Car;
}(Vehicle));
var car = new Car("Toyota", "Corolla", 4);
car.getDetails();
car.getCarDetails();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}(Animal));
var dog = new Dog("Rex");
dog.makeSound();
dog.bark();
var Account = /** @class */ (function () {
    function Account(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited ".concat(amount, ". New balance: ").concat(this.balance));
        }
        else {
            console.log("Invalid deposit amount");
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew ".concat(amount, ". New balance: ").concat(this.balance));
        }
        else {
            console.log("Invalid withdraw amount");
        }
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.applyInterest = function () {
        var interest = this.balance * this.interestRate / 100;
        this.balance += interest;
        console.log("Applied ".concat(this.interestRate, "% interest. New balance: ").concat(this.balance));
    };
    return SavingsAccount;
}(Account));
var savingsAccount = new SavingsAccount("123456", 1000, 5);
savingsAccount.deposit(500);
savingsAccount.applyInterest();
savingsAccount.withdraw(200);
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.describe = function () {
        console.log("This is a ".concat(this.color, " shape."));
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.describeCircle = function () {
        console.log("This is a ".concat(this.color, " circle with radius ").concat(this.radius, "."));
    };
    return Circle;
}(Shape));
var circle = new Circle("red", 5);
circle.describe();
circle.describeCircle();
console.log("Area: ".concat(circle.area()));
var Employee = /** @class */ (function () {
    function Employee(name, position) {
        this.name = name;
        this.position = position;
    }
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " is working as a ").concat(this.position, "."));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name, "Manager") || this;
    }
    Manager.prototype.manage = function () {
        console.log("".concat(this.name, " is managing the team."));
    };
    return Manager;
}(Employee));
var manager = new Manager("Alice");
manager.work();
manager.manage();
