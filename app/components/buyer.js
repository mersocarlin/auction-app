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
        <div className="panel panel-default">
          <div className="panel-body">
            {buyer.name}
          </div>
        </div>
      </div>
    );
  }
}
