import React, { Component, PropTypes } from 'react';


export default class Auction extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render () {
    const { item } = this.props;

    return (
      <div className="item-component">
        <div> Item </div>
        <p>
          Name: {item.name}
        </p>
        <p>
          Description: {item.description}
        </p>
        <p>
          Price: {item.startingPrice}
        </p>
        {/* <img src={item.picture} /> */}
      </div>
    );
  }
}
