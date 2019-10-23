/*-----------------Basic types---------------*/
const q = 1;
let str:string = 'string'; //String

let num:number = 10;//Number

let bool:boolean = true;//Boolean

let unknown:any = "1";//Any Type

let otherUnknown:string|number = 1;//String Or Number...

/*------------------Array types----------------*/
let numArray:number[] = [1,2,3];//Array from numbers
let numArrayT:Array<number> = [1,2,3];//Array from numbers

let strArray:string[] = ['1','2','3'];//Array from Strings
let strArrayT:Array<string> = ['1','2','3'];//Array from Strings

let boolArray:boolean[] = [true,false];//Array from Booleans
let boolArrayT:Array<boolean> = [true,false];//Array from Booleans

let anyTypeArray:[number,number,string] = [1,2,'3'];//Any--tuples

/*--------------Function(Methods)------------------*/

const myName:string = 'XXL';
const myAge:number = 25;

function getMyName():string {
    return myName;

}

console.log(getMyName());

function getMyAge():number {
    return myAge;
}

console.log(getMyAge());

function getMyAgeWithParam(age:number,prefix:string='xxl'):string { //prefix has default value !
    return prefix+age;

}

console.log(getMyAgeWithParam(40,'XXL'));

console.log(getMyAgeWithParam(40)); // here prefix use their default value

function consoleLog(str:string):void {//hasn't return type!
    console.log(str);

}
consoleLog('Void Type Functions');

let mySum; //Simple variable!
function sum(num1:number,num2:number):number {
    return num1+num2;

}
console.log(sum(5,6));
mySum=sum;//mySum now has link to sum!
console.log(mySum(5,6));//has the same result!

const testFunc = () => 1+1;
const testFuncIdent = function () {
    return 1+1;
    
};

/*----------------------Objects----------------------*/
let user:{name:string,age:number,jobs:string[],logName:()=>void} = {
    name:'User',
    age:50,
    jobs:['a','b'],
    logName() {
        console.log(this.name)
    }
};

type User = {name:string,age:number,jobs:string[],getJobs:()=>string[],logJobs?:()=>void}; //Creat our custom Type!--- set ? before : if not important

let user2:User = {
    name:'Max',
    age:26,
    jobs:['2','5'],
    getJobs():string[]{
        return this.jobs;
    },
    logJobs(){
        console.log(this.getJobs())
    }
};

/*--------------------CompilerAndConfigure --------------------*/

type User1  = {name:string,age:number};

const user1:User1 = {
    name:'User',
    age:25
};
function logUser1(user:User1):void {
    console.log(user.name+' '+user.age);

}
logUser1(user1);

/*-------------------Universal types--------------------*/
enum Job {
    Frontend,
    Backend,
    Desinger
}

const  job:Job = Job.Backend;
console.log(job);

function throwNewError(err:string):never {
    throw new Error(err);
}

let myNumber: number| null
myNumber=0;

/*----------------Class---------------*/
class User3 {

    name: string; //default public
    private isTeacher: boolean;
    protected age: number;

    constructor(name: string,isTeacher:boolean,age:number) {
        this.name = name;
        this.isTeacher = isTeacher;
        this.age = age;
    }

    getAge():number{
        return this.age;
    }
}
const user3 = new User3('bmd',false,30);
console.log (user3);

console.log(user3.getAge());

/*----------------Inheritance-------------------*/

class WFM extends User3{
    constructor(age:number){
        super('WFM',false,age);
    }
}

const wfm = new WFM(21);
console.log(wfm);

/*---------------Abstract Classes--------------*/
abstract class Car {
    model: string | undefined
    year:number=2010;

    abstract logInfo(info:string):void;

    getCarYear():number{
        return this.year;
    }
}

class Mercedes extends Car{
    model='Mercedes';
    logInfo(info: string): void {
        console.log(this.model+' '+info);
    }

}

const car = new Mercedes();
console.log(car);

/*---------------Interfaces--------*/
interface ILength {
    length:number;
}
function getLength(variable:ILength):void {
    console.log('getLength',variable.length)
}

const box = {
    name:'WFM',
    length:20
};
getLength(box);
getLength([1,2,3,1,4]);

interface IUser {
    name: string;
    age?: number;

    logInfo(info:string):void;

}

const userI: IUser = {
    name:'WFM-IUser',age: 26,
    logInfo(info: string): void {
        console.log('Info ',info);
    }
};

class UserIUser implements IUser{
    name: string = 'userIuser';

    logInfo(info: string): void {
        console.log(info);
    }

}
/*-------------Generics--------------*/
function genericGetter<T>(data:T):T{
    return data;
}

console.log(genericGetter<string>('WFM-Gneric').length);
console.log(genericGetter<number>(100));

let newGenericFunction:<T>(d:T) => T = genericGetter;

console.log(newGenericFunction<string>('WFM-newGneric').length);
console.log(newGenericFunction<number>(100));

class Multiply<T extends number|string> {
    constructor(private a: T,private b:T){

    }

    public getResult():number{
        return +this.a + +this.b;
    }
}

const mNum:Multiply<number> = new Multiply(10,5);
console.log('Result: '+mNum.getResult());

const mStr:Multiply<string> = new Multiply('10','5');
console.log('Result: '+mStr.getResult());

/*---------------------Decorators----------------------*/


function logger(constrFn:Function) {
    console.log(constrFn);
}

function shouldLog(flag:boolean):any {
    return flag ? logger:null;
}

@shouldLog(true)
class UserDec{
   constructor(public name:string,public age:number){
       console.log('I am new UserDec')
   }
}


function addShowAbility(constructorFn:Function) {
    constructorFn.prototype.showHtml = function () {
        const pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    }
}


@addShowAbility
class UserNewDec{
    constructor(public name:string,public age:number,public job:string){
        console.log('I am new UserDec')
    }
}

let userNewDec = new UserNewDec('userNewDec',65,'Backend');
console.log(userNewDec);
(<any>userNewDec).showHtml();

/*-----------------NameSpaces----------------*/





namespace Util{
    export function isEmpty(d:any):boolean {
        return !d;
    }
    export function isUndefined(d:any):boolean {
        return typeof d==='undefined';
    }

    const PI = Math.PI;
    const EXP = Math.E;

}

console.log(Util.isEmpty(''));
console.log(Util.isEmpty('sa'));



console.log(Util.isUndefined(20));
console.log(Util.isUndefined(null));
console.log(Util.isUndefined(undefined));
/*---------------TypeScriptAndWebPack-------------*/

//npm init
//npm install --save-dev webpack typescript
//npm install -g webpack
//npm i awesome-typescript-loader
//npm i awesome-typescript-loader --save-dev
//npm install webpack-cli -g
//change webpack.config.js>module>loaders to rules
//webpack