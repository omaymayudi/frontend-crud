import { useSelector } from "react-redux";

const WelcomeHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Home Page</h1>
      <h2 className="text-xl mt-6 ">
        welcome <p className="inline">{user && user.name}</p>
      </h2>
    </div>
  );
};

export default WelcomeHome;
