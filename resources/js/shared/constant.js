import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon,
  ClipboardIcon,
  CircleStackIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
export const navLists = [
  {
    path: "/dashboard",
    title: "Dashboard",
    Icon: HomeIcon,
  },
  {
    path: "/categories",
    title: "Categories",
    Icon: ClipboardIcon,
  },
  {
    path: "/brands",
    title: "Brands",
    Icon: CircleStackIcon,
  },

  {
    path: "/products",
    title: "Products",
    Icon: ShoppingCartIcon,
  },
  {
    path: "/orders",
    title: "Orders",
    Icon: ShoppingBagIcon,
  },
  {
    path: "/customers",
    title: "Customers",
    Icon: UsersIcon,
  },
  {
    path: "/users",
    title: "Users",
    Icon: UsersIcon,
  },

  {
    path: "/settings",
    title: "Settings",
    Icon: Cog8ToothIcon,
  },
];
