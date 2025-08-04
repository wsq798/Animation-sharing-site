<template>
    <div>
        <div>
            <h3>Watch Demo侦听器</h3>
            <p :class="{ 'default-color': !textcolor, 'change-color': textcolor }">{{ message }}</p>
            <button @click="updateHandler">按钮</button>
        </div>

        <!-- v-model.lazy 延迟更新 -->
        <input type="text" v-model.lazy="newmessage">
        <p>{{ newmessage }}</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>

        <!-- 获取元素 -->
        <div ref="container" class="container">{{ content }}</div>
        <input type="text" ref="username">
        <button @click="GetElementHandle">获取元素</button>

    </div>



</template>

<script>
/**
 * 内容改变：{{模板语法}}
 * 属性改变：v-bind：指令
 * 事件改变：v-on:click------>@click
 * 
 */
export default {
    data() {
        return {
            message: "this is message",
            textcolor: false,
            checked: 'false',
            newmessage: "",
            content: "内容"
        }
    },
    methods: {
        updateHandler() {
            this.message = 'this is new message'
        },

        GetElementHandle() {
            // console.log(this.$refs.container);
            this.$refs.container.innerHTML = 'hhahahah';

            //获取用户名输入框的值
            console.log(this.$refs.username.value);
        }
    },
    
    watch: {
        //newValue:新值 oldValue:旧值
        //函数名必须与侦听的数据对象保持一致
        message(newValue, oldValue) {
            this.textcolor = true;
            console.log('新值' + newValue, '旧值' + oldValue);
        }
    }

}
</script>

<style>
.default-color {
    color: red;
    font-size: 20px;
}

.change-color {
    color: blue;
    font-size: 30px;
}
</style>