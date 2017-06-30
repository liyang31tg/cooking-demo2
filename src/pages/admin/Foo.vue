<template>
    <div>
        <input type="text" name="c" v-model="msg"> {{msg}}
        <div>
            <input type="checkbox" name="bbb" id="bbb1" value="1" v-model="mutiCheck">
            <label for="bbb1"> 篮球 </label>
            <input type="checkbox" name="bbb" id="bbb2" value="2" v-model="mutiCheck">
            <label for="bbb2"> 足球 </label>
            <input type="checkbox" name="bbb" id="bbb3" value="3" v-model="mutiCheck">
            <label for="bbb3"> 羽毛球 </label>
        </div>
        {{mutiCheck}}
        <div>
            <input type="radio" name="a" id="a1" v-model="sex" value="男">
            <label for="a1">男</label>
            <input type="radio" name="a" id="a2" v-model="sex" value="女">
            <label for="a2">女</label>
            {{sex}}
            <div>
                <select style="width: 100px" v-model="seleceValue" :multiple="ismu">

                    <option v-for="item in items" :value="item.key">{{item.value}}</option>
                </select>
                {{seleceValue}}
            </div>
            <button @click="cc">change</button>
        </div>

        <div>
        	<input type="text" name="" v-model.trim="msg">
        	<input type="number" name="" v-model.number="nnn">{{nnn}}

        </div>
    </div>
</template>
<script type="text/javascript">
var vm = {
    data() {
        return {
        	ismu:false,
            msg: "",
            nnn:0,
            mutiCheck: [],
            sex: "1",
            items: [{
                key: "1",
                value: "语文"
            }, {
                key: "2",
                value: "数学"
            }, {
                key: "3",
                value: "阴雨"
            }],
            seleceValue:"1"
        }
    }
    ,
    methods:{
    	cc(){
    		this.ismu = !this.ismu
    	}
    }

}


export default vm
</script>
