var ls = {
    x: null,
    init: function () {
        //init(){
        x = document.getElementById('myTest');
        //console.log(x.innerHTML);
    }
}
window.onload = ls.init;


// DOMContentLoaded은 HTML과 script가 로드된 시점에 발생하는 이벤트로 load 이벤트보다 먼저 발생한다. (IE 9 이상 지원)
// 새로고침이 클릭되었을 때, 웹페이지가 처음 로딩되었을 때, 현 페이지(예를들어 loclahost:5003/#service)를 요청하므로 index.html이 재로드되고 DOMContentLoaded 이벤트가 발생하여 router가 호출된다.
//window.addEventListener('DOMContentLoaded', router);


//자바스크립트는 ES6의 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅(Hoisting)한다.

//함수는 객체이다. 따라서 함수도 프로퍼티를 가질 수 있다.

// 기명 즉시실행함수(named immediately-invoked function expression)
(function myFunction() {
    //
}());

// 익명 즉시실행함수(immediately-invoked function expression)
(function () {
    //
}());

//내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근할 수 있다. 하지만 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다.
//또한 내부함수는 부모함수의 외부에서 접근할 수 없다.

// var str = 'test';
// console.log(typeof str);                 // string
// console.log(str.constructor === String); // true
// console.dir(str);

var strObj = new String('test');
console.log(typeof strObj);                 // object
console.log(strObj.constructor === String); // true
console.dir(strObj);

console.log(str.toUpperCase());    // TEST
console.log(strObj.toUpperCase()); // TEST

