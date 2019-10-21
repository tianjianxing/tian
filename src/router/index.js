import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import classify from '@/components/classify'
import mime from '@/components/mime'
import cake from '@/components/cake'
import cream from '@/components/cream'
import coffee from '@/components/coffee'
import bread from '@/components/bread'
import cookie from '@/components/cookie'
import present from '@/components/present'
import goods from '@/components/goods'
import birthday from '@/components/birthday'
import newPeopleBoth from '@/components/newPeopleBoth'
import newCustomer from '@/components/newCustomer'
import title from '@/components/title'
import moreTitle from '@/components/moreTitle'
import company from '@/components/company'
import announcement from '@/components/announcement'
import exequatur from '@/components/exequatur'
import delivery from '@/components/delivery'
import shopping from '@/components/shopping'
import fondpwd from '@/components/fondpwd'
import register from '@/components/register'
import notice from '@/components/notice'
import logistics from '@/components/logistics'
import kefu from '@/components/kefu'
import mimeReg from '@/components/mimeReg'
import changenews from '@/components/changenews'
import pay from '@/components/pay'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      	{
      	  path: '/home',
      	  name: 'home',
      	  component: home
      	},
      	{
      	  path: '/classify',
      	  name: 'classify',
      	  component: classify,
      	  children:[
      	  	{
      	  	  path: '/cake',
      	  	  name: 'cake',
      	  	  component: cake
      	  	},
      	  	{
      	  	  path: '/cream',
      	  	  name: 'cream',
      	  	  component: cream
      	  	},
      	  	{
      	  	  path: '/coffee',
      	  	  name: 'coffee',
      	  	  component: coffee
      	  	},
      	  	{
      	  	  path: '/bread',
      	  	  name: 'bread',
      	  	  component: bread
      	  	},
      	  	{
      	  	  path: '/cookie',
      	  	  name: 'cookie',
      	  	  component: cookie
      	  	},
      	  	{
      	  	  path: '/present',
      	  	  name: 'present',
      	  	  component: present
      	  	}
      	  ],
      	  redirect: '/cake'
      	},
      	{
      	  path: '/mime',
      	  name: 'mime',
      	  component: mime,
      	  children:[
      	  	{
      	  		path: '/notice',
      	 		name: 'notice',
      	  		component: notice
      	  	},
      	  	{
      	  		path: '/logistics',
      	 		name: 'logistics',
      	  		component: logistics
      	  	},
      	  	{
      	  		path: '/kefu',
      	 		name: 'kefu',
      	  		component: kefu
      	  	}
      	  ],
      	  redirect: '/notice'
      	},
      	{
      	  path: '/goods',
      	  name: 'goods',
      	  component: goods
      	},
      	{
      	  path: '/birthday',
      	  name: 'birthday',
      	  component: birthday
      	},
      	{
      	  path: '/newPeopleBoth',
      	  name: 'newPeopleBoth',
      	  component: newPeopleBoth
      	},
      	{
      	  path: '/newCustomer',
      	  name: 'newCustomer',
      	  component: newCustomer
      	},
      	{
      	  path: '/title',
      	  name: 'title',
      	  component: title
      	},
      	{
      	  path: '/moreTitle',
      	  name: 'moreTitle',
      	  component: moreTitle
      	},
      	{
      	  path: '/announcement',
      	  name: 'announcement',
      	  component: announcement
      	},
      	{
      	  path: '/exequatur',
      	  name: 'exequatur',
      	  component: exequatur
      	},
      	{
      	  path: '/delivery',
      	  name: 'delivery',
      	  component: delivery
      	},
      	{
      	  path: '/shopping',
      	  name: 'shopping',
      	  component: shopping
      	},
      	{
      	  path: '/fondpwd',
      	  name: 'fondpwd',
      	  component: fondpwd
      	},
      	{
      	  path: '/register',
      	  name: 'register',
      	  component: register
      	},
      	{
      	  path: '/mimeReg',
      	  name: 'mimeReg',
      	  component: mimeReg
      	},
      	{
      	  path: '/changenews',
      	  name: 'changenews',
      	  component: changenews
      	},
      	{
      	  path: '/pay',
      	  name: 'pay',
      	  component: pay
      	}
      	

      ],
      redirect: '/home'
    },
      {
            path: '/company',
            name: 'company',
            component: company
      },
     {
            path: '/order',
            name: 'order',
            component: order
   	}
  ]
})
