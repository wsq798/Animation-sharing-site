<template>
    <div>
        <h2>vue生命周期函数</h2>
        <p>{{ message }}</p>
        <button @click="message = 'vue'">点击</button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            message: 'vue2.0生命周期'
        }
    },
    beforeCreate() {
        console.log("beforeCreate：组件创建之前");
    },
    created() {
        console.log("created：组件创建完成");
    },
    beforeMount() {
        console.log("beforeMount：组件渲染之前");
    },
    mounted() {
        console.log("mounted：组件渲染完成");
        //网络请求

    },
    beforeUpdate() {
        console.log("beforeUpdate：组件更新之前");
    },
    updated() {
        console.log("updated：组件更新完成");
    },

    // vue2.0生命周期
    // beforeDestroy(){
    //     console.log("beforeDestroy：组件销毁之前");
    // },
    // destroyed(){
    //     log("destroyed：组件销毁完成");
    // }

    // vue3.0生命周期
    beforeUnmount() {
        console.log("beforeUnmount：组件销毁之前");
    },
    unmounted() {
        console.log("unmounted：组件销毁完成");
    }

}
</script>