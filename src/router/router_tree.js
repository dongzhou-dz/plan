
import HelloWorld from '@/module/store/HelloWorld'
import Shop from '@/module/store/shop'
import Index from '@/module/store/index'
import List from '@/module/store/list'
import Box from '@/module/store/box'
import Tab from '@/module/store/tab'


export default{
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/index/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Tab',
          component: Tab
        },
        {
          path: 'box',
          name: 'Box',
          component: Box
        }
      ]
    }
  ]
}
