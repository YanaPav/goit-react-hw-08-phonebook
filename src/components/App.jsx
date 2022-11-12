// react
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// redux-components
import { current } from 'redux/auth/authOperations';
import { selectIsLoading, selectToken } from 'redux/auth/authSelectors';
// pages
import { HomePage } from 'pages/HomePage/HomePage';
// components
import { NavBar } from './NavBar/NavBar';
import { Loader } from './Common/Loader.styled';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const SignupForm = lazy(() => import('./SignupForm/SignupForm'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

//
export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const persistedToken = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (persistedToken) dispatch(current());
  }, [dispatch, persistedToken]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route element={<PublicRoute />}>
              <Route index element={<HomePage />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
