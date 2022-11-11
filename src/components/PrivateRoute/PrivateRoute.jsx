// react
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// redux-components
import { SelectIsLoggedIn } from 'redux/auth/authSelectors';

export const PrivateRoute = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};
