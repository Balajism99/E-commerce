import './App.css';
import React, { useEffect } from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import Productscreen from './screens/Productscreen';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/signinScreen';
import { signout } from './actions/useraction';
import RegisterScreen from './screens/registerscreen';
import shippingScreen from './screens/shippingscreen';
import ShippingAddress from './screens/shippingscreen';
import PaymentMethod from './screens/paymentscreen';
import PlaceOrder from './screens/placeorderscreen';
import OrderScreen from './screens/orderscreen';
import GateWayScreen from './screens/gatewayscreen';
import OrderPlaced from './screens/ordersuccess';
import OrderHistory from './screens/orderhistory';
import ProductListScreen from './screens/productlistscreen';
import ProductEditScreen from './screens/producteditscreen';
import OrderListScreen from './screens/orderlistscreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import SearchBox from './components/searchbox';
import ProfileScreen from './screens/profilescreen';
import SearchScreen from './screens/searchscreen';
import UserListScreen from './screens/userlist';
import WishList from './screens/wishlist';
import SellerRoute from './components/sellerRoute';
import UserEditScreen from './screens/usereditscreen';
import CarouselScreen from './screens/carouselscreen';
import AboutUsScreen from './screens/aboutus';
import { listProductCategories } from './actions/productaction';
import ListOfProducts from './screens/listofproducts';
import ContactUsScreen from './screens/contactus';



function App(){
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
const dispatch = useDispatch();
const signoutHandler = () =>{
  dispatch(signout());
}
 const userSignin = useSelector((state) => state.userSignin);
 const {userInfo} =userSignin;  

 
 const productCategoryList = useSelector((state) => state.productCategoryList);
 const {
   loading: loadingCategories,
   error: errorCategories,
   categories,
 } = productCategoryList;
 useEffect(() => {
   dispatch(listProductCategories());
 }, [dispatch]);

    return(

      <BrowserRouter>
      <div className="row-container">
        <div className="title">
          <Link to="/">
        <img src="/images/ilogo.png" className="logo"></img>

          </Link>
          
      </div>
     
      <div>
     
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
      <div className="row-end">
        
        <Link to="/cart" className="nav-cart"><i className="fa fa-2x fa-shopping-cart"></i>{cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
              </Link>
              <Link to="/wishlist" className="wish"><i  className="fa fa-2x fa-heart"></i></Link>
            <span></span>
              {
                userInfo ? (
                  <div className="dropdown">
                  <Link className="signin" to="#" >{userInfo.name}<i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                 
                  <li>
                    <Link to="/orderhistory"className="signin">Order History</Link>
                  </li>
                  <li>
                    <Link to="/profile"className="signin">User Profile</Link>
                  </li>
                    <li>
                  <Link to="#signout" className="signin" onClick={signoutHandler}>Sign Out</Link>
                  </li>
                 
                  </ul>
                  </div>     
                ) :
                (
                  <Link className="signin1" to="/signin">Sign In</Link>
                )
              }
             
             {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin"  className="signin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller" className="signin">Products</Link>
                  </li>
                  
                </ul>
              </div>
            )}

              {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin"className="signin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  
                  <li>
                    <Link to="/productlist"className="signin">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist"className="signin">Orders</Link>
                  </li>
                 
                  <li>
                    <Link to="/userlist"className="signin">Users</Link>
                  </li>
                 
                  
                </ul>
              </div>
            )}
        
      </div>
     
            </div>
            

    <Route path="/cart/:id?" component={Cartscreen} exact></Route>
    <Route path="/product/:id" component={Productscreen} exact></Route>
    <Route path="/wishlist/:id?" component={WishList} exact></Route>
    <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
    <Route path="/signin" component={SigninScreen} exact></Route>
    <Route path="/register" component={RegisterScreen} exact></Route>
    <Route path="/carousel" component={CarouselScreen} exact></Route>
    <Route path="/shipping" component={ShippingAddress} exact></Route>
    <Route path="/payment" component={PaymentMethod} exact></Route>
    <Route path="/placeorder" component={PlaceOrder} exact></Route>
    <Route path="/order/:id" component={OrderScreen} exact></Route>
    <Route path="/gateway" component={GateWayScreen} exact></Route>
    <Route path="/ordersuccess" component={OrderPlaced} exact></Route>
    <Route path="/orderhistory" component={OrderHistory} exact></Route>
    <PrivateRoute path="/profile" component={ProfileScreen} ></PrivateRoute>
    <Route path="/productlist" component={ProductListScreen} exact></Route>
    <Route path="/search/name/:name?"  component={SearchScreen} exact></Route>
    <Route path="/orderlist" component={OrderListScreen} exact></Route>
    <Route path="/list" component={ListOfProducts} exact></Route>
    <Route path="/userlist" component={UserListScreen} exact></Route>
    <AdminRoute path="/user/:id/edit"component={UserEditScreen} ></AdminRoute>
    <SellerRoute path="/productlist/seller" component={ProductListScreen} ></SellerRoute>
    <SellerRoute path="/orderlist/seller" component={OrderListScreen} ></SellerRoute>
    <Route path="/search/category/:category"  component={SearchScreen} exact></Route>
    <Route path="/search/category/:category/name/:name" component={SearchScreen} exact></Route>
    <Route path="/aboutus" component={AboutUsScreen} exact></Route>
    <Route path="/contactus" component={ContactUsScreen} exact></Route>
    <Route path="/" component={Homescreen} exact></Route>

    <footer class="page-footer font-small blue">  
    <div className="foot">
          <div className="foot-txt">
            <Link to="/aboutus" className="dis">About Us</Link>&nbsp;
            <Link to="/contactus" className="dis">ContactUs</Link>
              <h7 className="foot-end">All Rights Reserved!</h7>
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-instagram"></i>
              </div>
             <div className="foot-icons">
             
             </div>
        </div>
              </footer>
   
      </BrowserRouter>

    )
  
}


export default App;
