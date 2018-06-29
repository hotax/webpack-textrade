<template>
    <v-container fluid fill-height light class="pt-0 pb-0">
        <v-layout row>
            <v-flex d-flex lg2 class="pt-3">
                <v-layout column>
                    <label for="exampleInputEmail1" class="ml-2 text-light">请输入查询条件：</label>
                    <textarea id="exampleInputEmail1" class="flex form-control pl-2 text-success bg-dark border-0" v-model="queryCondi"></textarea>
                    <button type="submit" class="btn bg-info">查询</button>
                </v-layout>
            </v-flex>
            <v-flex d-flex lg10>
                <v-data-table :headers="headers" :items="specs" hide-actions item-key="code">
                    <template slot="items" slot-scope="props">
                        <tr @click="props.expanded = !props.expanded">
                            <td>{{ props.item.code }}</td>
                            <td class="text-xs-right">{{ props.item.name }}</td>
                            <td class="text-xs-right">{{ props.item.constructure }}</td>
                            <td class="text-xs-right"></td>
                            <td class="text-xs-right"></td>
                            <td class="text-xs-right">{{ props.item.modifiedDate }}</td>
                        </tr>
                    </template>
                    <template slot="expand" slot-scope="props">
                        <v-card flat>
                            <v-card-text>{{props.item.grey}}</v-card-text>
                        </v-card>
                    </template>
                    <!-- <template slot="footer">
                        <td colspan="100%">
                            <strong>This is an extra footer</strong>
                        </td>
                    </template> -->
                </v-data-table>
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
                queryCondi: '{}',
                pagination: {},
                headers: [{
                    text: '编号',
                    align: 'center',
                    value: 'code'
                }, {
                    text: '名称',
                    align: 'center',
                    value: 'name'
                }, {
                    text: '组织',
                    align: 'center',
                    value: 'constructure'
                }, {
                    text: 'grey',
                    align: 'center',
                    value: 'grey'
                }, {
                    text: '成品',
                    align: 'center',
                    value: 'product'
                }, {
                    text: '日期',
                    align: 'center',
                    value: 'modifiedDate'
                }],
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
                        createDate: new Date(2018, 6, 27),
                        modifiedDate: new Date(2018, 5, 24)
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
                        createDate: new Date(2018, 6, 27),
                        modifiedDate: new Date(2018, 6, 27)
                    }
                ]
            }
        }
    }
</script>