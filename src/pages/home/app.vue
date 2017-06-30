<template>
  <div>
    <h1>首页</h1>
    <p>A vue project.</p>
    <img src="/static/WechatIMG71.png">
    {{ number1 }}
    <a href="/admin.html" target="__blank">admin</a>
  </div>
</template>

<script>
  var vm = {
    name: 'app',
    data:function(){
    	return {
    		number1 : 'li32d2asfasyang'
    	}
    	
    },
    beforeCreate:function(){
    	console.log("beforeCreate",this.number1)
    },
    created:function(){
    	console.log('created---&&&--',this.number1)

    },
    beforeMount:function(){
    	console.log("beforeMount")
    },
    mounted:function(){
    	console.log('mounted')
    },
    beforeUpdate:function(){
    	console.log('beforeUpdate')
    },
    updated:function(){
    	console.log('updated')
    },
    beforeDestroy:function(){
    	console.log('beforeDestroy')
    },
    destroyed:function(){
    	console.log('destroyed')
    }

  };


  export default vm
</script>