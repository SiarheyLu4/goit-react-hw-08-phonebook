import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Loader } from "./Loader/Loader";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const ContactsPage = lazy(() => import("Pages/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("Pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("Pages/LoginPage/LoginPage"));
const MainPage = lazy(() => import ("Pages/MainPage/MainPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />} >
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route element={<PublicRoute />}>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/contacts' element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
};

export default UserRoutes;