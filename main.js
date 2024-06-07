var add = function (a, b) { return (a + b); };
console.log(add(15, 20));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var person = new Person("Alice", 30);
console.log(person.getName());
person.setAge(31);
console.log(person.getAge());
var person1 = new Person('Abduvali', 20);
console.log("Person name: ".concat(person1.getName(), "\nPerson age: ").concat(person1.getAge()));
