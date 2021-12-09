import * as React from 'react';
import CoverImagePresenter from './presenter/cover-image.presenter';
interface Props {
  imageUrl?: string
}
interface State {
  keep: number
}
export default class extends React.Component<Props, State> {
  render(): JSX.Element {
    const { imageUrl } = this.props;
    return(
      <CoverImagePresenter imageUrl={imageUrl}/>
    )
  }
}
