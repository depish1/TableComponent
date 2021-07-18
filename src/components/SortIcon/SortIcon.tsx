import React, { FunctionComponent } from 'react';
import { StyledSortIcon } from 'components/SortIcon/SortIcon.styles';

interface Props {
  isSortedDesc: boolean | undefined;
  isSorted: boolean;
}
const SortIcon: FunctionComponent<Props> = (props) => {
  return <StyledSortIcon {...props} />;
};

export default SortIcon;
