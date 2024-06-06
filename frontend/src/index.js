import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import SignUpScreen from './Screens/SignupScreen';
import SigninScreen from './Screens/SigninScreen';
import UserScreen from './Screens/UserScreen';
import CartScreen from './Screens/CartScreen';
import CheckoutScreen from './Screens/CheckoutScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProductsScreen from './Screens/ProductsScreen';
import PasswordReset from './Screens/PasswordReset';
import AboutUs from './Screens/AboutUsScreen';
import ContactUs from './Screens/ContactUs';
import ForumScreen from './Screens/ForumScreen';
import AdminScreen from './Screens/AdminScreen';
import reportWebVitals from './reportWebVitals';
import ForumHistory from './Screens/ForumHistory';
import PostScreen from './Screens/PostScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element = {<App />}>
    <Route index={true} path="/" element={<HomeScreen/>} />
    <Route path="/product/:id" element={<ProductScreen/>} />
    <Route path="/signup" element={<SignUpScreen/>} />
    <Route path="/signin" element={<SigninScreen/>} />
    <Route path="/userInfo" element={<UserScreen/>} />
    <Route path="/cart" element={<CartScreen/>} />
    <Route path="/checkout" element={<CheckoutScreen/>} />
    <Route path="/orderHistory" element={<OrderHistoryScreen/>} />
    <Route path="/productsScreen" element={<ProductsScreen/>} />
    <Route path="/password-reset" element={<PasswordReset />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/about-us" element={<AboutUs/>} />
    <Route path="/forum" element={<ForumScreen/>} />
    <Route path="/admin" element={<AdminScreen/>} />
    <Route path="/Post/:id" element={<PostScreen/>} />
    <Route path="/ForumHistory" element={<ForumHistory/>} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <RouterProvider  router = {router} />
  </React.StrictMode>
);


reportWebVitals();
