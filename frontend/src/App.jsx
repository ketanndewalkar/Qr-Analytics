import React from 'react'
import AppLayout from './components/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loginpage from './page/Loginpage';
import SideBar from './components/SideBar';
import DashBoard from './components/DashBoard';
import ProtectedRoute from './components/ProtectedRoute';
import Qrcode from './components/Qrcode';
import Setting from './components/Setting';

const router = createBrowserRouter([{
  path:"/login",
  element:<Loginpage/>
},{
  path:"/",
  element:<ProtectedRoute><AppLayout/></ProtectedRoute>,
  children:[{
    path:"/dashboard",
    element:<>
    <DashBoard/>
    </>
  },{
    path:"/qrcode",
    element:<><Qrcode/></>
  },{
    path:"/setting",
    element:<><Setting/></>
  }]
}]);
const App = () => {
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App