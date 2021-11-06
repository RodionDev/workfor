import * as React from 'react';
import {} from '@material-ui/core';
export interface NavigationBarProps {
  brandName: string,
  searchBarPlaceHolder: string,
  redirectLinks?: Array<{name: string, link: string}>;
}
const NavigationBarPresenter: React.SFC<NavigationBarProps> = ({brandName, searchBarPlaceHolder, redirectLinks}) =>
  <div>{brandName} - {searchBarPlaceHolder}</div>
export default NavigationBarPresenter;
