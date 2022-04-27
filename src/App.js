import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Offers from "./components/Offers/Offers";
import About from "./components/About/About";
import ReviewItem from "./components/ReviewItem/ReviewItem";

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

        <Route path="/offers" element={<Offers></Offers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
