<template>
    <!-- 子组件模板 -->
    <h3>Child Component子组件</h3>
    
    <!-- 描述信息 -->
    <p>这里的props是父组件传递给子组件的属性</p>
    
    <!-- 显示从父组件接收的props数据 -->
    <p>{{ title }} </p>  <!-- 显示标题 -->
    <p>{{ age }}</p>     <!-- 显示年龄 -->
    
    <!-- 循环渲染名字列表 -->
    <ul>
        <!-- 
            v-for 指令遍历 names 数组 
            :key 提供唯一标识符，Vue 推荐使用
        -->
        <li v-for="(item, index) of names" :key="index">{{ item }}</li>
    </ul>
    
    <!-- 事件触发按钮 -->
    <!-- 
        @click 绑定点击事件 
        点击后触发 ClickEventHandle 方法
    -->
    <button @click="ClickEventHandle">点击传递数据</button>
</template>

<script>
export default {
    // 组件名称（可选，但推荐用于调试）
    name: "Child",
    
    // 组件内部数据
    data() {
        return {
            // 用于向父组件传递的数据
            data1: "子组件向父组件传递数据"
        }
    },
    
    /**
     * Props 声明 - 定义从父组件接收的属性
     * 
     * 注意：Props 是只读的，不能在子组件中直接修改
     * 
     * 替代写法（不推荐）：
     *   props:["title","age","names"]
     */
    props: {
        // 标题属性
        title: {
            type: String,        // 类型检查：必须是字符串
            default: "default title", // 默认值
            required: true       // 必填项，父组件必须传递此属性
        },
        
        // 年龄属性
        age: {
            type: Number,       // 类型检查：必须是数字
            default: 0           // 默认值
        },
        
        // 名字列表属性
        names: {
            type: Array,        // 类型检查：必须是数组
            // 默认值（使用工厂函数返回新数组，避免引用问题）
            default: () => ["default name"]
        }
    },
    
    // 组件方法
    methods: {
        /**
         * 子组件向父组件传递数据的方法
         * 
         * 使用 $emit 触发自定义事件：
         *   - 第一个参数：事件名称 ('click-event')
         *   - 第二个参数：传递的数据 (this.data1)
         */
        ClickEventHandle() {
            // 触发 'click-event' 事件，并传递 data1 的值
            this.$emit("click-event", this.data1);
        }
    }
}
</script>