import UserList from "@/components/fragments/UserList";
import ButtonE from "@/components/elements/ButtonE";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/home");
    }
  }, [isError, user, navigate]);

  console.log(user && user.role);

  return (
    <div className="py-5">
      <h1 className="text-2xl font-semibold">User Page</h1>
      <h2 className="text-xl text-center mt-6">List of user</h2>
      <div className="flex justify-end pr-8">
        <NavLink to={"/user/add"}>
          <ButtonE text="Create User" />
        </NavLink>
      </div>

      <UserList />
    </div>
  );
};

export default UserPage;
