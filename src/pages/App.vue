<template>
    <app-layout>
        <nav-menu slot="navMenu" :items='items'></nav-menu>
        <v-text-field slot="toolbarMenu" flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field>
    </app-layout>
</template>

<script>
    import AppLayout from '../../finelets/components/AppLayout.vue'
    import NavMenu from '../../finelets/components/NavMenu.vue'
    export default {
        components: {
            AppLayout,
            NavMenu
        },
        data: () => ({
            items: [{
                icon: 'contacts',
                text: 'Contacts'
            }, {
                icon: 'keyboard_arrow_up',
                'icon-alt': 'keyboard_arrow_down',
                text: 'More',
                model: false,
                children: [{
                    text: 'Import'
                }, {
                    icon: 'phonelink',
                    text: 'App downloads'
                }, {
                    icon: 'keyboard',
                    text: 'Go to the old version'
                }]
            }]
        })
    }
</script>