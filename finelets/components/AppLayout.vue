<template>
    <v-app dark>
        <v-navigation-drawer v-if='drawer' fixed :clipped="$vuetify.breakpoint.mdAndUp" app :value='drawer'>
            <slot name="left"></slot>
        </v-navigation-drawer>
        <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <img :src="logo" height="48" weight="48" @click.stop="emitDrawerClicked" />
                <span>{{title}}</span>
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
        <v-footer color="blue darken-3" dark app fixed>
            <span>&copy; {{copyright}}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            drawer: {
                type: Boolean,
                default: false
            },
            title: {
                type: String
            },
            logo: {
                type: String
            },
            copyright: {
                type: String
            }
        },
        methods: {
            emitDrawerClicked() {
                this.$emit('drawerclicked')
            }
        }
    }
</script>