// 변수의 범위
// 1. 자바스크립트는 자바와 같은  block scope는 없다.
// 2. function의 {} 안에서 변수에 var를 사용하게 되면 function scope가 된다.
// 3. let(es6), const(es6)는 Block Scope를 만든다.
var i = 10;
var f = function() {
	var i = 20; // var를 쓰면 지역번수
	j = 100; // var를 쓰지 않으면 전역변수
	console.log(i);
	i = i - 1;
}

{
	let x = 10000000;
	const PI = 3.14;
	x = 100;
	// 상수이기 때문에 오류
	//PI = 0;
}

{
	var y = 100;
	console.log(y);
}

// 접근 불가
// console.log(x);
// console.log(y);
// f();
// console.log(i);
// console.log(j);