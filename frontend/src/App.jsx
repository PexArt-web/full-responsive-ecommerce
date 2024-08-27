import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { productsLoader } from "./services/productService";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index loader = {productsLoader} element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Route>

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
