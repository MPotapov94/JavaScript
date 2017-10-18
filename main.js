//Простые типы******************************************************************
var myNumber = 20,
    myString = "Some string",
    myBool = true,
    myNull = null,
    myUnder = undefined;

console.log(typeof(myNumber)); //number
console.log(typeof(myString));//string
console.log(typeof(myBool));//boolean
console.log(typeof(myNull));//object!!!!!!!!!!!!!!!!!
console.log(typeof(myUnder));//undefined
console.log("asd".toUpperCase());

//Объектные типы
var obj = {name: "sorax"},
    array = [1,2,3],
    regexp = /w+/g,
    func = function(){};

console.log("");
console.log(typeof(obj)); //object
console.log(typeof(array));//object
console.log(typeof(regexp));//object
console.log(typeof(func));//function

//Строки************************************************************************
console.log("Some string");
console.log('Another string');
console.log('Some "long" string');
console.log("Some 'long' string");
console.log("Hello there".length);
console.log("Another\nvery long\n\t string\
Hello");

var string = "Sometimes the same is different";
console.log(string.charAt(0));//Возвращение символа по индексу
console.log(string.substring(10));//Возвращение подстроки с 10 символа
console.log(string.slice(-10));//тоже саое что ти substring, но есть возможность принимать отр значения
console.log(string.substr(0, 5));//возваращает подстарку с 0 сивола длиной 5
console.log(string.indexOf("i"));//Возвращает индекс первого вхождения i
console.log(string.lastIndexOf("i"));//С конца строки Возвращает индекс первого вхождения i
console.log(string.replace("is", "is not"));//Заменить подстроку в строке(is на is not)
console.log(string.split(" "));//Разбивает строку на массив с разделителе " "
console.log(string.toUpperCase());//Привидение к верхнему регистру
console.log(string.toLowerCase());//Привидение к нижнему регистру

//Логические значения***********************************************************
//Falsy values

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
//&& ||

var a = 0,
    isTrue = true;
isTrue && (a=5);
console.log(a);

var someString = ""
var newString = someString || "Default String";
console.log(newString);

//Null - пустое значение undefined - отсутсвие
var temp;
var obj = {}
var a = [1,2,3,4];

console.log(temp);//undefined
console.log(obj.property);//undefined
console.log(a[4]);//undefined

function greet(name){
  return "Hello "+ name;//без return возвращается undefined
}
console.log(greet());//Hello undefined
console.log(null == undefined);//true
console.log(null===undefined);//false

//Преобразование типов**********************************************************
console.log(5 + "5");//55
console.log(typeof(5 + "5"));//string
console.log("5" * "4");//20
console.log(typeof("5" * "4"));//number
console.log("5" * "hi"); //NaN
console.log(typeof("5" * "hi"));//number

console.log("5" == 5); //true
console.log("0" == false); //true
console.log(Boolean("0"));//false !!!!!!!!!!!!!!!!(Верхний пример

//Конструкторы соответсвующих типов

console.log(Number("555"));
console.log(typeof(Number("555")));
console.log(String(324));
console.log(typeof(String(324)));
console.log(Boolean(1));
console.log(typeof(Boolean(1)));

//быстро преобразовать
console.log(!!5); //true (перевели в логический тип)
console.log(!!0);//false
console.log(typeof(345 + "")); //string
console.log(typeof(+"454"));//number

var num = 22;
console.log(num.toString());
console.log(num.toString(2));//В качестве аргумента передае систему исчисления в коком хотим вывести

//Глобальные функции преобрзаования
console.log(parseInt("45 px 0", 10));//вывод 45 (px -игнорируется, 10 систеа исч не обязательный)
console.log(parseFloat("12.45 em"));//12.45

//Условные инструкции***********************************************************
if(true) console.log("Its true");
if(false) console.log("Its true");
var n = 5;
//if, else, else if, switch case brake, default:
//тернарные оперции
//Выражение1 ? выражение2 : Выражение3
var text = x >10 ? "x больше 10": "x меньше либо равен 10";
var x=5;
text = x>10? "х больше 10": x<10? "х меньше 10": "x равен десяти";
//Запятая
var test = (15,20); //sest присвоится правое значение т.е 20
console.log((test,"Hello"));//Вывод Hello

//Циклы*************************************************************************
//for(;;)console.log("He");//бесконечный цикл
//while() do{}while
//Функции***********************************************************************
var grF = function functionName(name) {//Ананимная функция (как объект)
  return "Hello "+ name;
};
//если передали аргументов больше то просто игнорируются, если меньше то у недост undefined
var Test = function (a,b,c) {
  console.log(arguments);//получить все агрументы в функции
  console.log("a : "+ a +"\nb :" + b +"\nc :" + c);
}
Test(1,2);

var func = function(callback){
  var name = "Sorax";
  callback(name);
}

func(function(n){
  console.log("Hello " + n);
});

var F = function() {
  return function(){
    console.log("Hi");
  }
};

F()();

//Ананманая самовызывающаяся функция
var gree = function (name) {
  return "Hello "+ name;
}("Sorax"); //Заносим выполнение функции в переенную

console.log(typeof(gree));

//Цепочки областей видимости****************************************************
//локальне переменные только в функциях!!! Функции могут быьт вложенны
var i = 5;
console.log(i);
var Fun1 = function () {
  var i = 10;
  console.log(i);
  var innerFunc = function(){
    var i = 15;
    console.log(i);
    //var i = 15; если использовать после вызова то будет undefined а не облать видиости которая выше
  };
  innerFunc();
};

console.log(Fun1());


//Замыкания***********************************************************************
var FX = function(){
  var i = 100;
  return function(){
    return i;
  }
};

var anotherFX = function() {
  var i = 200;
  console.log(FX()());
}
console.log(FX()());
anotherFX();

//Счетчик

var counter = function(){
  var count = 0;
  return function(){//создается объект с переменными поэтому сохр значения
    return count ++;
  }
}();

console.log(counter());
console.log(counter());
console.log(counter());
//Оптиизируе для установления старта
var counterS = function(){
  var count = 0;
  return function (start) {
    count = start !== undefined ? start : count;
    return count++;
  }
}();

console.log(counterS());
console.log(counterS());
console.log(counterS(6));
console.log(counterS());

//Поскольку функция объект можно реализовать так

var cou = function (nu) {
//  cou.c = nu !== undefined? nu:cou.c;
  return cou.c++;
};
cou.c = 6767;
console.log(cou());
console.log(cou());
