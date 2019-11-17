<template>
  <master-details  :master="master">
    <tabpage class="col-9" :tabs="tabs" :activated="currentTab" slot="details" @changed="onPageChanged">
      <div slot="overview">
        <h1>Welcome to our support center 1.0.1</h1>
        <p>
          We are here to help! Please read the <a>F.A.Q</a> first,
          and if you don't find the answer to your question, <a>send
            us a ticket!</a>
        </p>
      </div>
      <div slot="products">
        <filters-form :config="productFilters" class="my-2" @search="onSearchProducts" @action="onCreateProduct"/>
        <item-list :items="products">
          <template slot-scope="product">
            <div class="row border-0 p-2">
              <div class="col">
                <div class="d-flex">
                  <octicon :name="stateImg(product.item.data.state)" class="" size="16" style="color:green"/>
                  <h6 class="font-weight-bold ml-2 mr-auto">{{product.item.data.code}}</h6>
                </div>
                <div class="d-flex">
                  <octicon v-if="product.item.data.content" name="gear" class="mt-1 mr-1" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder">{{product.item.data.content}}</h6>
                  <octicon v-if="product.item.data.constructure" name="ruby" class="mt-1 mr-1 ml-3" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder  mr-auto">{{product.item.data.constructure}}</h6>
                  <octicon name="note" class="mt-1 mr-1" size="16" style="color:green"/>
                  <h6 class="text-primary mb-1 selectable" @click="navToProduct(product.item)">
                    {{product.item.data.desc}}
                  </h6>
                </div>
                <div class="d-flex">
                  <octicon v-if="product.item.data.yarn" name="server" class="mt-1 mr-1" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder">{{product.item.data.yarn}}</h6>
                  <octicon v-if="product.item.data.spec.width" name="ellipsis" class="mt-1 mr-1 ml-3" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder mb-1" @click="navToPart(product.item)">
                    {{product.item.data.spec.width}}
                  </h6>
                  <octicon v-if="product.item.data.spec.dnsty" name="fold" class="mt-1 mr-1 ml-3" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder mb-1" @click="navToPart(product.item)">
                    {{product.item.data.spec.dnsty}}
                  </h6>
                  <octicon v-if="product.item.data.spec.GSM" name="hubot" class="mt-1 mr-1 ml-3" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder mb-1 mr-auto" @click="navToPart(product.item)">
                    {{product.item.data.spec.GSM}}
                  </h6>
                  <octicon v-if="product.item.data.grey.width" name="ellipsis" class="mt-1 mr-1" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder mb-1" @click="navToPart(product.item)">
                    {{product.item.data.grey.width}}
                  </h6>
                  <octicon v-if="product.item.data.grey.dnsty" name="fold" class="mt-1 mr-1 ml-3" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder mb-1" @click="navToPart(product.item)">
                    {{product.item.data.grey.dnsty}}
                  </h6>
                  <octicon v-if="product.item.data.grey.GSM" name="hubot" class="mt-1 mr-1 ml-3" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder mb-1" @click="navToPart(product.item)">
                    {{product.item.data.grey.GSM}}
                  </h6>
                </div>
                <div class="d-flex mt-1">
                  <octicon v-if="product.item.data.tags" name="light-bulb" class="" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder ml-1 mr-auto">{{product.item.data.tags}}</h6>
                  <octicon v-if="product.item.data.remark" name="tag" class="mt-1" size="16" style="color:green"/>
                  <h6 class="font-weight-bolder ml-1">{{product.item.data.remark}}</h6>
                </div>
                <div class="d-flex mt-1">
                  <octicon v-if="product.item.creator" name="person" class="" size="16" style="color:green"/>
                  <h6 v-if="product.item.creator" class="font-weight-bolder ml-1">{{product.item.creator.data.name}}</h6>
                  <h6 class="text-secondary ml-auto" style="font-size:10px">
                    更新于 {{product.item.data.updatedAt | date }}
                  </h6>
                </div>
              </div>
            </div>
          </template>
        </item-list>
      </div>
      <div slot="suppliers">
        <filters-form
          :config="supplierFilters"
          class="my-2"
          @search="onSearchSuppliers"
          @action="onCreateSupplier"
        />
        <item-list :items="suppliers">
          <template slot-scope="data">
            <div class="row border-0 p-2">
              <div class="col">
                <h6 class="font-weight-bold">{{data.item.data.code}}</h6>
                <div class="d-flex">
                  <h6
                    class="text-primary mb-1 selectable"
                    @click="navToSupplier(data.item)"
                  >{{data.item.data.name}}</h6>
                </div>
                <div class="d-flex">
                  <h6 class="mb-1">{{data.item.data.address}}</h6>
                </div>
                <div class="d-flex">
                  <octicon
                    name="primitive-dot"
                    scale="1.1"
                    style="color:yellow"
                  ></octicon>
                  <h6
                    class="ml-1"
                    style="font-size:10px"
                  >{{data.item.data.link)}</h6>
                  <octicon
                    v-if="data.item.data.tags"
                    name="tag"
                    class="ml-3"
                    size="16"
                    style="color:green"
                  />
                  <h6
                    class="ml-1 mr-auto"
                    style="font-size:10px"
                  >{{data.item.data.tags}}</h6>
                  <h6
                    class="text-secondary"
                    style="font-size:10px"
                  >更新于 {{data.item.data.updatedDate | date}}</h6>
                </div>
              </div>
            </div>
          </template>
        </item-list>
      </div>
      <div slot="customers">
        <filters-form :config="customerFilters"
          class="my-2"
          @search="onSearchCustomers"
          @action="onCreateCustomer"
        />
        <item-list :items="customers">
          <template slot-scope="data">
            <div class="row border-0 p-2">
              <div class="col">
                <h6 class="font-weight-bold">{{data.item.data.code}}</h6>
                <div class="d-flex">
                  <h6
                    class="text-primary mb-1 selectable"
                    @click="navToCustomer(data.item)"
                  >{{data.item.data.name}}</h6>
                </div>
                <div class="d-flex">
                  <h6 class="mb-1">{{data.item.data.address}}</h6>
                </div>
                <div class="d-flex">
                  <octicon
                    name="primitive-dot"
                    scale="1.1"
                    style="color:yellow"
                  ></octicon>
                  <h6
                    class="ml-1"
                    style="font-size:10px"
                  >{{data.item.data.link)}</h6>
                  <octicon
                    v-if="data.item.data.tags"
                    name="tag"
                    class="ml-3"
                    size="16"
                    style="color:green"
                  />
                  <h6
                    class="ml-1 mr-auto"
                    style="font-size:10px"
                  >{{data.item.data.tags}}</h6>
                  <h6
                    class="text-secondary"
                    style="font-size:10px"
                  >更新于 {{data.item.data.updatedDate | date}}</h6>
                </div>
              </div>
            </div>
          </template>
        </item-list>
      </div>
    </tabpage>
  </master-details>
