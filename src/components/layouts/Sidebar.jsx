import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { LogoutUser, reset } from "../../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogoutUser());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64  h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 pt-9">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to={"/home"}
                className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/product"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Product</span>
              </NavLink>
            </li>
            {user && user.role === "admin" && (
              <li>
                <NavLink
                  to={"/user"}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">User</span>
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                onClick={logout}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <a className="flex-1 ms-3 whitespace-nowrap">Logout</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
