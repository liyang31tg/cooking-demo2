<template>
    <div>
        <div>bar</div>
        <input type="text" name="firstName" v-model="firstName">{{firstName}}
        <br/>
        <input type="text" name="lastName1" v-model="lastName">{{lastName}}
        <br/> fullName:{{fullName}}
        <div>
            <textarea v-model="contentHtml"></textarea>
            <div v-html="contentHtml"></div>
        </div>
        <div :id="divid"></div>
        <button @click.stop="cc">change</button>
        <div :style="[stylepp , stylepp1]">I am pp</div>
        <div>
            <input type="text" name="dd" v-model="showcontent">
            <div v-if="showcontent == 'A'">A</div>
            <div v-else-if="showcontent == 'B'">B</div>
            <div v-else>others</div>
        </div>
        <div v-for=" (item,index) in items" :bb="index">{{index}}{{item.code}}.{{item.message}}
            <div v-for=" (value,key,inindex) in item" :style="stylepp" :bcb="inindex">
                &nbsp;&nbsp;&nbsp;{{inindex}} {{key}} {{value}}
            </div>
        </div>
        <CustomBtn :obj.sync="obj" @add="aaggeeClick"></CustomBtn>
        {{obj}}
    </div>
</template>
<script type="text/javascript ">
import CustomBtn from './customBtn'
var vm = {
    data: function() {
        return {
            firstName: " ",
            lastName: " ",
            contentHtml: " ",
            divid: 12,
            cccpp: "ccc ",
            ccfpp: "ccf ",
            items: [{
                code: 1,
                message: "语文 "
            }, {
                code: 2,
                message: "数学 "
            }, {
                code: 3,
                message: "英语 "
            }],
            bbbb: {
                ccc: true,
                ccf: true
            },
            stylepp: {
                "color": "red"

            },
            stylepp1: {
                "font-size": "25px "
            },
            showcontent: " ",
            obj:{
            	name:"liyang",
            	age:27
            }
        }
    },
    components:{
    	CustomBtn:CustomBtn

    },
    computed: {
        fullName: {
            get: function() {
                return this.firstName + " " + this.lastName
            },
            set: function(newValue) {
                const names = newValue.split(" ")
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }

        }
    },
    watch: {
        firstName: function(newValue, oldVlaue) {
            console.log("newValue: ", newValue, "oldVlaue: ", oldVlaue)
        }
    },
    methods: {
        cc() {
        	this.items.reverse()
            console.log("this.showcontent: ", this.showcontent)
        },
        aaggeeClick(){
        	console.log('aaggeeClick')
        }
    },
    /*
    beforeCreate: function() {
        console.log('beforeCreate Bar')
    },
    created: function() {
        console.log('created Bar')
    },
    beforeMount: function() {
        console.log("beforeMount Bar ")
    },
    mounted: function() {
        console.log('mounted bar')
    },
    beforeUpdate: function() {
        console.log('beforeUpdate bar')
    },
    updated: function() {
        console.log('updated bar')
    },
    beforeDestroy: function() {
        console.log('beforeDestroy bar')
    },
    destroyed: function() {
        console.log('destroyed bar')
    }*/


}

export default vm
</script>
<style type="text/css ">
.ccc {
    color: red;
}

.ccf {
    font-size: 25px;
}
</style>
