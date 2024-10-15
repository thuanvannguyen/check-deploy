import Home from "./pages/client/Home";
import "./assets/css/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/client/NotFound";
import Layout from "./pages/client/Layout";
import ProductDetail from "./pages/client/ProductDetail";

import Dashboard from "./pages/admin/Dasboad";
import LayoutAdmin from "./pages/admin/Layout";
import Login from "./pages/auth/Login";

// Import config tailwind.css
import "./assets/config/tailwind.css";
import IsAuth from "./components/auth/IsAuth";
import DBProduct from "./pages/admin/DBProduct";
import CreateProduct from "./pages/admin/CreateProduct";
import EditProduct from "./pages/admin/EditProduct";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/login" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={<IsAuth component={<LayoutAdmin />} />}
                >
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard/product" element={<DBProduct />} />
                    <Route
                        path="/dashboard/product/add"
                        element={<CreateProduct />}
                    />
                    <Route
                        path="/dashboard/product/edit/:id"
                        element={<EditProduct />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;