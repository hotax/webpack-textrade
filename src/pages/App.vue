<template>
    <app-layout title="亿泰报价系统" logo="static/img/jsmetta.jpg" copyright='Finelets 2018'>
        <nav-list slot="left" :data='navMenu' @selected='act'></nav-list>
        <template slot="head-right">
            <user-menu v-if="user" :text='user.profile.displayName' :imgSrc='userPicture'>
                <nav-list :data='userMenuData' @selected='act'></nav-list>
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
    import router from '../router.js'
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
                dense: true,
                items: [{
                        header: '已登录：clx' // + this.user.profile.displayName
                    },
                    {
                        divider: true
                    },
                    {
                        icon: 'exit_to_app',
                        title: '&#x1f436;退出',
                        action: 'exit'
                    }
                ]
            },
            navMenu: {
                dense: false,
                items: [{
                    icon: 'contacts',
                    title: '报价',
                    action: 'qouter'
                }, {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    title: 'Labels',
                    model: true,
                    children: [{
                        icon: 'add',
                        title: 'Create label'
                    }]
                }, {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    title: 'More',
                    model: false,
                    children: [{
                        title: 'Import'
                    }, {
                        title: 'Export'
                    }]
                }, {
                    icon: 'settings',
                    title: 'Settings'
                }]
            },
        }),
        computed: mapGetters(['user', 'userPicture', ]),
        methods: { ...mapActions(['logout']),
            act(item) {
                this[item.action]()
            },
            exit() {
                this.logout()
            },
            qouter() {
                router.replace({
                    name: 'specs'
                })
            }
        }
    }
</script>