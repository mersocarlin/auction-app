import React, { PropTypes } from 'react';


const Label = ({ type = 'default', children }) => {
  return (
    <span className={`label label-${type}`}>
      {children}
    </span>
  );
};

Label.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
};

export default Label;
