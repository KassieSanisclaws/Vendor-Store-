import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Main-Layout/footer';
import { Header } from './Main-Layout/header';
import { MainIndex } from './Main-Layout/mainIndex';
import { Login } from './Pages/login';
import { Register } from './Pages/register';
import { VendorRegistration } from './Pages/vendorRegistration';
import { ContactUs } from './Pages/contactUs';
import PrivateRoute from './Components/PrivateRoutes/privateRoute';
import { UserDashboard } from './Screens/Users/userAccountPage';
import UserProfile from './Screens/Users/userProfile';
import UserRoute from './Components/PrivateRoutes/userRoute';
import VendorRoute from './Components/PrivateRoutes/vendorRoute';
import AdminRoute from './Components/PrivateRoutes/adminRoute';
import { About } from './Pages/about';
import VendorAccountPage from './Screens/Vendors/vendorAccountPage';
import { AdminAccountPage } from './Screens/Admins/adminAccountPage';
import BillableItemsAccordion from './Components/Accordion/billableItemsAccordion';
import { TestAccordion } from './Components/Accordion/testAccordion';
import { TestAccordionTwo } from './Components/Accordion/testAccordionTwo';
import { BillableItemsTable } from './Components/Accordion/billableItemsTable';
import SampleAccordion from './Components/Accordion/sampleAccordion';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header><Header /></header>

        <main>
          <Routes>
            <Route path="/" index element={<MainIndex />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vendor" element={<VendorRegistration />} />
            <Route path="/contactUs" element={<ContactUs />} />
            {/* //PrivateRoutes */}
            <Route path="" element={<PrivateRoute />} >  
            {/* <Route path="/vendorDashboard" element={<VendorDashboard />} /> */}
            </Route>
            <Route path="" element={<UserRoute />}>
               
            </Route>

            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/vendorDashboard" element={<VendorAccountPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/adminDashboard" element={<AdminAccountPage />} />
            <Route path="/billableAccordion" element={<BillableItemsAccordion />} />
            <Route path="/testAccordion" element={<TestAccordion />} />
            <Route path="/textAccordionTwo" element={<TestAccordionTwo />} />
            <Route path="/billableItemsTable" element={<BillableItemsTable />} />
            <Route path="/sampleAccordion" element={<SampleAccordion />} />

            <Route path="" element={<VendorRoute />} >
                
            </Route> 
            <Route path="" element={<AdminRoute />} >

            </Route>
           
            
          </Routes>
        </main>

        <footer><Footer /></footer>
      </div>
    </BrowserRouter>
  )
}

export default App
