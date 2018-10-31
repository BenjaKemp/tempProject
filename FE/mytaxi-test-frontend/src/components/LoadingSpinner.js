import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={300}
          color={'White'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default LoadingComponent
