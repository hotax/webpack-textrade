<template>
    <app-layout>
        <nav-menu slot="left" :data='navMenu'></nav-menu>
        <template slot="head-right">
            <user-menu v-if="user" :text='user.profile.displayName' :imgSrc='userPicture'>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>已登录：{{user.profile.displayName}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile @click="logout">
                        <v-list-tile-content>
                            <v-list-tile-title>退出</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </user-menu>
            <signin v-else></signin>
        </template>
    </app-layout>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import AppLayout from '../../finelets/components/AppLayout.vue'
    import NavMenu from '../../finelets/components/NavMenu.vue'
    import UserMenu from '../../finelets/components/UserMenu.vue'
    import Signin from '../components/Signin.vue'
    export default {
        components: {
            AppLayout,
            NavMenu,
            UserMenu,
            Signin
        },
        data: () => ({
            navMenu: {
                dense: false,
                items: [{
                    icon: 'contacts',
                    text: 'Contacts'
                }, {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    text: 'Labels',
                    model: true,
                    children: [{
                        icon: 'add',
                        text: 'Create label'
                    }]
                }, {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    text: 'More',
                    model: false,
                    children: [{
                        text: 'Import'
                    }, {
                        text: 'Export'
                    }]
                }, {
                    icon: 'settings',
                    text: 'Settings'
                }]
            },
        }),
        computed: mapGetters(['user', 'userPicture', ]),
        methods: { ...mapActions(['login', 'logout']),
            openGithubSignin() {
                const url = 'http://localhost:8089/api/auth/github'
                const name = 'github_login'
                const specs = 'width=500,height=500'
                window.open(url, name)
            },
            handleMessage({
                data,
                origin
            }) {
                if (origin !== 'http://localhost:8089') {
                    return
                }
                if (data === 'success') {
                    this.login()
                }
            },
        },
        mounted() {
            window.addEventListener('message',
                this.handleMessage)
        }
    }
</script>