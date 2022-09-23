import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Loader } from "./Loader/Loader";

const ContactsPage = lazy(() => import("Pages/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("Pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("Pages/LoginPage/LoginPage"));
const MainPage = lazy(() => import ("Pages/MainPage/MainPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />} >
      <Routes>
        <Route path='/home' element={<MainPage/>} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Suspense>
  )
};

export default UserRoutes;