<template>
    <h3>Life Component生命周期函数</h3>
    <button @click="updateData">点击更新数据</button>
    <p>{{message}}</p>
</template>


<!-- 
生命周期函数：
创建期：
beforeCreate()：实例被创建，数据观测和事件配置之前被调用。
created()：实例创建完成，实例已完成数据观测和事件配置。
挂载期：
beforeMount()：实例开始挂载。
mounted()：实例挂载完成。
更新期：
beforeUpdate()：数据更新时调用，发生在虚拟 DOM 打补丁之前。
updated()：数据更新完成。
销毁期：
beforeUnmount()：实例销毁之前调用。
unmounted()：实例销毁完成。
-->
<script>
export default {
    data() {
        return {
            message:"组件生命周期"
        }
    },

    methods:{
        updateData(){
            this.message = "组件生命周期更新"
        }
    },

    beforeCreate(){
        console.log('beforeCreate创建之前');
    },
    created(){
        console.log('created创建之后');
    },
    beforeMount(){
        console.log('beforeMount渲染之前');
    },
    mounted(){
        console.log('mounted渲染之后');
    },
    bwforeUpdate(){
        console.log('beforeUpdate更新之前');
    },
    updated(){
        console.log('updated更新之后');
    },
    beforeUnmount(){
        console.log('beforeUnmount销毁之前');
    },
    unmounted(){
        console.log('unmounted销毁之后');
    }
}
</script>