import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Orders from "./components/Orders/Orders";

import About from "./components/About/About";
import ReviewItem from "./components/ReviewItem/ReviewItem";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Inventory from "./components/Inventory/Inventory";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/order" element={<Orders></Orders>}>
          <Route path="/order" element={<ReviewItem></ReviewItem>}></Route>
        </Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
