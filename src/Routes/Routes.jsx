import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Team from '../Pages/Team/Team';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/team',
          element: <Team></Team>
        }
      ]
    },
   ]);
   
export default router;