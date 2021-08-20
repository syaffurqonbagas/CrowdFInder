import { BrowserRouter } from "react-router-dom"
import Routers from "./routes/route"

function App() {
  return (

    <BrowserRouter>
      <Routers />
      {/* <CreateCommunityForm/> */}
    </BrowserRouter>
  );
}

export default App;
