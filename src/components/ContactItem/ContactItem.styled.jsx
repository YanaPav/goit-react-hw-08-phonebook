// import ClearIcon from '@mui/icons-material/Clear';
// import CreateIcon from '@mui/icons-material/Create';
import styled from 'styled-components';

export const StyledItem = styled.li`
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 600px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }
`;

export const StyledBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms linear;

  &:hover svg,
  &:focus {
    transform: scale(1.05);
  }
`;

// export const DeleteIcon = styled(ClearIcon)`
//   color: #b13232;
// `;

// export const EditIcon = styled(CreateIcon)`
//   color: gray;
// `;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;
