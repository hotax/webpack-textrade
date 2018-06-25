<template>
    <v-app dark>
        <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
            <slot name="left"></slot>
        </v-navigation-drawer>
        <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <img src="static/img/jsmetta.jpg" class="rounded-circle" height="48" weight="48" @click.stop="drawer = !drawer" /> -->
                <img src="static/img/jsmetta.jpg" height="48" weight="48" @click.stop="drawer = !drawer" />
                <span>亿泰报价系统</span>
            </v-toolbar-title>
            <slot name="head"></slot>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer app fixed>
            <span>&copy; Finelets 2018</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
        }),
    }
</script>