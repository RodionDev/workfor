import * as React from 'react';
import { Grid } from '@material-ui/core';
import { InfoPanel } from '../components';
interface Props {
  className: string;
}
const Main: React.SFC<Props> = ({ className }) => (
  <div className={className}>
    <Grid container={true} justify='center' style={{marginTop: '8px'}}>
      <Grid item={true} xs={8} >
        <Grid container={true}>
          <Grid item={true} xs={3} md={3}>
            <InfoPanel/>
          </Grid>
          <Grid item={true} xs={9} md={6}>
            Middle Panel
          </Grid>
          <Grid item={true} xs={12} md={3}>
            Right Panel
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);
export default Main;
