import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
    <NavBar />
    
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
     
   </>
     
  );
}

export default App;
