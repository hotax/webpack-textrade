<template>
    <div class="container-fluid h-100">
        <div class="row mt-0 mb-0 h-100">
            <div class="col-2 p-0">
                <div class=" container-fluid h-100 p-0 pl-2 pr-1">
                    <div class="row align-items-end" style="height: 7%">
                        <div class="col-12">
                            <label class="ml-2 text-light">请输入查询条件：</label>
                        </div>
                    </div>
                    <div class="row" style="height: 85%">
                        <div class="col-12">
                            <textarea class=" fill-height form-control pl-2 text-success bg-dark border-0" v-model="queryCondi"></textarea>
                        </div>
                    </div>
                    <div class="row" style="height: 8%">
                        <div class="col-12">
                            <button type="submit" class="ml-0 btn bg-info" style="width: 100%" @click="search">查询</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-10 p-0">
                <table class="table table-dark table-striped table-bordered table-hover table-sm">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col" v-for="fld in headers" :key="fld.value">
                                <h5>{{fld.text}}</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in specList" :key="item.id">
                            <td v-for="(fld, j) in headers" :key="item[fld.value] + '-' + j" :class="'align-middle ' + (fld.align ? 'text-' + fld.align : 'text-left')">{{item[fld.value]}}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
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
                    align: 'right',
                    value: 'code'
                }, {
                    text: '名称',
                    align: 'left',
                    value: 'name'
                }, {
                    text: '成分',
                    value: 'component'
                }, {
                    text: '组织',
                    align: 'left',
                    value: 'constructure'
                }, {
                    text: '经纱',
                    value: 'warp'
                }, {
                    text: '纬纱',
                    value: 'weft'
                }, {
                    text: '密度',
                    value: 'dnsty'
                }, {
                    text: '门幅',
                    value: 'width'
                }, {
                    text: '克重',
                    align: 'right',
                    value: 'GSM'
                }, {
                    text: '日期',
                    align: 'center',
                    value: 'modifiedDate'
                }]
            }
        },
        computed: { ...mapGetters(['specs']),
            specList() {
                let data = []
                if (this.specs && this.specs.collection) {
                    this.specs.collection.items.forEach(item => {
                        item = item.data
                        let warp
                        if (item.yarn && item.yarn.warp[0])
                            warp = item.yarn.warp[0]
                        let weft
                        if (item.yarn && item.yarn.weft[0])
                            weft = item.yarn.weft[0]
                        let width, GSM
                        if (item.product) {
                            width = item.product.width
                            GSM = item.product.GSM
                        }

                        data.push({
                            id: item.id,
                            code: item.code,
                            name: item.name,
                            component: item.component,
                            constructure: item.constructure,
                            warp: warp,
                            weft: weft,
                            width: width,
                            GSM: GSM
                        })
                    });
                }
                return data
            }
        },
        methods: { ...mapActions(['searchSpecs']),
            search() {
                const q = this.queryCondi
                this.searchSpecs(q)
            }
        }
    }
</script>