import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import CreateAccount from "./pages/Authentication/CreateAccount";
import NotFound from "./pages/Errors/NotFound";
import Home from "./pages/Home";
import { productsLoader } from "./services/productService";
import Login from "./pages/Authentication/Login";
import LoadErrorPage from "./pages/Errors/ErrorPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />} errorElement = {<LoadErrorPage/>}>
          <Route index loader={productsLoader} element={<Home />} />
        </Route>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login/>} />


        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
