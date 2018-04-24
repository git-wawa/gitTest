var app = new Vue({
    el: '#app',
    data: {
        message: 'hello~',
        myClass: 'my-class' // key name에 하이픈 넣으면 에러남.
    }
});
app.message += '이렇게 접근이 가능하군.';

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
//app3.seen = false; //엘리먼트 자체를 없애버리네...

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '가나다라' },
            { text: 'ABCD' },
            { text: '1234' }
        ]
    }
})
app4.todos.push({ text: '동해물과 백두산이' });

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: '아아아아아아아아아'
    },
    methods: {
        clickFnName : function(){
//console.log(this.message)
            this.message = '가나다라마바';
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '하하하하'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.id }}, {{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 1, text: '가나다라' },
            { id: 2, text: 'ABCD' },
            { id: 3, text: '1234' }
        ]
    }
})
