<template>
    <div>
        <h3>Component B</h3>
        <p>{{ title }}</p>
        <p>{{ onEvent(123) }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        title: {
            type: String,
        },
        onEvent: {
            type: Function,
        }
    }

}
</script>