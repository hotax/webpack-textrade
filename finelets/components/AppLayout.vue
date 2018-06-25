<template>
    <v-app dark>
        <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
            <slot name="left"></slot>
        </v-navigation-drawer>
        <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <img src="static/img/jsmetta.jpg" height="48" weight="48" @click.stop="drawer = !drawer" />
                <span>亿泰报价系统</span>
            </v-toolbar-title>
            <v-toolbar-items>
                <slot name="head-left"></slot>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <slot name="head-right"></slot>
            </v-toolbar-items>
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