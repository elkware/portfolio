import React from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Blog from './components/Blog';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Article } from './components/Article';

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
      element: <Blog/>,
    },
    {
      path: "/blog/:slug",
      element: <Article/>,
      loader: async ({ params }) => {
        const article = await import(`./blog-content/articles/${params.slug}.json`);
        return article;
      },
      errorElement: <div className='container'><h1>404 Ooopsie - Artcile not found!</h1></div>
    },
    {
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
