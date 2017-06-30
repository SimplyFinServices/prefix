import React from 'react';

import Home from '../components/Home';
import Examples from '../components/Examples';

export default class index extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<Home />
      	<Examples />
      </div>
    );
  }
}
