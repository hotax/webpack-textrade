<template>
    <app-layout title="亿泰报价系统" logo="static/img/jsmetta.jpg" copyright='Finelets 2018'>
        <nav-list slot="left" :data='navMenu'></nav-list>
        <template slot="head-right">
            <user-menu v-if="user" :text='user.profile.displayName' :imgSrc='userPicture'>
                <!-- <v-list>
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
                </v-list> -->
                <nav-list :data='userMenuData'></nav-list>
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
    import NavList from '../../finelets/components/NavList.vue'
    import UserMenu from '../../finelets/components/UserMenu.vue'
    import Signin from '../components/Signin.vue'
    export default {
        components: {
            AppLayout,
            NavList,
            UserMenu,
            Signin
        },
        data: () => ({
            userMenuData: {
                items: [{
                        header: '已登录：clx' // + this.user.profile.displayName
                    },
                    {
                        divider: true
                    },
                    {
                        title: '退出',
                    }
                ]
            },
            navMenu: {
                dense: false,
                items: [{
                    icon: 'contacts',
                    title: 'Contacts'
                }, {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    title: 'Labels',
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