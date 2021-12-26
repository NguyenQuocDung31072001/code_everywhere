import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/home"
import Write from "./pages/write"
import Setting from "./pages/settings"
import Login from "./pages/login.jsx"
import Signin from "./pages/signin.jsx"
function App() {

  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/write" element={<Write/>}/>
            <Route path="/home/settings" element={<Setting/>}/>
            <Route path="/signin" element={<Signin/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
