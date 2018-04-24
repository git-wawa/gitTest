/*
 * 실제로 v-on을 사용하면 몇가지 이점이 있습니다.
 * HTML 템플릿을 간단히 하여 JavaScript 코드 내에서 핸들러 함수 구현을 찾는 것이 더 쉽습니다.
 * JavaScript에서 이벤트 리스너를 수동으로 연결할 필요가 없으므로 ViewModel 코드는 순수 로직과 DOM이 필요하지 않습니다. 이렇게 하면 테스트가 쉬워집니다.
 * ViewModel이 파기되면 모든 이벤트 리스너가 자동으로 제거 됩니다. 이벤트 제거에 대한 걱정이 필요 없어집니다.
 */

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // 메소드는 `methods` 객체 안에 정의합니다
    methods: {
        greet: function (event) {
            // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
            alert('Hello ' + this.name + '!');
            // `event` 는 네이티브 DOM 이벤트입니다
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

var vm = new Vue({
    el: '#app-model',
    data: {
        aaa: true
    }
})

/*
 * 전역 컴포넌트를 등록하려면, Vue.component(tagName, options)를 사용합니다.
 * 루트 Vue 인스턴스를 인스턴스화하기 전에 컴포넌트가 등록되어 있는지 확인하십시오. 
 */
// 등록
Vue.component('my-component', {
    template: '<div>사용자 정의 컴포넌트 입니다!</div>'
})

// 루트 인스턴스 생성
new Vue({
    el: '#example1'
})

var Child = {
    template: '\
        <div>\
            사용자 정의 컴포넌트 입니다!!!!\
        </div>'

}
var ex1 = new Vue({
    el: '#example2',
    components: {
        // <my-component2> 는 상위 템플릿에서만 사용할 수 있습니다.
        'my-component2': Child
    }
})

var data = {
    counter: 0
}
Vue.component('simple-counter', {
    template: '<button type="button" v-on:click="counter+=1">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    }
})
var ex2 = new Vue({
    el: '#example-3'
})
/* var ex2 = new Vue({
    el: '#example-3',
    data: {
        counter: 0
    },
    components: {
        'simple-counter': {
            template: '<button type="button" v-on:click="counter+=1">{{ counter }}</button>',
            data: function(){
                return { counter: 0 }
            }
        }
    }
}) */


var propsExample1 = new Vue({
    el: '#props-example-1',
    components: {
        'child': {
            props: ['myMsgProps'], //jascript는 camelCase, html은 kebab-case
            template: '<span>{{ myMsgProps }}</span>'
        }
    }
});

var propsExample2 = new Vue({
    el: '#props-example-2',
    data: {
        parentMsg: ''
    },
    components: {
        'child': {
            props: ['myMsgProps'],
            template: '<span>{{ myMsgProps }}</span>'
        }
    }
});

new Vue({
    el: '#demo',
    data: {
        show: true
    }
})