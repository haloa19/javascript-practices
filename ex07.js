/*
 * 생성자 함수로 다각의 객체 생성
 */
 
 // 일반 함수 (관례 소문자로 시작)
 var myFunction = function() {
	console.log('일반함수');
}

// 생성자 함수 (관례 대문자로 시작) 


var o4 = new MyObject('둘리', 10);
var o5= new MyObject('마이콜', 20);

console.log(o4 + ":" + typeof(o4));
console.log(o5 + ":" + typeof(o5));