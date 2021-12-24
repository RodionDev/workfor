import * as React from 'react';
import { Grid } from '@material-ui/core';
interface Props {
  className: string;
}
const Main: React.SFC<Props> = ({ className }) => (
  <div className={className}>
    <Grid container={true} justify='center' style={{marginTop: '8px'}}>
      <Grid container={true} xs={9} >
        <Grid item={true} xs={3} md={2}>
          Left Panel
        </Grid>
        <Grid item={true} xs={9} md={8}>
          Middle Panel
        </Grid>
        <Grid item={true} xs={12} md={2}>
          Right Panel
        </Grid>
      </Grid>
    </Grid>
  </div>
);
export default Main;
