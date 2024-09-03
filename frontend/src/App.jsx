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
import CategoryPage from "./pages/Category";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import useAuthContext from "./hooks/useAuthContext";
function App() {
  // const { user } = useAuthContext()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route errorElement={<LoadErrorPage />}>
          <Route path="/" element={<RootLayout />}>
            <Route index loader={productsLoader} element={<Home />} />
            <Route path= 'shop' element = { <CategoryPage/>}/>
            <Route path="about" element = {<AboutUs/>} />
            <Route path="contact" element = {<ContactUs/>}/>
          </Route>
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Route>
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
