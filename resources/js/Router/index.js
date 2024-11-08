import { createBrowserRouter } from "react-router-dom";
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

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Dashboard />,
    },
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
      path: "/products",
      element: <Products />,
    },

    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/customers",
      element: <Customers />,
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  },
);
