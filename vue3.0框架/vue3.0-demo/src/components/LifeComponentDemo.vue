<template>
    <h3>LifeComponentDemo组件生命周期应用</h3>
    <p ref="name"> 我是程序员 </p>

    <ul>
        <li v-for="(item,index) in banner" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </li>
    </ul>

</template>

<script>
export default{
    data(){
        return {
            banner:[]
        }
    },
    

    // 通过ref获取元素dom结构
    beforeMount(){
        console.log(this.$refs.name); //undefined
    },
    mounted(){
        console.log(this.$refs.name); //<p> 我是程序员 </p>
        //模拟网络请求数据
        this.banner = [
            {
                "title": '中国',
                "content": '在中国zhibo.tv，你可以找到全球最热门的直播节目，观看各种热门明星的精彩表演。'
            },
            {
                "title": '美国',
                "content": '在美国会有什么好玩的'
            },
            {
                "title": '日本',
                "content": '在日本，生活富裕，但也有很多不安定因素。'
            }
        ]
    }
}
</script>