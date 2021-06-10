import { MainLayout } from './layout';
import NotFound from './page/404';
import About from './page/about';
import Auth from './page/auth';
import Checkout from './page/checkout';
import Contact from './page/contact.jsx';
import FAQ from './page/faq';
import Home from './page/home';
import OrderCompleted from './page/oroderCompeled';
import Product from './page/product';
import shipAndReturn from './page/shipAndReturn';
import ShoppingCart from './page/shoppingCart';
import Store from './page/store';
import Shop from './page/shop';

import Account from './page/account';
import OrderDetail from './page/account/component/OrderDetail';
import Payment from './page/account/component/Payment';
import Orders from './page/account/component/Orders';
import PersonalInfo from './page/account/component/PersonalInfo';
import Address from './page/account/component/Address';

let routers = [
    {
        component: MainLayout,
        path: '/',
        routers: [
            {
                component: Home,
                path: '/',
                exact: true
            },
            {
                component: Shop,
                path: '/shop'
            },
            {
                component: Product,
                path: '/product',
            },

            {
                component: About,
                path: '/about',

            },
            {
                component: Auth,
                path: '/auth'

            },
            {
                component: Account,
                path: '/account',
                routers: [

                    {
                        component: Address,
                        path: '/address'
                    },
                    {
                        component: Payment,
                        path: '/payment'
                    },
                    {
                        component: Orders,
                        path: '/orders',
                    },
                    {
                        component: PersonalInfo,
                        path: '/'
                    },

                ]


            },
            {
                component: FAQ,
                path: '/faq',
                exact: true

            },
            {
                component: NotFound,
                path: '/',

            }
        ]
    }
]
export default routers