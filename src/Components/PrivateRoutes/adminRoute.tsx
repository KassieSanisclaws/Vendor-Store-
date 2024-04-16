// AdminRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
    const { userInfo } = useSelector((state: any) => state.auth);
    const isAdmin = userInfo && userInfo.role === 'admin';
    return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
}

export default AdminRoute;
