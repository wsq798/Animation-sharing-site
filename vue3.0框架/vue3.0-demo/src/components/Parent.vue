<template>
    <!-- 父组件模板 -->
    <h2>Parent父组件</h2>
    
    <!-- 子组件引用 -->
    <!-- 
        使用 Child 子组件并传递数据：
        :title - 传递 message 数据作为 title 属性
        :age - 传递 age 数据作为 age 属性
        :names - 传递 names 数组作为 names 属性
        @click-event - 监听子组件触发的 click-event 事件，调用 GetHandle 方法处理
    -->
    <Child 
        :title="message" 
        :age="age" 
        :names="names" 
        @click-event="GetHandle"
    />
    
    <!-- 显示从子组件接收的消息 -->
    <p>{{ msg }}</p>
</template>

<script>
// 导入子组件
import Child from './Child.vue';

export default {
    // 组件数据
    data() {
        return {
            // 传递给子组件的消息
            message: 'Hello from Parent',
            
            // 传递给子组件的年龄
            age: 20,
            
            // 传递给子组件的名字数组
            names: ['John', 'Mary', 'Tom'],
            
            // 存储从子组件接收的消息
            msg: ""
        }
    },

    // 注册子组件
    components: {
        Child // 注册 Child 组件，使其可在模板中使用
    },

    // 组件方法
    methods: {
        /**
         * 处理子组件触发的事件
         * @param {any} data - 从子组件传递过来的数据
         */
        GetHandle(data) {
            // 将从子组件接收的数据保存到 msg
            this.msg = data;
            
            // 在控制台打印接收到的数据
            console.log('Parent组件的点击事件被触发了', data);
        }
    }
}
</script>