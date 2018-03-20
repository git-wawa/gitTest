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