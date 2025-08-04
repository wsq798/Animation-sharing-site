<template>
  <div>
    <TheWelcome />
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="200" height="200" />
    <Hello1 /> <!-- 登录组件 -->
    <HelloWorld /> <!-- 数组变化侦听 -->
    <WelcomeItem /> <!-- 组合式API -->
    <WelcomeItem2 /> <!-- 选项式API -->
    <Xuanran /> <!-- 自定义指令 -->
    <WatchDemo /> <!-- 监听 -->
    <Parent /> <!-- 父子组件 -->
    <ComponentA /> <!-- 动态组件 -->
    <SearchComponentMain /> <!-- 子组件 -->
    <LifeComponent /> <!-- 生命周期 -->
    <LifeComponentDemo /> <!-- 生命周期应用 -->
  
  </div>

  <!-- 
  <component :is="tabComponent"></component>
  <button @click="changeHandle">点击切换组件</button><br> 
  -->

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import WelcomeItem from './components/WelcomeItem.vue';
import WelcomeItem2 from './components/WelcomeItem2.vue';
import Hello1 from './components/Hello1.vue';
import Xuanran from './components/Xuanran.vue';
import WatchDemo from './components/WatchDemo.vue';
import Parent from './components/Parent.vue';
import SearchComponentMain from './components/SearchComponentMain.vue';
import ComponentA from './components/ComponentA.vue';
import LifeComponent from './components/LifeComponent.vue';
import LifeComponentDemo from './components/LifeComponentDemo.vue';

export default {
  components: {
    HelloWorld,
    Hello1,
    Xuanran,
    WatchDemo,
    TheWelcome,
    SearchComponentMain,
    Parent,
    ComponentA,
    LifeComponent,
    LifeComponentDemo,
    WelcomeItem,
    WelcomeItem2
  },
  /*
    //动态组件切换
    data() {
      return {
        tabComponent: "Hello1"
      }
    },
    methods: {
      changeHandle() {
        this.tabComponent = this.tabComponent === "Hello1" ? "TheWelcome" : "Hello1";
      }
    }
  */
}
</script>
