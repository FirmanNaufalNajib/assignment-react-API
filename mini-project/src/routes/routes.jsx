import Login from "../pages/Login"
import Home from "../pages/Home"
import Users from "../pages/Users"
import UsersDetail from "../pages/UsersDetail"
import Register from "../pages/Register"
import ProtectedRoutes from "./ProtectedRoutes"

export const RouteList = [
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/users",
    element: (
    <ProtectedRoutes>
      <Users />
    </ProtectedRoutes>
    )
  },
  {
    path: "/users/:id",
    element: (
    <ProtectedRoutes>
    <UsersDetail />{""}
    </ProtectedRoutes>
    )
  },
  {
    path: "/register",
    element: <Register />
  },

]