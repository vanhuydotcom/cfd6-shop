import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
