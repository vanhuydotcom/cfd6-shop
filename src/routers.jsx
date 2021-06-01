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
import Shop from './page/shop';
import ShoppingCart from './page/shoppingCart';
import Store from './page/store';


import Account from './page/account';
import Address from './page/account/component/Address';
import OrderDetail from './page/account/component/OrderDetail';
import Payment from './page/account/component/Payment';
import Orders from './page/account/component/Orders';
import PersonalInfo from './page/account/component/PersonalInfo';

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
                component: About,
                path: '/about',
                exact: true

            },
            {
                component: Account,
                path: '/account',
                exact: true,
                routers: [

                    {
                        component: PersonalInfo,
                        path: '/personal-info'
                    },
                    {
                        component: OrderDetail,
                        path: '/order-detail',
                    },
                    {
                        component: Orders,
                        path: '/',
                    },
                    {
                        component: Address,
                        path: '/address'
                    },
                    {
                        component: Payment,
                        path: '/payment'
                    },

                ]


            },
            {
                component: NotFound,
                path: '/404',

            }
        ]
    }
]
export default routers