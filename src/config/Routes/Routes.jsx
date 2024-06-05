import RootLayout from "@/components/layouts/RootLayout";

import LoginPage from "@/pages/LoginPage";
import NoteFound from "@/pages/NotFound";
import ProductAdd from "@/pages/ProductAdd";
import ProductEdit from "@/pages/ProductEdit";
import ProductPage from "@/pages/ProductPage";
import UserAdd from "@/pages/UserAdd";
import UserEdit from "@/pages/UserEdit";
import UserPage from "@/pages/UserPage";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "@/pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/product" element={<RootLayout />}>
        <Route index element={<ProductPage />} />

        <Route path="/product/add" element={<ProductAdd />} />
        <Route path="/product/edit/:id" element={<ProductEdit />} />
      </Route>

      <Route path="/user" element={<RootLayout />}>
        <Route index element={<UserPage />} />
        <Route path="/user/add" element={<UserAdd />} />
        <Route path="/user/edit/:id" element={<UserEdit />} />
      </Route>

      <Route path="/home" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/" element={<LoginPage />} />

      <Route path="*" element={<NoteFound />} />
    </>
  )
);

export default router;
