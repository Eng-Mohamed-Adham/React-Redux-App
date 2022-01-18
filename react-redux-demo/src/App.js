import { Provider } from 'react-redux';
import store from './Components/Redux/store';
import HookCakeCounter from './Components/CakeCounterHooks'
import IccreamCounterHook from './Components/IccreamCounterHook';
import CoffeeCounterHook from './Components/CoffeeCounterHook';
function App() {
  return (
    <Provider store={store}>
        <div className="App">
        <HookCakeCounter/>
        <IccreamCounterHook/>
        <CoffeeCounterHook/>
        </div>
    </Provider>
  );
}

export default App;
