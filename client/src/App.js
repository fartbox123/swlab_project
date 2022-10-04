import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CreateCase from "./pages/createCase/CreateCase";
import CreateUser from "./pages/createUser/CreateUser";
import UpdateCase from "./pages/updateCase/UpdateCase";
import { AuthContext } from "./context/AuthContext";

function App() {
  
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login/>} />
        <Route path="/login" element={user ? <Navigate to='/'/> : <Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/createCase" element={user ? <CreateCase /> : <Navigate to='/login'/>} />
        <Route path="/updateCase/:caseId" element={user ? <UpdateCase /> : <Navigate to='/login'/>} />
      </Routes>
    </Router>  
  )
}

export default App;
