import ButtonE from "@/components/elements/ButtonE";
import ProductList from "@/components/fragments/ProductList";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <div className="py-5">
      <h1 className="text-2xl font-semibold">Product Page</h1>
      <h2 className="text-xl text-center mt-6">List of product</h2>
      <div className="flex justify-end pr-8">
        <NavLink to={"/product/add"}>
          <ButtonE text="Create Product" />
        </NavLink>
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
