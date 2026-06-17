import { Route, Routes } from "react-router-dom";
import "./App.css";

// import Categrou from "./component/Categrou";
// import Content from "./component/Content";
// import Product from "./component/Product";
// import Slider from "./component/Slider";
import Layout from "./layout/Layout";
import Allproducts from "./component/ProductsPage";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ProductDetail from "./component/ProductDetail";
import ErrorPage from "./component/ErrorPage";
import MainLayout from "./component/MainLayout";

function App() {
  return (
    <>
     

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainLayout/>}/>
    
        </Route>

        <Route path="/product" element={<Allproducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
