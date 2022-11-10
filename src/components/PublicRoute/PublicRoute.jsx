import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { SelectIsLoggedIn } from 'redux/auth/authSelectors';

export const PublicRoute = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />}</>;
};
