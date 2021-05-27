import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainLayout } from './layout';
import NotFound from './page/404';
import About from './page/about';
import Account from './page/account';
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
import store from './redux'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/404' component={NotFound} />
            <Route path='/auth' component={Auth} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/contact' component={Contact} />
            <Route path='/faq' component={FAQ} />
            <Route path='/order-completed' component={OrderCompleted} />
            <Route path='/shiping-and-return' component={shipAndReturn} />
            <Route path='/shop' component={Shop} />
            <Route path='/product' component={Product} />
            <Route path='/shopping-cart' component={ShoppingCart} />
            <Route path='/store' component={Store} />
            <Route path='/account' component={Account} />



          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
