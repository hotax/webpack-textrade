<template>
    <v-card>
        <hello-component :name='message'></hello-component>>
    </v-card>
</template>
<script>
    import HelloComponent from '../components/HelloComponent.vue'
    export default {
        components: {
            HelloComponent
        },
        data() {
            return {
                message: '规格查询',
            }
        },
    }
</script>