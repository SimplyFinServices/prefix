import React from 'react';
import Config from '../../config';

import './style.scss';

export default class Bio extends React.Component {
  static propTypes = {
    author: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const Author = this.props.author?Config.authors[this.props.author]:'Team';

    return (
      <div className="bio">
        <h2 rel="author"><img alt={Author.name} src={require(`./${Author.photo}`)}/> by {Author.name}</h2>
      </div>
    );
  }
}
