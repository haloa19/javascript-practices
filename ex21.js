// function 객체 메소드 call test

global.name = "nodejs";
var f = function(s){
    console.log(s + " " + this.name);
}

f("hello");

var o = {
    name: "jhjin1106"
}
f.call(o, "hi");