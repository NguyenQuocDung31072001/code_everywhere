import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/home"
import Write from "./pages/write"
import Setting from "./pages/settings"
import Login from "./pages/login.jsx"
import Signup from "./pages/signup.jsx"
import Post from "./pages/Post.jsx"
function App() {

  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/post/:id" element={<Post/>}/>
            <Route path="/home/write" element={<Write/>}/>
            <Route path="/home/settings" element={<Setting/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
