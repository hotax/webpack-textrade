<template>
    <!-- <app-layout title="亿泰报价系统" logo="static/img/jsmetta.jpg" copyright='Finelets 2018' :drawer='drawer' @drawerclicked='drawer = !drawer'> -->
    <app-layout title="亿泰报价系统" logo="static/img/jsmetta.jpg" copyright='Finelets 2018'>
        <!-- <nav-list slot="left" :data='navMenu'></nav-list> -->
        <template slot="head-right">
            <user-menu v-if="user" :text='user.profile.displayName' :imgSrc='userPicture'>
                <nav-list :data='userMenuData' @selected='onSelected'></nav-list>
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
            //drawer: false,
            navMenu: {
                dense: false,
                items: [{
                    icon: 'settings',
                    title: '首页',
                    to: {
                        name: 'home'
                    }
                }, {
                    icon: 'contacts',
                    title: '报价',
                    to: {
                        name: 'specs'
                    }
                }, {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    title: 'Labels',
                    model: false,
                    children: [{
                        icon: 'add',
                        title: 'Create label'
                    }]
                }]
            },
        }),
        computed: { ...mapGetters(['user', 'userPicture', ]),
            userMenuData() {
                return {
                    dense: true,
                    items: [{
                        header: "已登录：" + (this.user ? this.user.profile.displayName : '')
                    }, {
                        divider: true
                    }, {
                        icon: 'exit_to_app',
                        title: '&#x1f436;退出',
                        action: 'exit'
                    }]
                }
            },
        },
        methods: { ...mapActions(['logout']),
            onSelected(item) {
                this[item.action]()
            },
            exit() {
                this.logout()
            }
        }
    }
</script>