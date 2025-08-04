<template>
    <div>
        <h2>Component A</h2>
    </div>
    <p>子传父：{{ message }}</p>
    <componentB title="父传子:这个title来自ComponentA" :onEvent="dataFn" />

</template>

<script>
import ComponentB from './ComponentB.vue';

export default {
    components: {
        ComponentB
    },

    data() {
        return {
            message: ""
        }
    },
    methods: {
        dataFn(data) {
            console.log('dataFn from ComponentA');
            this.message = data;
        }
    }
}

</script>