// react
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// redux-components
import { SelectIsLoggedIn } from 'redux/auth/authSelectors';

export const NotFoundPage = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <Navigate to="/" />}</>;
};
