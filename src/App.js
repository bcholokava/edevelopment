
import Home from "./components/Home";
import Account from "./components/Account";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/account" element={<Account/>} />
</Routes>
  );
}

export default App;
