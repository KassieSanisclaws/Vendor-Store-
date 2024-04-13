import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'; //want to get userInfo from thevstate. 

const PrivateRoute = () => {
    const { userInfo } = useSelector((state: any) => state.auth);
    return userInfo ? <Outlet /> : <Navigate to="/login" replace/>;
}   

export default PrivateRoute;