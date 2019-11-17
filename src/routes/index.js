import Admin from '../pages/Admin.vue'
import Home from '../pages/biz/Home.vue'
import ProductForm from '../pages/biz/ProductForm.vue'
import SupplierForm from '../pages/biz/SupplierForm.vue'
import CustomerForm from '../pages/biz/CustomerForm.vue'
import MasterUser from '../pages/MasterUser.vue'
import MasterProduct from '../pages/biz/MasterProduct.vue'
import MasterSupplier from '../pages/biz/MasterSupplier.vue'
import MasterCustomer from '../pages/biz/MasterCustomer.vue'
import CeoHome from '../pages/ceo/CeoHome.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import NotFound from '../components/NotFound.vue'
import CeoMasterPart from '../pages/ceo/MasterPart.vue'
import CeoMasterSupplier from '../pages/ceo/MasterSupplier.vue'
import CeoMasterPurchase from '../pages/ceo/MasterPurchase.vue'

const ROLE_ADMIN = 'ADMIN'
const ROLE_BIZ = 'BIZ'
const ROLE_CEO = 'CEO'

const routes = [{
  path: '/',
  name: 'home',
  meta: {
    role: ROLE_BIZ
  },
  component: Home
},
{
  path: '/master/admin',
  name: 'admin',
  meta: {
    role: ROLE_ADMIN
  },
  component: Admin
},
{
  path: '/master/user',
  name: 'masterUser',
  meta: {
    role: ROLE_ADMIN
  },
  component: MasterUser
},
{
  path: '/master/product',
  name: 'masterProduct',
  meta: {
    role: ROLE_BIZ
  },
  component: MasterProduct
},
{
  path: '/master/supplier',
  name: 'masterSupplier',
  meta: {
    role: ROLE_BIZ
  },
  component: MasterSupplier
},
{
  path: '/master/customer',
  name: 'masterCustomer',
  meta: {
    role: ROLE_BIZ
  },
  component: MasterCustomer
},
{
  path: '/forms/product',
  name: 'productForm',
  meta: {
    role: ROLE_BIZ
  },
  component: ProductForm
},
{
  path: '/forms/supplier',
  name: 'supplierForm',
  meta: {
    role: ROLE_BIZ
  },
  component: SupplierForm
},
{
  path: '/forms/customer',
  name: 'customerForm',
  meta: {
    role: ROLE_BIZ
  },
  component: CustomerForm
},
{
  path: '/login',
  name: 'login',
  meta: {
    guest: true
  },
  component: Login
},
{
  path: '/signup',
  name: 'signup',
  meta: {
    public: true
  },
  component: Signup
},
{
  path: '/ceo/home',
  name: 'ceoHome',
  meta: {
    role: ROLE_CEO
  },
  component: CeoHome
}, {
  path: '/ceo/master/part',
  name: 'ceoMasterPart',
  meta: {
    role: ROLE_CEO
  },
  component: CeoMasterPart
},
{
  path: '/ceo/master/supplier',
  name: 'ceoMasterSupplier',
  meta: {
    role: ROLE_CEO
  },
  component: CeoMasterSupplier
}, {
  path: '/ceo/master/purchase',
  name: 'ceoMasterPurchase',
  meta: {
    role: ROLE_CEO
  },
  component: CeoMasterPurchase
},
{
  path: '*',
  meta: {public: true},
  component: NotFound
}
]

const starts = {
  ADMIN: 'admin',
  CEO: 'ceoHome',
  BIZ: 'home'
}

export default {
  items: routes,
  login: 'login',
  starts
}
