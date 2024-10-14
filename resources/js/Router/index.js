import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
// import CartScreen from "../pages/Cart";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import Product from "../pages/Products";
// import ShowProduct from "../pages/Products/ShowProduct";
// import PrivateRoute from "../pages/PrivateRoute";
// import ShippingScreen from "../pages/Shipping";
// import PaymentScreen from "../pages/Payment";
// import PlaceOrderScreen from "../pages/Placeorder";
import Dashboard from "~/Pages/Dashboard";
import Categories from "~/Pages/Categories/Index";
import CreateCategory from "~/Pages/Categories/Create";
import EditCategory from "~/Pages/Categories/Edit";
import Brands from "~/Pages/Brands";
import CreateBrand from "~/Pages/Brands/Create";
import EditBrand from "~/Pages/Brands/Edit";
import Products from "~/Pages/Products";
import CreateProduct from "~/Pages/Products/Create";
import EditProduct from "~/Pages/Products/Edit";
import Users from "~/Pages/Users";
import CreateUser from "~/Pages/Users/Create";
import EditUser from "~/Pages/Users/Edit";
import Customers from "~/Pages/Customers";
import CreateCustomer from "~/Pages/Customers/Create";
import EditCustomer from "~/Pages/Customers/Edit";

export const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/cart",
  //     element: <CartScreen />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/products",
  //     element: <Product />,
  //   },
  //   {
  //     path: "/product/:product",
  //     element: <ShowProduct />,
  //   },
  //   {
  //     path: "/shipping",
  //     element: (
  //       <PrivateRoute>
  //         <ShippingScreen />
  //       </PrivateRoute>
  //     ),
  //   },
  //   {
  //     path: "/payment",
  //     element: (
  //       <PrivateRoute>
  //         <PaymentScreen />
  //       </PrivateRoute>
  //     ),
  //   },
  //   {
  //     path: "/placeorder",
  //     element: (
  //       <PrivateRoute>
  //         <PlaceOrderScreen />
  //       </PrivateRoute>
  //     ),
  //   },
  //Admin Routes
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/categories/create",
    element: <CreateCategory />,
  },
  {
    path: "/categories/edit/:id",
    element: <EditCategory />,
  },

  {
    path: "/brands",
    element: <Brands />,
  },
  {
    path: "/brands/create",
    element: <CreateBrand />,
  },
  {
    path: "/brands/edit/:id",
    element: <EditBrand />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/create",
    element: <CreateProduct />,
  },
  {
    path: "/products/edit/:id",
    element: <EditProduct />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/create",
    element: <CreateUser />,
  },
  {
    path: "/users/edit/:id",
    element: <EditUser />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/users/create",
    element: <CreateCustomer />,
  },
  {
    path: "/users/edit/:id",
    element: <EditCustomer />,
  },
]);
