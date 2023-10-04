import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/navigation'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DocumentExport from './components/DocumentExport/documentExport';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DocumentExport></DocumentExport>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  }
]);


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
