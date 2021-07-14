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
import Orders from './page/account/component/Orders';
import PersonalInfo from './page/account/component/PersonalInfo';
import Address from './page/account/component/address/Address';
import AddressList from './page/account/component/address/AddressList';
import Wishlist from './page/account/component/wishlist';
import Payment from './page/account/component/payment';
import PaymentList from './page/account/component/paymentList';



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
                path: '/product/:slug',
            },
            {
                component: Checkout,
                path: '/checkout',
            },
            {
                component: ShoppingCart,
                path: '/shopping-cart',
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
                        path: '/address/:action/:_id'
                    },
                    {
                        component: AddressList,
                        path: '/address'
                    },
                    {
                        component: Payment,
                        path: '/payment/:action/:_id'
                    },
                    {
                        component: PaymentList,
                        path: '/payment'
                    },
                    {
                        component: Wishlist,
                        path: '/wishlist'
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