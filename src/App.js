import Switch from "./Components/Switch/Switch"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./Redux/Store/Store"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Switch />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
