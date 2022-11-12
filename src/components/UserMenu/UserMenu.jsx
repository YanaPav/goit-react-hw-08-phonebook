// react
import { useDispatch, useSelector } from 'react-redux';
// libraries
import LogoutIcon from '@mui/icons-material/Logout';
// redux-components
import { selectUserName } from '../../redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
// components
import { MenuBox } from '../Common/MenuBox.styled';
import { CustomBtn } from '../Common/CustomBtn.styled';

//
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <MenuBox>
      <p>{userName}</p>
      <CustomBtn
        size="small"
        variant="text"
        type="button"
        onClick={() => dispatch(logout())}
      >
        <span>Log out</span>
        <LogoutIcon />
      </CustomBtn>
    </MenuBox>
  );
};
