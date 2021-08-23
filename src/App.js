import { BrowserRouter } from "react-router-dom"
import Routers from "./routes/route"
import CreateCommunityForm from "./components/CreateCommunityForm"

function App() {
  return (

    <BrowserRouter>
      <Routers />
      {/* <CreateCommunityForm/> */}
    </BrowserRouter>
  );
}

export default App;
