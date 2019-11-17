import Admin from '../pages/Admin.vue'
import Home from '../pages/biz/Home.vue'
import ProductForm from '../pages/biz/ProductForm.vue'
import MasterUser from '../pages/MasterUser.vue'
import MasterProduct from '../pages/biz/MasterProduct.vue'
import MasterSupplier from '../pages/MasterSupplier.vue'
import MasterPurchase from '../pages/purchaser/MasterPurchase.vue'
import SupplierForm from '../pages/SupplierForm.vue'
import PurchaseForm from '../pages/PurchaseForm.vue'
import WithdrawForm from '../pages/WithdrawForm.vue'
import ImportPurchasesFromExcel from '../pages/ImportPurchasesFromExcel.vue'
import CeoHome from '../pages/ceo/CeoHome.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import NotFound from '../components/NotFound.vue'
import PoInv from '../pages/purchaser/PoInv.vue'

import POView from '../pages/POView.vue'
// import POTransactions from '../pages/purchaser/POTransactions.vue'
import POEditor from '../pages/POEditor.vue'
import CeoMasterPart from '../pages/ceo/MasterPart.vue'
import CeoMasterSupplier from '../pages/ceo/MasterSupplier.vue'
import CeoMasterPurchase from '../pages/ceo/MasterPurchase.vue'

const ROLE_ADMIN = 'ADMIN'
const ROLE_BIZ = 'BIZ'
const ROLE_CEO = 'CEO'

const masterPurchaseSubroutes = [
  {
    path: '/master/purchase/content',
    name: 'masterPOView',
    component: POView,
    meta: {
      role: ROLE_BIZ
    }
  },
  {
    path: '/master/purchase/edit',
    name: 'masterEditPO',
    component: POEditor,
    meta: {
      role: ROLE_BIZ
    }
  }
]

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
  path: '/master/purchase',
  name: 'masterPurchase',
  meta: {
    role: ROLE_BIZ
  },
  component: MasterPurchase,
  children: masterPurchaseSubroutes
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
  path: '/forms/purchase',
  name: 'purchaseForm',
  meta: {
    role: ROLE_BIZ
  },
  component: PurchaseForm
},
{
  path: '/forms/withdraw',
  name: 'withdrawForm',
  meta: {
    role: ROLE_BIZ
  },
  component: WithdrawForm
},
{
  path: '/forms/purchase/inv',
  name: 'POInvTransaction',
  component: PoInv,
  meta: {
    role: ROLE_BIZ
  }
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
  path: '/ImportPurchasesFromExcel',
  name: 'ImportPurchasesFromExcel',
  component: ImportPurchasesFromExcel
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
