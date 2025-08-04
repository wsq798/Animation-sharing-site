<template>
    <h3>SearchComponentMain主页面</h3>
    <SearchComponent @searchevent="getSearch"/>
    <p>搜索内容为：{{search}}</p>
</template>

<script>
import SearchComponent from './SearchComponent.vue';

export default {
    data(){
        return{
            search:''
        }
    },
    components:{
        SearchComponent
    },
    methods:{
        getSearch(event){
            this.search = event;
        }
    }
}
</script>