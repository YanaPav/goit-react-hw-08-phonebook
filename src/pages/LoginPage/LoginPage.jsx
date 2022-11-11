// react
import { Link } from 'react-router-dom';
// components
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginPageText } from './LoginPage.styled';

//
export const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <LoginPageText>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </LoginPageText>
    </>
  );
};
