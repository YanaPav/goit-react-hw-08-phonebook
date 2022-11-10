import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../redux/auth/authSelectors';
import { MenuBox } from '../Common/MenuBox.styled';
import { logout } from 'redux/auth/authOperations';
import LogoutIcon from '@mui/icons-material/Logout';
import { CustomBtn } from '../Common/CustomBtn.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  return (
    <MenuBox>
      <p>{userEmail}</p>
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
