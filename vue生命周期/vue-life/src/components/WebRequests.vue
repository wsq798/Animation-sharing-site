<template>

    <h2>网络请求</h2>
    <p v-if="test.title">{{ test.title }}</p>
    <p v-else>加载中...</p>

    <h3>post请求结果</h3>
    <pre>{{ postResult }}</pre>

</template>

<script>
//import axios from 'axios';

export default {
    name: 'WebRequests',
    data() {
        return {
            test: {},
            //添加postResult数据属性来存储 POST 请求的结果
            postResult: null,
            error: null
        }
    },

    mounted() {
        // //get请求方式
        // axios({
        //     method: "get",
        //     url: "https://jsonplaceholder.typicode.com/todos/1"
        // }).then(res => {
        //     console.log("GET请求成功", res.data);
        //     this.test = res.data;
        // }).catch(err => {
        //     console.log("GET请求失败", err);
        //     this.error = err.message;
        // });

        // //post请求方式
        // axios({
        //     method: "post",
        //     url: "https://jsonplaceholder.typicode.com/todos",
        //     data: {
        //         userId: 1,
        //         title: "test",
        //         completed: false
        //     }
        // }).then(res => {
        //     console.log("POST请求成功", res.data);
        //     this.postResult = res.data;
        // }).catch(err => {
        //     log.error("POST请求失败", err);
        //     this.error = err.message;
        // });

        this.$axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then(res =>{
            console.log("GET请求成功", res.data);
        })
        .catch(err => {
            console.log("GET请求失败", err);
        });

        this.$axios.post("https://jsonplaceholder.typicode.com/todos", {
            userId: 1,
            title: "test",
            completed: false
        })
        .then(res =>{
            console.log("POST请求成功", res.data);
         })
        .catch(err => {
            console.log("POST请求失败", err);
        })
    }

}
</script>

<style scoped></style>