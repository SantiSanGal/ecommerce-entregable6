import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsThunk } from './store/slices/products.slice';
import { useEffect } from 'react';
import Header from './components/shared/Header';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getCartThunk } from './store/slices/cart.slice';
import './App.css'
import CartPage from './pages/CartPage';
import ProtectedRoutes from './pages/ProtectedRoutes';


function App() {

  const { cart } = useSelector(state => state)

  // console.log(cart);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />}/>
        <Route path='/user'>
          <Route path='register' element={<RegisterPage />}/>
          <Route path='login' element={<LoginPage />}/>
        </Route>

        {/* Protected Routes  */}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