</template>

<script>
import {createQueryString} from '../../helpers/QueryHelper.js'
import MasterDetails from '../../components/MasterDetails/MasterDetails'
import FiltersForm from '../../components/FiltersForm'
import ItemList from '../../components/ItemList'
import state from '../../store'
const ROUTE_NAME = 'home'

export default {
  components: {
    MasterDetails,
    FiltersForm,
    ItemList
  },
  data () {
    return {
      currentTab: null,
      products: [],
      suppliers: [],
      customers: [],
      userAttrs: {
        userId: null,
        name: null,
        email: null
      }
    }
  },
  computed: {
    master () {
      const user = state.getters.user
      const data = {
        ...user
      }
      return {
        editable: true,
        logo: user.pic ? user.pic : '/static/img/clx.jpg',
        title: user.name,
        email: user.email,
        items: [
          {
            name: 'userId',
            icon: 'person'
          },
          {
            name: 'name',
            icon: 'note'
          },
          {
            name: 'email',
            icon: 'mail'
          }
        ],
        data,
        update: this.onSaveMaster
      }
    },
    productFilters () {
      return {
        search: {width: 400},
        cmdButton: {text: '新增'}
      }
    },
    supplierFilters () {
      return {
        search: {width: 400},
        cmdButton: {text: '新增'}
      }
    },
    customerFilters () {
      return {
        search: {width: 400},
        cmdButton: {text: '新增'}
      }
    },
    tabs () {
      return [
        {
          id: 'overview',
          title: '概要'
        },
        {
          id: 'products',
          title: '产品'
        },
        {
          id: 'suppliers',
          title: '工厂'
        },
        {
          id: 'customers',
          title: '客户'
        }
      ]
    }
  },
  async created () {
    let tab = state.getters.currentPage(ROUTE_NAME)
    tab = tab || 'overview'
    this.currentTab = tab
    await this.loadPageData(tab)
  },
  methods: {
    stateImg (state) {
      const imgs = {draft: 'pencil', published: 'briefcase', expired: 'x'}
      let s = state || 'draft'
      return imgs[s]
    },
    async onSearchProducts (cond) {
      let r = createQueryString([], cond)
      this.products = await state.dispatch('searchProducts', r)
    },
    async onSearchSuppliers (cond) {
      let r = createQueryString([], cond)
      this.suppliers = await state.dispatch('searchSuppliers', r)
    },

    async onSearchCustomers (cond) {
      let r = createQueryString(['state'], cond)
      this.customers = await state.dispatch('searchCustomers', r)
    },

    async loadPageData (page) {
      const loaders = {
        products: this.onSearchProducts,
        suppliers: this.onSearchSuppliers,
        customer: this.onSearchCustomers
      }
      const func = loaders[page]
      if (!func) return
      await func({search: '', filters: []})
    },

    async onPageChanged (page) {
      state.commit('currentPage', {route: ROUTE_NAME, page})
      await this.loadPageData(page)
    },

    onCreateProduct () {
      state.commit('selectedProduct')
      let path = {
        name: 'productForm'
      }
      this.$router.push(path)
    },

    onCreateSupplier () {
      state.commit('selectedSupplier')
      let path = {
        name: 'supplierForm'
      }
      this.$router.push(path)
    },

    onCreateCustomer () {
      state.commit('selectedCustomer')
      let path = {
        name: 'customerForm'
      }
      this.$router.push(path)
    },

    /* onEditMaster () {
      this.userAttrs = {
        ...this.user
      }
    }, */

    async onSaveMaster (data) {
      state.dispatch('saveUserProfile', data)
    },

    navToProduct (data) {
      state.commit('selectedProduct', data)
      let path = {
        name: 'masterProduct'
      }
      this.$router.push(path)
    },

    navToSupplier (data) {
      state.commit('selectedSupplier', data)
      let path = {
        name: 'masterSupplier'
      }
      this.$router.push(path)
    },

    navToCustomer (data) {
      state.commit('selectedCustomer', data)
      let path = {
        name: 'masterCustomer'
      }
      this.$router.push(path)
    }
  }
}
</script>

<style>
.selectable:hover {
  border-bottom: 2px solid #007bff;
  cursor: pointer;
}
</style>
