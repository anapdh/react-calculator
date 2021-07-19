import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { btnName } = props;
  return (
    <div>
      <button type="button" name="button">{btnName}</button>
    </div>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
