// UserRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserRoute = () => {
    const { userInfo } = useSelector((state: any) => state.auth);
    const isUser = userInfo && userInfo.role === 'user';
    return isUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default UserRoute;