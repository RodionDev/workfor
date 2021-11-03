import * as React from 'react';
interface Props {
  className: string;
}
const Footer: React.SFC<Props> = ({className}) =>
  <div className={className}>
    Footer
  </div>
export default Footer;
