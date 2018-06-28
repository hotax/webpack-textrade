<template>
    <v-container fluid fill-height light class="pt-0 pb-0">
        <v-layout row>
            <v-flex d-flex xs2 class="pt-3 bg-light">
                <v-layout column>
                    <label for="exampleInputEmail1" class="ml-2 text-dark">请输入查询条件：</label>
                    <textarea id="exampleInputEmail1" class="flex form-control pl-2 text-success"></textarea>
                    <button type="submit" class="btn bg-info">查询</button>
                </v-layout>
            </v-flex>
            <v-flex d-flex>
                <v-card light>
                    <v-card-media class="white--text" height="300px" src="static/img/suixi.jpg">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">Top 10 Australian beaches</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                    <v-card-title>
                        <div>
                            <span class="grey--text">Number 10</span>
                            <br>
                            <span>Whitehaven Beach</span>
                            <br>
                            <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import HelloComponent from '../components/HelloComponent.vue'
    import NavList from '../../finelets/components/NavList.vue'
    export default {
        components: {
            HelloComponent,
            NavList
        },
        data() {
            return {
                specs: [{
                        code: '00001',
                        name: '6850 2/3斜（左右捻）',
                        desc: 'desc of 6850 2/3斜（左右捻）',
                        constructure: '2/3斜',
                        grey: {
                            yarn: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            dnsty: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            width: "'178(70')",
                            GSM: 150
                        },
                        product: {
                            yarn: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            dnstyBW: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            dnstyAW: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            width: "325(128')",
                            GSM: 250
                        },
                        createDate: Date.now,
                        modifiedDate: Date.now
                    },
                    {
                        code: '00002',
                        name: '6850 2/3斜（左右捻）',
                        desc: 'desc of 6850 2/3斜（左右捻）',
                        constructure: '2/3斜',
                        grey: {
                            yarn: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            dnsty: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            width: "'178(70')",
                            GSM: 150
                        },
                        product: {
                            yarn: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            dnstyBW: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            dnstyAW: {
                                warp: {
                                    value: [6850],
                                    unit: 'g'
                                },
                                weft: {
                                    value: [6850],
                                    unit: 'g'
                                }
                            },
                            width: "325(128')",
                            GSM: 250
                        },
                        createDate: Date.now,
                        modifiedDate: Date.now
                    }
                ]
            }
        }
    }
</script>