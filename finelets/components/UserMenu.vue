<template>
    <v-menu offset-y bottom>
        <v-btn slot="activator" flat>
            <v-flex>
                <span>{{text}}</span>
                <v-avatar :size="size">
                    <img :src="imgSrc" />
                </v-avatar>
                <v-btn icon flat>
                    <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
            </v-flex>
        </v-btn>
        <v-card>
            <slot></slot>
        </v-card>
    </v-menu>
</template>

<script>
    export default {
        computed: {},
        props: {
            text: {
                type: String
            },
            imgSrc: {
                type: String,
                required: true
            },
            size: {
                default: "48.px",
                type: String
            }
        }
    }
</script>