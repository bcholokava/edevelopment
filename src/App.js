import Home from "./components/Home";
import Account from "./components/Account";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Discover from "./components/Discover";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/login" element={<Login/>} />
</Routes>
  );
}

export default App;
