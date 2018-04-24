// mixin 객체 생성
var myMixin = {
    created: function () {
        this.hello();
    },
    methods: {
        hello: function () {
            console.log('hello form mixin!');
        }
    }
}
// mixin을 사용할 컴포넌트 정의
var Component = Vue.extend({
    mixins: [myMixin]
});

// 함수 실행
var component = new Component();

/////////////////////////////////////

var mixin = {
    created: function () {
        console.log('같은 이름의 훅 함수가 배열에 병합되어 모든 함수가 호출됩니다. 또한 mixin 훅은 컴포넌트 자체의 훅 이전에 호출됩니다.')
    }
}
var vm1 = new Vue({
    mixins: [mixin],
    created: function () {
        console.log('component hook called')
    }
})

////////////////////////////////////

// `myOption` 사용자 정의 옵션을 위한 핸들러 주입
Vue.mixin({
    created: function () {
        var myOption = this.$options.myOption
        if (myOption) {
            console.log(myOption)
        }
    }
})

var vm2 = new Vue({
    myOption: 'hello!'
})

////////////////////////////////////

// 전역 사용자 정의 디렉티브 v-focus 등록
/* Vue.directive('focus', {
    // 바인딩 된 엘리먼트가 DOM에 삽입되었을 때...
    inserted: function (el) {
        // 엘리먼트에 포커스를 줍니다
        el.focus();
    }
}) */
var vm3 = new Vue({
    el: '#ex1',
    directives: {
        focus: {
            // 디렉티브 정의
            inserted: function (el) {
                el.focus();
            }
        }
    }
})

Vue.component('blog-post', {
    render: function (createElement) {
        var header = this.$slots.header;
        var body = this.$slots.default;
        var footer = this.$slots.footer;
        return createElement('div', [
            createElement('header', header),
            createElement('main', body),
            createElement('footer', footer)
        ])
    }
})
var vm4 = new Vue({
    el: '#ex2'
})

var vm5 = new Vue({
    el: '#example_1',
    data: function () {
        return {
            message: 'john'
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})