// function Shape(){
//     if(this.constructor === Shape){
//         throw new Error("Cannot instantiate abstract Shape ");     
//     }
// }

// function Rectangle(width , height){
//     Shape.call(this)
//     this.width=width;
//     this.height=height;
//     Rectangle.count++;

// }
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;
// Rectangle.count=0;
// Rectangle.prototype.calculateArea= function(){
//     return this.width * this.height;
// }

// Rectangle.prototype.calculatePerimeter = function(){
//     return 2 * (this.width + this.height);
// }

// Rectangle.prototype.toString= function(){
//     return "The width : " + this.width + " The height " + this.height +" The area " + this.calculateArea() +" The perimeter " + this.calculatePerimeter() 

// }

// Rectangle.numberOfCounts = function () {
//     return Rectangle.count;
// };

// function Square(side) {
//     Rectangle.call(this, side, side);
// }
// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.toString = function() {
//     return "Square: side = " + this.width + 
//            ", area = " + this.calculateArea() + 
//            ", perimeter = " + this.calculatePerimeter();
// };

// var rect = new Rectangle(2, 5);

// console.log(rect.calculateArea());
// console.log(rect.calculatePerimeter());
// console.log(rect.toString());
// console.log(Rectangle.numberOfCounts());

// const square = new Square(5);
// console.log(square.calculateArea());      
// console.log(square.calculatePerimeter()); 
// console.log(square.toString());          



// Bonus

// function Shape() {
//     if (this.constructor === Shape) {
//         throw new Error("Cannot instantiate abstract Shape ");
//     }
// }

// function Rectangle(width, height) {
//     if (Rectangle.instanceExists) {
//         throw new Error("Only one Rectangle object is allowed");
//     }
//     Shape.call(this);
//     this.width = width;
//     this.height = height;
//     Rectangle.count++;
//     Rectangle.instanceExists = true; 
// }

// Rectangle.count = 0;
// Rectangle.instanceExists = false;

// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// Rectangle.prototype.calculateArea = function() {
//     return this.width * this.height;
// };

// Rectangle.prototype.calculatePerimeter = function() {
//     return 2 * (this.width + this.height);
// };

// Rectangle.prototype.toString = function() {
//     return "Rectangle: width = " + this.width + 
//            ", height = " + this.height + 
//            ", area = " + this.calculateArea() + 
//            ", perimeter = " + this.calculatePerimeter();
// };


// Rectangle.numberOfCounts = function () {
//     return Rectangle.count;
// };

// function Square(side) {
//     if (Square.instanceExists) {
//         throw new Error("Only one Square object is allowed");
//     }
//     Rectangle.call(this, side, side);
//     Square.instanceExists = true; 
// }

// Square.instanceExists = false;

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.toString = function() {
//     return "Square: side = " + this.width + 
//            ", area = " + this.calculateArea() + 
//            ", perimeter = " + this.calculatePerimeter();
// };


// var rect = new Rectangle(2, 5);
// console.log(rect.calculateArea());
// console.log(rect.calculatePerimeter());
// console.log(rect.toString());
// console.log(Rectangle.numberOfCounts());

// const square = new Square(5);
// console.log(square.calculateArea());      
// console.log(square.calculatePerimeter()); 
// console.log(square.toString());           

// const square2 = new Square(3);




// task2

function Person(name, age) {
    var _name = name;
    var _age = age;

    this.getName = function() {
        return _name;
    };
    this.getAge = function() {
        return _age;
    };

    this.setName = function(name) {
        if (typeof name === 'string' && name.length > 0) {
            _name = name;
        } else {
            throw new Error("Name mustn't be empty string");
        }
    };
    this.setAge = function(age) {
        if (Number.isInteger(age) && age >= 0) {
            _age = age;
        } else {
            throw new Error("Age must be a positive integer");
        }
    };
}

Person.prototype.introduce = function() {
    return "I'm " + this.getName() + " and I'm " + this.getAge() + " years old.";
};

function Employee(name, age, salary) {
    Person.call(this, name, age);
    var _salary = salary;
    Employee.employeeCount++;

    this.getSalary = function() {
        return _salary;
    };

    this.setSalary = function(salary) {
        if (typeof salary === 'number' && salary >= 0) {
            _salary = salary;
        } else {
            throw new Error("Salary must be a positive number");
        }
    };
}

Employee.employeeCount = 0;

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function() {
    return this.getName() + " is working for $" + this.getSalary() + ".";
};

Employee.displayHTRules = function() {
    return "HR Rules: work hour from 10am :2pm  .   2 days vacation per week";
};

Employee.getEmployeeCount = function() {
    return Employee.employeeCount;
};

function Student(name, age, studentId) {
    Person.call(this, name, age);
    var _studentId = studentId;

    this.getStudentId = function() {
        return _studentId;
    };

    this.setStudentId = function(studentId) {
        if (typeof studentId === 'string' && studentId.length > 0) {
            _studentId = studentId;
        } else {
            throw new Error("Student ID must be a non-empty string");
        }
    };
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    return this.getName() + " with ID " + this.getStudentId() + " is studying.";
};

var person = new Person("rania", 24);
console.log(person.introduce());

var employee = new Employee("ahmad", 25, 50000);
console.log(employee.introduce());
console.log(employee.work());
console.log(Employee.displayHTRules());
console.log(Employee.getEmployeeCount());

var student = new Student("nour", 30, "444");
console.log(student.introduce());
console.log(student.study());

var employee2 = new Employee("sara", 29, 60000);
console.log(Employee.getEmployeeCount());