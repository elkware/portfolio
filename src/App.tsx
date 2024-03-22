import React from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Blog from './components/Blog';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path: "/blog",
      element: <Blog/>
    }, {
      path: "/*",
      element: <div className='container'><h1>404 Ooopsie</h1></div>
    }
  ]
);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router}/>
    </>
  );
}


export default App;
