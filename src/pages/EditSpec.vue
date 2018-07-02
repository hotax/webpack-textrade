<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10">
            <form @submit.prevent="submit">
                <div class="form-row mt-2 mb-4 border-bottom align-items-end row justify-content-between">
                    <h2>产品规格</h2>
                    <span v-if='spec.id'>标识：{{spec.id}}</span>
                    <span v-if='spec.id'>日期：{{spec.modifiedDate}}</span>
                </div>

                <div class="form-row">
                    <div class="form-group col-12 col-sm-2">
                        <label for="code">编号：</label>
                        <input type="text" class="form-control" id="code" v-model='spec.code'>
                    </div>
                    <div class="form-group col-12 col-sm-8 ml-sm-auto">
                        <label for="name">名称：</label>
                        <input type="text" class="form-control" id="name" v-model="spec.name">
                    </div>
                    <div class="form-group col-12 col-sm-2 ml-sm-auto">
                        <label for="constructure">组织：</label>
                        <input type="text" class="form-control" id="constructure" v-model="spec.constructure">
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
                                <input type="text" class="form-control" id="specYarnWarp" v-model="spec.yarn.warp[0]">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="specYarnWarp" v-model="spec.yarn.warp[1]">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="specYarnWarp" v-model="spec.yarn.warp[2]">
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col col-auto">
                                <span>纬向： </span>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="specYarnWeft0" v-model="spec.yarn.weft[0]">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="specYarnWeft1" v-model="spec.yarn.weft[1]">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="specYarnWeft2" v-model="spec.yarn.weft[2]">
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-1 ml-auto">
                        <label for="yarnUnit">单位：</label>
                        <input type="text" class="form-control" id="yarnUnit" v-model="spec.yarnUnit">
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
                                            <label>密度：</label>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="greyDnstyWarp0" v-model="spec.grey.dnsty.warp[0]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="greyDnstyWeft0" v-model="spec.grey.dnsty.weft[0]">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="greyDnstyWarp1" v-model="spec.grey.dnsty.warp[1]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="greyDnstyWeft1" v-model="spec.grey.dnsty.weft[1]">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="greyDnstyWarp2" v-model="spec.grey.dnsty.warp[2]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="greyDnstyWeft2" v-model="spec.grey.dnsty.weft[2]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-4">
                                        <div class="form-group">
                                            <label for="greyWidth">门幅：</label>
                                            <input type="text" class="form-control" id="greyWidth" v-model="spec.grey.width">
                                        </div>
                                        <div class="form-group">
                                            <label for="greyGSM">克重：</label>
                                            <input type="text" class="form-control" id="greyGSM" v-model="spec.grey.GSM">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-8">
                        <label>成品：</label>
                        <div class="col border">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>洗前密度：</label>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyBWWarp0" v-model="spec.product.dnstyBW.warp[0]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyBWWeft0" v-model="spec.product.dnstyBW.weft[0]">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyBWWarp1" v-model="spec.product.dnstyBW.warp[1]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyBWWeft1" v-model="spec.product.dnstyBW.weft[1]">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyBWWarp2" v-model="spec.product.dnstyBW.warp[2]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyBWWeft2" v-model="spec.product.dnstyBW.weft[2]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="desc">洗后密度：</label>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyAWWarp0" v-model="spec.product.dnstyAW.warp[0]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyAWWeft0" v-model="spec.product.dnstyAW.weft[0]">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyAWWarp1" v-model="spec.product.dnstyAW.warp[1]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyAWWeft1" v-model="spec.product.dnstyAW.weft[1]">
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyAWWarp2" v-model="spec.product.dnstyAW.warp[2]">
                                                </div>
                                                <span>--</span>
                                                <div class="col">
                                                    <input type="text" class="form-control" id="productDnstyAWWeft2" v-model="spec.product.dnstyAW.weft[2]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-2">
                                        <div class="form-group">
                                            <label for="productWidth">门幅：</label>
                                            <input type="text" class="form-control" id="productWidth" v-model="spec.product.width">
                                        </div>
                                        <div class="form-group">
                                            <label for="productGSM">克重：</label>
                                            <input type="text" class="form-control" id="productGSM" v-model="spec.product.GSM">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <button type="submit" class="btn btn-primary">确认</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import _ from 'underscore'
    import router from '../router.js'
    export default {
        data: () => ({
            spec: {
                id: null,
                code: null,
                name: null,
                desc: null,
                constructure: null,
                yarnUnit: null,
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
        computed: {
            specData() {
                function isValid(val) {
                    return val && val.trim().length > 0
                }

                function packObject(obj) {
                    let data = {}
                    _.keys(obj).forEach(key => {
                        let val = obj[key]
                        if (val) {
                            if (_.isArray(val)) {
                                let arrayVal = []
                                for (let i = 0; i < 3; i++) {
                                    if (isValid(val[i])) {
                                        arrayVal.push(val[i].trim())
                                    } else {
                                        break
                                    }
                                }
                                if (arrayVal.length > 0) {
                                    data[key] = arrayVal
                                }
                            } else if (_.isObject(val)) {
                                let objVal = packObject(val)
                                if (_.keys(objVal).length > 0) {
                                    data[key] = objVal
                                }
                            } else {
                                if (isValid(val)) data[key] = val
                            }
                        }
                    });
                    return data
                }

                return packObject(this.spec)
            }
        },
        methods: {
            async submit() {
                try {
                    await this.$fetch('api/specs', {
                        method: 'POST',
                        body: JSON.stringify(this.specData)
                    })
                } catch (e) {
                    alert(JSON.stringify(e))
                }
                router.replace({
                    name: 'specs'
                })
            }
        }
    }
</script>