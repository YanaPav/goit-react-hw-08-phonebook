// react
import { useSelector, useDispatch } from 'react-redux';
// redux-components
import { addFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
// shared-components
import { StyledForm } from 'shared/components/StyledForm/StyledForm.styled';
import { StyledTextField } from 'shared/components/StyledTextField/StyledTextField.styled';

//
export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handlerFilterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <StyledForm>
      <StyledTextField
        id="filterInput"
        label="Find contact by name"
        variant="filled"
        type="text"
        name="filter"
        size="small"
        value={filterValue}
        onChange={handlerFilterChange}
      />
    </StyledForm>
  );
};
