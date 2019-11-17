import {
  $get,
  $post,
  $login,
  $put,
  $entry
} from '../plugins/fetch'
import router from '../router'
import queryCollection from '../helpers/DealWithQueryCollection'
const productRefs = {
  User: 'creator'
}
const supplierRefs = productRefs
const customerRefs = productRefs

const actions = {
  async entry (ctx) {
    let entry = await $entry()
    let links = queryCollection.dealWithLinkages(entry)
    ctx.commit('entry', links)
  },

  async login ({
    commit
  }, data) {
    try {
      const session = await $login(data)
      if (session) {
        commit('token', session.token)
        commit('user', session.user)
        let path = router.currentRoute.params.wantedRoute || {
          name: 'home'
        }
        if (session.user.isAdmin) path = {name: 'admin'}

        router.replace(path)
      }
    } catch (e) {
      // do nothing
    }
  },

  async logout ({
    commit
  }) {
    commit('token', null)
    commit('user', null)
    if (router.currentRoute.matched.some(r => !r.meta.public)) {
      router.replace({
        name: 'login',
        params: {
          wantedRoute: router.currentRoute.fullPath
        }
      })
    }
  },

  async registerUser ({getters}, data) {
    const entry = getters.entry
    await $post(entry.register, data)
  },

  async authToUser ({commit}, {selfUrl, url, data}) {
    await $put(url, undefined, data)
    let user = await $get(selfUrl)
    user = await queryCollection.dealWithEntity(user, 'User')
    commit('selectedUser', user)
  },

  async updatePwd (ctx, {id, data}) {
    const url = `/auth/users/${id}/password`
    console.log('url:' + url)
    await $put(url, undefined, data)
  },

  async saveUserProfile ({getters, commit}, data) {
    const url = getters.entry.currentUser + '?scope=info'
    let toUpdate = {...data}
    await $put(url, undefined, toUpdate)
    commit('user', {...getters.user, ...data})
  },

  async searchUsers ({getters}, condi) {
    const data = await queryCollection.searchCollection(getters, 'users', condi, 'User')
    return data
  },

  async searchProducts ({getters}, condi) {
    const data = await queryCollection.searchCollection(getters, 'products', condi, 'Product', productRefs)
    return data
  },

  async searchSuppliers ({getters}, condi) {
    const data = await queryCollection.searchCollection(getters, 'suppliers', condi, 'Supplier', supplierRefs)
    return data
  },

  async searchCustomers ({getters}, condi) {
    const data = await queryCollection.searchCollection(getters, 'customers', condi, 'Customer', customerRefs)
    return data
  },

  async updateProduct ({commit}, data) {
    await $put(data.links.self, data.data.__v, data.data)
    let updated = await $get(data.links.self)
    updated = await queryCollection.dealWithEntity(updated, 'Product', productRefs)
    commit('selectedProduct', updated)
  },

  async updateSupplier ({commit}, data) {
    await $put(data.links.self, data.data.__v, data.data)
    let updated = await $get(data.links.self)
    updated = await queryCollection.dealWithEntity(updated, 'Supplier', supplierRefs)
    commit('selectedSupplier', updated)
  },

  async updateCustomer ({commit}, data) {
    await $put(data.links.self, data.data.__v, data.data)
    const updated = await $get(data.links.self)
    const entity = await queryCollection.dealWithEntity(updated, 'Customer', customerRefs)
    commit('selectedCustomer', entity)
  },

  async getSupplier (ctx, url) {
    const data = await $get(url)
    return data
  },

  async getCustomer (ctx, url) {
    const data = await $get(url)
    return data
  },

  async getProduct (ctx, url) {
    const data = await $get(url)
    return data
  },

  async createProduct ({getters}, data) {
    const entry = getters.entry
    const url = entry.products
    await $post(url, data)
  },

  async createSupplier ({getters}, data) {
    const entry = getters.entry
    const url = entry.suppliers
    await $post(url, data)
  },

  async createCustomer ({getters}, data) {
    const entry = getters.entry
    const url = entry.customers
    await $post(url, data)
  }
}

export default actions
