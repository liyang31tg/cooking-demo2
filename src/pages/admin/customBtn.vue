<template>
    <block>
        <button @click="add">{{name}}</button>
        <span>{{age}}</span>
    </block>
</template>
<script type="text/javascript">
var vm = {
    props: ["obj"],
    data() {
        return {
            name: this.obj.name,
            age: this.obj.age
        }


    },
    methods: {
        add() {
            this.age++
            this.obj.age++
            this.$emit('add',1,2)
        }

    }

}

export default vm
</script>
