import * as React from 'react';
interface FooterProps {
  className: string;
}
const Footer: React.SFC<FooterProps> = ({className}) =>
  <div className={className}>
    Footer
  </div>
export default Footer;
