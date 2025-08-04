<template>
  <button @click="increment">选项式API:Counts:{{ count }}</button>
</template>

<script>
export default{
  data(){
    return{
      count:0
    }
  },
  methods:{
    increment(){
      this.count++
    }
  },
  mounted(){
    console.log(`选项式API Counts:${this.count}`);
  }
}

</script>