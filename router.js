import Vue from 'vue'
import Router from 'vue-router'
import MyCorp from './pages/'
import About from './pages/about'
import CategoriesList from './pages/categories/list'
import KeyboardsDetail from './pages/categories/keyboards/detail'
import HeadsetsDetail from './pages/categories/headsets/detail'
import MousesDetail from './pages/categories/mouses/detail'
import CategoriesEdit from './pages/categories/edit'
import CategoriesAdd from './pages/categories/add'
import Login from './pages/autorization/login'
import Registration from './pages/autorization/registration'
import KeyboardsList from './pages/categories/keyboards/list'
import HeadstesList from './pages/categories/headsets/list'
import MousesList from './pages/categories/mouses/list'
import Cart from './pages/cart/cart'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'about',
        path: '/:lang?/about',
        component: About
      },
      {
        name: 'categories',
        path: '/:lang?/categories',
        component: CategoriesList
      },
      {
        name: 'keyboards',
        path: '/:lang?/categories/keyboards',
        component: KeyboardsList
      },
      {
        name: 'headsets',
        path: '/:lang?/categories/headsets',
        component: HeadstesList
      },
      {
        name: 'mouses',
        path: '/:lang?/categories/mouses',
        component: MousesList
      },
      {
        name: 'keyboards-detail',
        path: '/:lang?/categories/keyboards/:id', // :id динамическая часть пути
        component: KeyboardsDetail
      },
      {
        name: 'headsets-detail',
        path: '/:lang?/categories/headsets/:id', // :id динамическая часть пути
        component: HeadsetsDetail
      },
      {
        name: 'mouses-detail',
        path: '/:lang?/categories/mouses/:id', // :id динамическая часть пути
        component: MousesDetail
      },
      {
        name: 'categories-add',
        path: '/:lang?/categories/add',
        component: CategoriesAdd
      },
      {
        name: 'categories-edit',
        path: '/:lang?/categories/edit/:id', // :id динамическая часть пути
        component: CategoriesEdit
      },
      {
        name: 'login',
        path: '/:lang?/login', // :id динамическая часть пути
        component: Login
      },
      {
        name: 'registration',
        path: '/:lang?/registration', // :id динамическая часть пути
        component: Registration
      },
      {
        name: 'cart',
        path: '/:lang?/cart', // :id динамическая часть пути
        component: Cart
      },
      {
        name: 'home',
        path: '/:lang?/',
        component: MyCorp
      }
    ]
  })
}
