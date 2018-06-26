<template>
    <v-list :dense='data.dense'>
        <template v-for="(item, index) in data.items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile v-else :key="item.title" avatar>
                <v-list-tile-avatar v-if='item.avatar'>
                    <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-action v-else-if="item.icon">
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>