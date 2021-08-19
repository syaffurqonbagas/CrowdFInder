import { BrowserRouter } from "react-router-dom"
import Routers from "./routes/route"
import CreateCommunityForm from "./components/CreateCommunityForm";
import HomePage from "./pages/HomePage";

function App() {
  return (

    <BrowserRouter>
      {/* <Routers /> */}
      {/* <CreateCommunityForm/> */}
      {/* <FormCreatePost/> */}
      {/* <FormCreateEvent/> */}
      <HomePage/>
    </BrowserRouter>
  );
}

export default App;
