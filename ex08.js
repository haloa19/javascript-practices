var o = {
    name: "둘리",
    age: 10,
    isFemale: false
};

var f = function() {
console.log("hello world");
}

var i = 10;
var n = new Number(10);


f();
//window.f();

console.log(o);
//console.log(window.o);

console.log("=========== 객체는 확장 가능 (Object, function)===========");

o.another = {
    name: "마이콜",
    age: 30
};

f.another = {
    name: "또치",
    age: 10,
    info: function() {
        console.log(this.name + ":" + this.age);
    }
};

console.log(f.another);
f.another.info();

console.log("================ 기본타입은 확장 X ==================");
i.another = {};
console.log(i.another);