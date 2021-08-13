import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import Routers from "./"

function App() {
  return (
    <Provider>
    <BrowserRouter>
        <Routers />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
