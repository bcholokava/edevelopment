import Home from "./pages/Home";
import Account from "./components/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
</Routes>
  );
}

export default App;
