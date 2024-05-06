



import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import ConsumerHome from './components/ConsumerHome';
import AdminHome from './components/AdminHome';
import SellerHome from './components/SellerHome';
import { useSelector } from 'react-redux';
import SellerReg from './components/SellerReg';
import ConsumerReg from './components/ConsumerReg'
import UpdateProfile from './components/UpdateProfile';
import SearchProducts from './components/SearchProducts';
import AddToCart from './components/AddToCart';
import ConfirmOrder from './components/ConfirmOrder';
import ApproveSeller2 from './components/ApproveSeller2';
import UpdatePass from './components/UpdatePass';
import HomeSlideShow from './components/HomeSlideShow';
import NavBar from './components/NavBar';
import AnimatedHeading from './components/AnimatedHeading';
import AddProductPage from './components/AddProductPage';
import ViewProducts from './components/ViewProducts';
import ShowProducts from './components/ShowProducts';
import AddBrand from './components/AddBrand';
import AddModel from './components/AddModel';
// import SellerFb from'./components/SellerFb';
import UpdateDiscountedPrice from './components/UpdateDiscountedPrice';
import FeedbackData from './components/FeedbackData';
import TrackOrder from './components/TrackOrders'
import ViewOrders from './components/ViewOrders'
import FeedbackForm from './components/FeedbackForm';

function App() {
  const mystate = useSelector(state => state.logged);

  return (
    <div className="App">
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        <NavBar />
        {/* <AnimatedHeading /> */}

        {/* <HomeSlideShow /> */}
      </div>
      <Routes>
        <Route path='/login' element={<LoginComp />} />
        <Route path='/sellerreg' element={<SellerReg />} />
        <Route path='/consumerreg' element={<ConsumerReg />} />
        
        <Route path="/logout" element={<LoginComp />} />
        

        <Route path="/admin_home" element={<AdminHome />}>
          <Route path="addBrand" element={<AddBrand />} />
          <Route path="addModel" element={<AddModel />} />
          <Route path="approveSeller" element={<ApproveSeller2 />} />
          <Route path="viewFeedback" element={<FeedbackData />} />
          
        </Route>

        <Route path="/consumer_home" element={<ConsumerHome />}>
          <Route path="searchproducts" element={<ViewProducts />} />
          <Route path="showProducts" element={<ShowProducts />} />
          <Route path="addcart" element={<AddToCart />} />
          <Route path="confirmOrder" element={<ConfirmOrder />} />
          <Route path="trackorder" element={<TrackOrder />} />
          <Route path="updateprofile" element={<UpdateProfile />} />
          <Route path="feedbackform" element={<FeedbackForm />} />

        </Route>

        <Route path="/seller_home" element={<SellerHome />}>
        <Route path="updateprofile" element={<UpdateProfile />} />
          <Route path="AddProductPage" element={<AddProductPage />} />
          <Route path="viewFeedback" element={<FeedbackData />} />
          <Route path="updatediscountedprice" element={<UpdateDiscountedPrice />} />
          <Route path='vieworders' element={<ViewOrders/>}/>
          


        </Route>

      </Routes>
    </div>
  );

  }
export default App;
