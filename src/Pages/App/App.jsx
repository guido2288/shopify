import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Navbar from '../../Components/Navbar';

import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../Myorders';
import NotFound from '../NotFound';
import SigIn from '../Signin';
import CheckOutSideMenu from '../../Components/CheckOutSideMenu';
import '../../App.css';

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SigIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes
}

function App() {

  console.log(CheckOutSideMenu)

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
