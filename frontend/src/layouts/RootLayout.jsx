import { Outlet } from "react-router-dom";
import Nav from "../myComponents/Nav";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Nav/>
      </header>

      <Outlet />
    </div>
  );
};

export default RootLayout;
