import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignupForm } from './SignupForm/SignupForm';
import { LoginForm } from './LoginForm/LoginForm';
import { NavBar } from './NavBar/NavBar';
import { current } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { Loader } from 'components/Common/Loader.styled';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { HomePage } from '../pages/HomePage/HomePage';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

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
              <Route path="/login" element={<LoginForm />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
