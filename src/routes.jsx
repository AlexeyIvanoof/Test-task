/*import { Routes, Route } from 'react-router-dom'
import UserDetails from "./components/UserDetails/UserDetails"
import Main from "./components/main/Main"
import { NotFound } from './components/not-found/Not-found'

export const AppRoutes = () => {
    
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Main/>
          }
        />
  
          <Route
            path="/userdetails"
            element={
                <UserDetails/>
            }
          />
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }*/
  

import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import UserDetails from "./components/UserDetails/UserDetails"
import Main from "./components/main/Main"
import { NotFound } from './components/not-found/Not-found'

// Define your routes using the useRoutes hook
export  const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/userdetails", element: <UserDetails/> },
    { path: "*",element: <NotFound /> },
    
  ]);
  return routes;
};