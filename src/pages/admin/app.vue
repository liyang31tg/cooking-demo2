<template>
    <div>
        <h1>个人中心</h1>
        <p>A vue project.</p>
        <img src="/static/WechatIMG71.png">
        <foo></foo>
        <bar/>
        <simpleCounter v-bind:myage="age" 	v-bind:myname="dataObj"/>
        <input type="text" v-model="age" name="">
        <simpleCounter v-bind:myage="age" v-bind:myname="name"/>
        <simpleCounter v-bind:myage="age" 	v-bind:myname="name"/>
        <cc/>
        <div id="app">
            <p>
                <router-link to="/foo">Go to Food</router-link>
                <router-link to="/bar">Go to Bar</router-link>
            </p>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入组件  
import Foo from './Foo'
import Bar from './Bar'
import simpleCounter from './simple-counter'

const routes = [{
    path: '/foo/',
    component: Foo
}, {
    path: '/bar/',
    component: Bar
}]

//使用路由规则
const router = new VueRouter({
    routes
})

var vm = {
    components: {
        foo: Foo,
        bar: Bar,
        simpleCounter: simpleCounter
    },
    router,
    data: function() {
        return {
            newTodoText: "adf",
            age:"27",
            name:"liyang",
            dataObj:{
            	age:27,
            	name:"liyang"
            }

        }
    },
    computed: {
        fullName: {
            get: function() {
                return this.firstName + " " + this.lastName
            },
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        },

        classcc: {
            get: function() {
                return {
                    "display": "block",
                    "width": "200 px",
                    "height": "100 px",
                    "border": "1 px solid# FE31BB",
                    "background-color": "#FF0043"
                }

            }

        }
    },

    watch: {
        firstName: function(newFirstName) {
            console.log("newFirstName:" + this.firstName)
        }
    },

    methods: {
        cccdd(e) {
            console.log("cccdd1:currentTarget:", e.currentTarget)
            console.log("cccdd1:target", e.target)
        },
        cccdd2(e) {
            console.log("cccdd2:currentTarget:", e.currentTarget)
            console.log("cccdd2:target:", e.target)
        }

    }


}


export default vm
</script>
<style type="text/css">
.cc {
    width: 200px;
    height: 100px;
    border: 1px solid #FE31BB;
    background-color: #FF0043;
}

.ccc {
    width: 200px;
    height: 200px;
    border: 1px solid #FE31BB;
    background-color: #2241F4;
}

.cccc {
    margin: 80px;
    width: 100px;
    height: 100px;
    border: 1px solid #FE31BB;
    background-color: #2241F4;
}

@keyframes ccvv {
    from {
        width: 100px;
        height: 100px;
    }
    to {
        width: 200px;
        height: 200px;
    }
}
</style>
