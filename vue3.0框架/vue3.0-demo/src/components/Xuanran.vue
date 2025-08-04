<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>学习vue框架的语法模板</h2>
    <p>{{ message }}</p>
    <div>{{ rawhtml }}</div>

    <!-- 这里的v-html渲染rawhtml -->
    <div v-html="rawhtml"></div>

    <!-- 属性动态化 -->
    <div v-bind:id="dynameicId"></div>
    <!-- <div :id="dynameicId"></div> -->

    <!-- v-if条件渲染：只会在flag为true时渲染 -->
    <p v-if="flag">伍松强</p>
    <p v-else>李四</p>
    <p v-show="flag">张三</p>

    <!-- v-for列表渲染 -->
    <h2>列表渲染</h2>
    <ul>
      <li v-for="item in newlist" :key="item.id">
        {{ item.title }}
      </li>
    </ul>


    <!-- 点击事件处理 -->
    <!-- <button v-on:click="counter += 1">点击counter+1 ={{ counter }}</button> -->
    <button @click="counter += 1">点击counter加1 = {{ counter }}</button>

    <button @click="clickHandler">按钮</button>
    <p>{{ mes }}</p>


    <!-- 总结： -->
    <ul>
      <li @click="clickHandlerItems(item)" v-for="(item, index) in names" :key="index">{{ item }}</li>
    </ul>


  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  // 这里的props是父组件传递给子组件的属性
  props: {
    msg: String
  },

  data() {
    return {
      message: 'Hello Vue.js!',
      // 这里的rawhtml是html代码，需要用v-html渲染
      rawhtml: '<a href="https://www.baidu.com">百度</a>',

      //属性动态化
      dynameicId: 10011,
      // v-if条件渲染
      flag: true,

      // 列表渲染
      newlist: [
        {
          id: 10000,
          title: '早晨新闻直播间'
        },
        {
          id: 10001,
          title: '中午新闻直播间'
        },
        {
          id: 10002,
          title: '晚上新闻直播间'
        }
      ],

      //事件处理
      counter: 1,
      mes: '消息通知！',

      names: ["lisi", "zhangsan", "wangwei"],
    }
  },

  methods: {
    clickHandler(event) {
      //在事件中，读取data属性，通过this关键字读取  =>  this.属性
      this.mes = '消息已撤回！'
      console.log(event);
      //修改按钮文本
      event.target.innerHTML = '已点击按钮';
      //禁用按钮
      event.target.disabled = true;
    },

    clickHandlerItems(data) {
      alert(data);
    }

  }
}
</script>
