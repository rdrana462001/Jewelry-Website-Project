import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Explore from "./pages/Explore";
import AdminUsers from "./Admin/AdminUsers";
import AdminOrders from "./Admin/AdminOrders";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./Profile/Profile";
import AddProduct from "./Admin/AddProduct";
import AdminProducts from "./Admin/AdminProducts";
import EditProduct from "./Admin/EditProduct";
import Wishlist from "./pages/Wishlist";
// import Collection from "./Luxury/Premium";
import Collection from "./collection/collection";
import Luxury from "./Luxury/Luxury";
import AdminDashboard from "./Admin/AdminDashboard";
// import Cart from "./pages/Cart";
import Home from "./Home";
import Login from "./Login/Login";
import Signup2 from "./Sign up/signup2";
import Dashboard from "./Dashboard/Dashboard";
import Logout from "./Logout/Logout";
import UserOrders from "./pages/UserOrders";

import ForgotPassword from "./Login/ForgotPassword";
// import Premium from "./Luxury/Premium";
// import Rings from "../luxury/rings";
import Cart from "./pages/cart";
// import Admin from "./pages/Admin";
// import AdminDashboard from "./pages/AdminDashboard";

function App() {

  return (

    <Router>

      <Routes>
<Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
  path="/products"
  element={<AdminProducts />}
/>
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route
  path="/admin-orders"
  element={<AdminOrders />}
/>
<Route
  path="/wishlist"
  element={<Wishlist />}
/>
<Route path="/my-orders" element={<UserOrders />} />

<Route
  path="/explore"
  element={<Explore />}
/>
<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
        <Route
          path="/login"
          element={<Login />}
        />
        {/* <Route
          path="/rings"
          element={<Rings />}
        /> */}
        <Route
  path="/profile"
  element={<Profile />}
/>
        <Route
  path="/collection/:category"
  element={<Collection />}
/>
{/* <Route
  path="/Premium"
  element={<Collection />}
/> */}
 {/* <Route
          path="/collection"
          element={<Collection />}
        /> */}
        {/* <Route
          path="/Premium"
          element={<Premium></Premium>}
        /> */}

        <Route
          path="/signup"
          element={<Signup2 />}
        />
<Route
  path="/users"
  element={<AdminUsers />}
/>

<Route
  path="/luxury/:category"
  element={<Luxury />}
/>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/logout"
          element={<Logout />}
        />
<Route
  path="/admin"
  element={<AdminDashboard />}
/>

<Route
  path="/add-product"
  element={<AddProduct />}
/>
{/* <Route
  path="/products"
  element={<AdminProducts />}
/> */}
<Route
  path="/edit-product/:id"
  element={<EditProduct />}
/>
      </Routes>

    </Router>

  );

}

export default App;