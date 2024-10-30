import React, { Fragment } from 'react';
import './App.css';
import Home from './Pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import Contact from './Pages/Contact';
import Service from './Pages/services';
import Products from './Pages/Product';
import WhereToBuy from './Pages/buy';


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/products' element={<Products />} />
    <Route path='/WhereToBuy' element={<WhereToBuy />} />
  </Route>
))

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes}/>
    </Fragment>
  );
}

export default App;
