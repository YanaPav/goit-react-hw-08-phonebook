import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { remove } from 'redux/contacts/contactsOperations';
import { CustomBtn } from '../Common/CustomBtn.styled';
import {
  selectLoading,
  selectContactsError,
} from '../../redux/contacts/contactsSelectors';
import { EditForm } from '../EditForm/EditForm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { StyledItem, ButtonWrap } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (error?.id === id) Notify.failure(error.message);
  }, [error, id]);

  return (
    <StyledItem>
      {!isEditing ? (
        <>
          <AccountCircleIcon />
          <div>
            {name}: {number}
            <ButtonWrap>
              <CustomBtn
                type="button"
                disabled={isLoading === id}
                onClick={() => setIsEditing(true)}
              >
                <span>Edit</span>
              </CustomBtn>
              <CustomBtn
                type="button"
                disabled={isLoading === id}
                onClick={() => dispatch(remove(id))}
              >
                {isLoading === id ? (
                  <span>'Deleting...'</span>
                ) : (
                  <span>Delete</span>
                )}
              </CustomBtn>
            </ButtonWrap>
          </div>
        </>
      ) : (
        <EditForm
          id={id}
          name={name}
          number={number}
          closeEditForm={() => setIsEditing(false)}
        />
      )}
    </StyledItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
