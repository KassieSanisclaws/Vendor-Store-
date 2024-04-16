// VendorRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VendorRoute = () => {
    const { userInfo } = useSelector((state: any) => state.auth);
    const isVendor = userInfo && userInfo.role === 'vendor';
    return isVendor ? <Outlet /> : <Navigate to="/login" replace />;
}

export default VendorRoute;