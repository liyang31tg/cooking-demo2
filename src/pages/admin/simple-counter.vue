<template>
    <div>
        <button @click="add">{{count}}</button>
        {{myage}}<br/>
        {{myname.age}}
        {{myname.name}}
        <br/>
    </div>
</template>
<script type="text/javascript">
var vm = {
    props: ["myage","myname"],
    	
    data() {
        return {
            count: 0,
           
        }

    },
    methods: {
        add() {
            // this.myaget
            this.count++ // this.myage
            console.log(this.myage,"   ",this.myname)
        }
    }

}
export default vm
</script>
