import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../util/consts";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth && authRoutes.map(({path, element}) => 
      <Route key={path} path={path} element={element} exact/>
      )}
       {publicRoutes.map(({path, element}) => 
      <Route key={path} path={path} element={element} exact/>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
  }
export default AppRouter;
