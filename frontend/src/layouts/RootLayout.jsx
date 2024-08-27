import { Outlet } from "react-router-dom";
import Nav from "../myComponents/Nav";


const RootLayout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default RootLayout;
