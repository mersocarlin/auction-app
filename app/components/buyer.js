import React, { Component, PropTypes } from 'react';


export default class Auction extends Component {
  static propTypes = {
    buyer: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render () {
    const { buyer, onClick } = this.props;

    return (
      <div className="buyer-component" onClick={() => onClick(buyer.id)}>
        <p>
          Name: {buyer.name}
        </p>
      </div>
    );
  }
}
