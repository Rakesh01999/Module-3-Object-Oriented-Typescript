"use strict";
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
{
    // oop - inheritance
    var Person = /** @class */ (function () {
        function Person(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        Person.prototype.getSleep = function (numOfHour) {
            console.log("".concat(this.name, " will sleep for ").concat(numOfHour));
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, address) {
            return _super.call(this, name, age, address) || this;
        }
        return Student;
    }(Person));
    var student1 = new Student("mr. student", 20, "Uganda");
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher(name, age, address, designation) {
            var _this = _super.call(this, name, age, address) || this;
            _this.designation = designation;
            return _this;
        }
        Teacher.prototype.takeClass = function (numOfClass) {
            console.log("".concat(this.name, " will take class ").concat(numOfClass));
        };
        return Teacher;
    }(Person));
    var teacher1 = new Teacher("Mr. Teacher", 46, "Wakanda", "teacher");
    // teacher1. --> shows all the property 
    // 
}
