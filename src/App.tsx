import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Main from "./pages/main/Main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },

    {
      path: "/login",
      element: <Login />
    },



    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/dashboard",
      element: <Main />
    }

  ]);

  return (
    <RouterProvider router={router} />


  );
}

export default App;
