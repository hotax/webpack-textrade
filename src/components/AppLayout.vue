<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click="aa">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="aa" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">亿泰报价系统</span>
      </v-toolbar-title>
      <v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon v-if="user" @click="logout">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
      <v-btn icon v-if="!user" @click="openGithubSignin">
        <v-icon>account_box</v-icon>
      </v-btn>
      <v-avatar v-if="userPicture" size="48px">
        <img :src="userPicture" alt="Vuetify">
      </v-avatar>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; Finelets 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [{
          icon: 'contacts',
          text: 'Contacts'
        },
        {
          icon: 'history',
          text: 'Frequently contacted'
        },
        {
          icon: 'content_copy',
          text: 'Duplicates'
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [{
            icon: 'add',
            text: 'Create label'
          }]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [{
              text: 'Import'
            },
            {
              text: 'Export'
            },
            {
              text: 'Print'
            },
            {
              text: 'Undo changes'
            },
            {
              text: 'Other contacts'
            }
          ]
        },
        {
          icon: 'settings',
          text: 'Settings'
        },
        {
          icon: 'chat_bubble',
          text: 'Send feedback'
        },
        {
          icon: 'help',
          text: 'Help'
        },
        {
          icon: 'phonelink',
          text: 'App downloads'
        },
        {
          icon: 'keyboard',
          text: 'Go to the old version'
        }
      ]
    }),
    props: {
      source: String
    },
    computed: mapGetters(['user', 'userPicture', ]),
    methods: {
      ...mapActions(['login', 'logout']),
      aa() {},
      openGithubSignin() {
        const url = 'http://localhost:8089/api/auth/github'
        const name = 'github_login'
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
      window.addEventListener('message', this.handleMessage)
    },
  }
</script>