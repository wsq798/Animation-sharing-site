<template>
    搜索：<input type="text" v-model="search" placeholder="搜索">
</template>

<script>
export default{
    data(){
        return{
            search:''
        }
    },
    // 监听search值变化，并触发事件
    watch:{
        search(newValue,oldValue){
            this.$emit("searchevent",newValue);
        }
    }
}
</script>