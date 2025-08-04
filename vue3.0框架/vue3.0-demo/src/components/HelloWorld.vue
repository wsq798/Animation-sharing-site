<template>
  <h3>数组变化侦听</h3>
  <button @click="addListHandle">点击添加数据</button>
  <ul>
    <li v-for="(item, index) in names" :key="index">{{ item }}</li>
  </ul>
  <h4>合并数组</h4>
  <button @click="concatHandle">点击合并数组</button>
  <h5>数组1</h5>
  <p v-for="(item,index) in numbers1" :key="index">{{ item }}</p>
  <h5>数组2</h5>
  <p v-for="(item,index) in numbers2" :key="index">{{ item }}</p>
</template>

<script>
export default {
  data() {
    return {
      names: ["iwen", "liuliu", "wangwu"],
      numbers1:[1,2,3,4,],
      numbers2:[5,6,7,8,],
      isMerged:false
    }
  },

  methods: {
    addListHandle() {
      //变更数组
      //push()，pop(),shift(),unshift(),splice(),sort(),reverse()引起ui自动更新
      this.names.push("zhaoliu")

      //替换数组
      //filter(),concat(),slice()不会引起ui自动更新
      this.names.concat(["chenliu"])
      console.log(this.names.concat(["chenliu"]));
      //想要变化则需要重新赋值
      this.names = this.names.concat(["chenliu"]);
    },
    concatHandle(){
      if(!this.isMerged){
        //合并数组
        this.numbers1 = this.numbers1.concat(this.numbers2);
        this.isMerged = true;
      }
    }
  }
}

</script>
