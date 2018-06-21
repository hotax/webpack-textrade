<template>
    <v-layout>
        <v-flex sm12>
            <v-card>
                <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                    <v-layout row wrap>
                        <v-flex v-for="n in 9" :key="n" sm4>
                            <v-card flat tile>
                                <v-card-media :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" height="180px">
                                </v-card-media>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>