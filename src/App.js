import './assets/css/custom.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './core';
import routers from './routers'
import store from './redux'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {RouterConfig(routers)}
      </BrowserRouter>
    </Provider>
  );
}
export default App;
