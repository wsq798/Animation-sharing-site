<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>图片轮播</h2>

    <swiper :modules="modules" :pagination="{ clickable: true }">

      <swiper-slide>
        <img src="../assets/1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/1.jpg" alt="">
      </swiper-slide>

    </swiper>

  </div>
</template>

<script>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
//引入接口
import api from '../api/index';

export default {
  name: 'HelloWorld',
  //引入swiper组件
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      //将swiper的模块引入进来，放进数组
      modules: [Pagination]
    }
  },

  mounted(){
    //调用接口获取数据
    api.getChengpin().then(res =>{console.log(res.data);})
  }
}
</script>

<style scoped>
img {
  width: 50%;
}
</style>
