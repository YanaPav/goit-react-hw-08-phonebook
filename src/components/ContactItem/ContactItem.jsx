// react
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// redux-components
import {
  selectLoading,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';
import { remove } from 'redux/contacts/contactsOperations';
// components
import { CustomBtn } from '../Common/CustomBtn.styled';
import { EditForm } from '../EditForm/EditForm';
import { StyledItem, ButtonWrap } from './ContactItem.styled';

//
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
                id={`editFormBtn${id}`}
                type="button"
                disabled={isLoading === id}
                onClick={() => setIsEditing(true)}
              >
                <span id={`editFormBtnText${id}`}>Edit</span>
              </CustomBtn>
              <CustomBtn
                id="deleteBtn"
                type="button"
                disabled={isLoading === id}
                onClick={() => dispatch(remove(id))}
              >
                {isLoading === id ? (
                  <span>Deleting...</span>
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
