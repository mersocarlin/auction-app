import React, { Component, PropTypes } from 'react';


export default class Auction extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render () {
    const { item } = this.props;

    return (
      <div className="item-component">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {item.name}
            </h3>
          </div>
          <div className="panel-body">
            <p>
              Description: {item.description}
            </p>
            <img className="img-responsive" src={item.picture} />
          </div>
          <div className="panel-footer">
            Price: {item.startingPrice}
          </div>
        </div>
      </div>
    );
  }
}
