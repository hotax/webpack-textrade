<template>
    <v-flex>
        <v-avatar v-if="userPicture" :size="size">
            <img :src="src ? src : userPicture" alt="Vuetify" />
        </v-avatar>
        <span>{{user.profile.displayName}}</span>
    </v-flex>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        computed: mapGetters(['user', 'userPicture', ]),
        props: {
            size: {
                default: "48.px",
                type: String
            },
            src: {
                type: String
            }
        }
    }
</script>