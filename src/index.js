"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*-----------------Basic types---------------*/
var q = 1;
var str = 'string'; //String
var num = 10; //Number
var bool = true; //Boolean
var unknown = "1"; //Any Type
var otherUnknown = 1; //String Or Number...
/*------------------Array types----------------*/
var numArray = [1, 2, 3]; //Array from numbers
var numArrayT = [1, 2, 3]; //Array from numbers
var strArray = ['1', '2', '3']; //Array from Strings
var strArrayT = ['1', '2', '3']; //Array from Strings
var boolArray = [true, false]; //Array from Booleans
var boolArrayT = [true, false]; //Array from Booleans
var anyTypeArray = [1, 2, '3']; //Any--tuples
/*--------------Function(Methods)------------------*/
var myName = 'XXL';
var myAge = 25;
function getMyName() {
    return myName;
}
console.log(getMyName());
function getMyAge() {
    return myAge;
}
console.log(getMyAge());
function getMyAgeWithParam(age, prefix) {
    if (prefix === void 0) { prefix = 'xxl'; }
    return prefix + age;
}
console.log(getMyAgeWithParam(40, 'XXL'));
console.log(getMyAgeWithParam(40)); // here prefix use their default value
function consoleLog(str) {
    console.log(str);
}
consoleLog('Void Type Functions');
var mySum; //Simple variable!
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 6));
mySum = sum; //mySum now has link to sum!
console.log(mySum(5, 6)); //has the same result!
var testFunc = function () { return 1 + 1; };
var testFuncIdent = function () {
    return 1 + 1;
};
/*----------------------Objects----------------------*/
var user = {
    name: 'User',
    age: 50,
    jobs: ['a', 'b'],
    logName: function () {
        console.log(this.name);
    }
};
var user2 = {
    name: 'Max',
    age: 26,
    jobs: ['2', '5'],
    getJobs: function () {
        return this.jobs;
    },
    logJobs: function () {
        console.log(this.getJobs());
    }
};
var user1 = {
    name: 'User',
    age: 25
};
function logUser1(user) {
    console.log(user.name + ' ' + user.age);
}
logUser1(user1);
/*-------------------Universal types--------------------*/
var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 1] = "Backend";
    Job[Job["Desinger"] = 2] = "Desinger";
})(Job || (Job = {}));
var job = Job.Backend;
console.log(job);
function throwNewError(err) {
    throw new Error(err);
}
var myNumber;
myNumber = 0;
/*----------------Class---------------*/
var User3 = /** @class */ (function () {
    function User3(name, isTeacher, age) {
        this.name = name;
        this.isTeacher = isTeacher;
        this.age = age;
    }
    User3.prototype.getAge = function () {
        return this.age;
    };
    return User3;
}());
var user3 = new User3('bmd', false, 30);
console.log(user3);
console.log(user3.getAge());
/*----------------Inheritance-------------------*/
var WFM = /** @class */ (function (_super) {
    __extends(WFM, _super);
    function WFM(age) {
        return _super.call(this, 'WFM', false, age) || this;
    }
    return WFM;
}(User3));
var wfm = new WFM(21);
console.log(wfm);
/*---------------Abstract Classes--------------*/
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = 'Mercedes';
        return _this;
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log(this.model + ' ' + info);
    };
    return Mercedes;
}(Car));
var car = new Mercedes();
console.log(car);
function getLength(variable) {
    console.log('getLength', variable.length);
}
var box = {
    name: 'WFM',
    length: 20
};
getLength(box);
getLength([1, 2, 3, 1, 4]);
var userI = {
    name: 'WFM-IUser', age: 26,
    logInfo: function (info) {
        console.log('Info ', info);
    }
};
var UserIUser = /** @class */ (function () {
    function UserIUser() {
        this.name = 'userIuser';
    }
    UserIUser.prototype.logInfo = function (info) {
        console.log(info);
    };
    return UserIUser;
}());
/*-------------Generics--------------*/
function genericGetter(data) {
    return data;
}
console.log(genericGetter('WFM-Gneric').length);
console.log(genericGetter(100));
var newGenericFunction = genericGetter;
console.log(newGenericFunction('WFM-newGneric').length);
console.log(newGenericFunction(100));
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return +this.a + +this.b;
    };
    return Multiply;
}());
var mNum = new Multiply(10, 5);
console.log('Result: ' + mNum.getResult());
var mStr = new Multiply('10', '5');
console.log('Result: ' + mStr.getResult());
/*---------------------Decorators----------------------*/
function logger(constrFn) {
    console.log(constrFn);
}
function shouldLog(flag) {
    return flag ? logger : null;
}
var UserDec = /** @class */ (function () {
    function UserDec(name, age) {
        this.name = name;
        this.age = age;
        console.log('I am new UserDec');
    }
    UserDec = __decorate([
        shouldLog(true)
    ], UserDec);
    return UserDec;
}());
function addShowAbility(constructorFn) {
    constructorFn.prototype.showHtml = function () {
        var pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    };
}
var UserNewDec = /** @class */ (function () {
    function UserNewDec(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        console.log('I am new UserDec');
    }
    UserNewDec = __decorate([
        addShowAbility
    ], UserNewDec);
    return UserNewDec;
}());
var userNewDec = new UserNewDec('userNewDec', 65, 'Backend');
console.log(userNewDec);
userNewDec.showHtml();
/*-----------------NameSpaces----------------*/
var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(d) {
        return typeof d === 'undefined';
    }
    Util.isUndefined = isUndefined;
    var PI = Math.PI;
    var EXP = Math.E;
})(Util || (Util = {}));
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('sa'));
console.log(Util.isUndefined(20));
console.log(Util.isUndefined(null));
console.log(Util.isUndefined(undefined));
/*---------------TypeScriptAndWebPack-------------*/ 
//# sourceMappingURL=index.js.map