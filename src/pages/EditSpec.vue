<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-8">
            <form @submit.prevent="submit">
                <div class="form-row mt-2 mb-4 border-bottom align-items-end row justify-content-between">
                    <h2>产品规格</h2>
                    <span v-if='spec.id'>标识：{{spec.id}}</span>
                    <span v-if='spec.id'>日期：{{spec.modifiedDate}}</span>
                </div>

                <div class="form-row">
                    <div class="form-group col-12 col-sm-3">
                        <label for="code">编号：</label>
                        <input type="text" class="form-control" id="code" v-model='spec.code'>
                    </div>
                    <div class="form-group col-12 col-sm-8 ml-sm-auto">
                        <label for="name">名称：</label>
                        <input type="text" class="form-control" id="name" v-model="spec.name">
                    </div>
                </div>

                <div class="form-group">
                    <label for="desc">描述</label>
                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                </div>

                <div class="form-row">
                    <div class="form-group col-10">
                        <label>纱支：</label>
                        <div class="row align-items-center">
                            <div class="col col-auto">
                                <span>径向： </span>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="desc" v-model="spec.desc">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="desc" v-model="spec.desc">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="desc" v-model="spec.desc">
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col col-auto">
                                <span>纬向： </span>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="desc" v-model="spec.desc">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="desc" v-model="spec.desc">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="desc" v-model="spec.desc">
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-1 ml-auto">
                        <label for="desc">单位：</label>
                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                    </div>
                </div>

                <div class="form-row">
                    <div class="col col-4">
                        <label for="desc">坯布：</label>
                        <div class="col border">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="desc">密度：</label>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-4">
                                        <div class="form-group">
                                            <label for="desc">门幅：</label>
                                            <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        </div>
                                        <div class="form-group">
                                            <label for="desc">克重：</label>
                                            <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-8">
                        <label for="desc">成品：</label>
                        <div class="col border">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="desc">洗前密度：</label>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="desc">洗后密度：</label>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-2">
                                        <div class="form-group">
                                            <label for="desc">门幅：</label>
                                            <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        </div>
                                        <div class="form-group">
                                            <label for="desc">克重：</label>
                                            <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row justify-content-center">
                    <button type="确认" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {
        validationMixin
    } from 'vuelidate'
    import {
        required,
        maxLength,
        email
    } from 'vuelidate/lib/validators'

    export default {
        data: () => ({
            spec: {
                id: null,
                code: null,
                name: null,
                desc: null,
                constructure: null,
                yarUnit: null,
                yarn: {
                    warp: [null, null, null],
                    weft: [null, null, null],
                },
                dnstyUnit: null,
                grey: {
                    dnsty: {
                        warp: [null, null, null],
                        weft: [null, null, null],
                    },
                    width: null,
                    GSM: null
                },
                product: {
                    dnstyBW: {
                        warp: [null, null, null],
                        weft: [null, null, null],
                    },
                    dnstyAW: {
                        warp: [null, null, null],
                        weft: [null, null, null],
                    },
                    width: null,
                    GSM: null
                },
                createDate: null,
                modifiedDate: null
            }
        }),
        methods: {
            submit() {}
        }
    }
</script>