



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
import AddProduct from './components/AddProduct';
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
import ViewUsers from './components/ViewUsers';
import SellersData from './components/SellersData';
import ConsumerData from './components/ConsumerData';
import NotFound from './components/NotFound';
import ShowProductDetails from './components/ShowProductDetails';
import PaymentProcess from './components/PaymentProcess';
import PaymentOptions from './components/PaymentOptions';
import PhonePePayment from './components/PhonePePayment';
import ShowUsersData from './components/ShowUsersData';
import ShowUsersDataBySelectBox from './components/ShowUsersDataBySelectBox';
import GooglepayPayment from './components/GooglepayPayment';
import PaymentSuccess from './components/PaymentSuccess';
import SuccessSpinner from './components/SuccessSpinner';

function App() {
  const mystate = useSelector(state => state.logged);

  return (
    <div className="App">
      
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        <NavBar />
        {/* <AnimatedHeading />

        <HomeSlideShow /> */}
      </div>
      <Routes>
        <Route path='/login' element={<LoginComp />} />
        <Route path='/sellerreg' element={<SellerReg />} />
        <Route path='/consumerreg' element={<ConsumerReg />} />
        <Route path="/phonepepayment" element={<PhonePePayment />} />
        <Route path="/googlepepayment" element={<GooglepayPayment />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/success" element={<SuccessSpinner />} />
        
        <Route path="/user_data" element={<ShowUsersData />} />
        
        <Route path="/logout" element={<LoginComp />} />
        

        <Route path="/admin_home" element={<AdminHome />}>
          <Route path="addBrand" element={<AddBrand />} />
          <Route path="addModel" element={<AddModel />} />
          <Route path="approveSeller" element={<ApproveSeller2 />} />
          <Route path="viewFeedback" element={<FeedbackData />} />
          <Route path="ViewUsers" element={<ViewUsers />} />
          <Route path="Viewsellers" element={<SellersData />} />
          <Route path="ViewConsumer" element={<ConsumerData />} />
          <Route path="showusersdatabyselectBox" element={<ShowUsersDataBySelectBox />} />
          
        </Route>

        <Route path="/consumer_home" element={<ConsumerHome />}>
          <Route path="searchproducts" element={<ViewProducts />} />
          <Route path="showproducts" element={<ShowProducts />} />
          <Route path="showproductdetails" element={<ShowProductDetails />} />
          <Route path="showProducts" element={<ShowProducts />} />
          <Route path="addcart" element={<AddToCart />} />
          <Route path="confirmOrder" element={<ConfirmOrder />} />
          <Route path="trackorder" element={<TrackOrder />} />
          <Route path="updateprofile" element={<UpdateProfile />} />
          <Route path="feedbackform" element={<FeedbackForm />} />
          <Route path="paymentprocess" element={<PaymentProcess />} />
          <Route path="paymentoptions" element={<PaymentOptions />} />
          

        </Route>

        <Route path="/seller_home" element={<SellerHome />}>
        <Route path="updateprofile" element={<UpdateProfile />} />
          <Route path="AddProductPage" element={<AddProduct />} />
          <Route path="viewFeedback" element={<FeedbackData />} />
          <Route path="updatediscountedprice" element={<NotFound />} />
          <Route path='vieworders' element={<ViewOrders/>}/>
          


        </Route>
        {/* <Route path='/' element={<App />} /> dont use this because its create recuression. */}

      </Routes>
    </div>
  );

  }
export default App;
