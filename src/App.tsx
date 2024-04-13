import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Main-Layout/footer';
import { Header } from './Main-Layout/header';
import { MainIndex } from './Main-Layout/mainIndex';
import { Login } from './Pages/login';
import { Register } from './Pages/register';
import { VendorRegistration } from './Pages/vendorRegistration';
import { ContactUs } from './Pages/contactUs';
import PrivateRoute from './Components/PrivateRoutes/privateRoute';


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
               {/* <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/vendorDashboard" element={<VendorDashboard />} /> */}
            </Route>
            
          </Routes>
        </main>

        <footer><Footer /></footer>
      </div>
    </BrowserRouter>
  )
}

export default App
