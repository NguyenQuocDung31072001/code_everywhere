import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from "./pages/home.jsx"
import Login from "./pages/login.jsx"
import Signin from "./pages/signin.jsx"
function App() {

  return (
    <div >
        <BrowserRouter>
          {/* <Link to="/">login</Link><br/>
          <Link to="/home">Home</Link><br/>
          <Link to="/signin">Sign in</Link><br/>
          <div className="w-[200px] h-1 bg-black">

          </div> */}
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
