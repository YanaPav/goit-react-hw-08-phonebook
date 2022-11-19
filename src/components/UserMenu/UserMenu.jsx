// react
import { useDispatch, useSelector } from 'react-redux';
// libraries
import LogoutIcon from '@mui/icons-material/Logout';
// redux-components
import { selectUserName } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
// shared-components
import { CustomBtn } from 'shared/components/Button/CustomBtn.styled';
// components
import { UserName } from './UserMenu.styled';

//
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <>
      <UserName>{userName}</UserName>
      <CustomBtn
        size="small"
        variant="text"
        type="button"
        onClick={() => dispatch(logout())}
      >
        <span>Log out</span>
        <LogoutIcon />
      </CustomBtn>
    </>
  );
};
