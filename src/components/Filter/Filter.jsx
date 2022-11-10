import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handlerFilterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contact by name
      <FilterInput
        type="text"
        name="filter"
        value={filterValue}
        onChange={handlerFilterChange}
      />
    </label>
  );
};
