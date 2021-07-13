import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Big from 'big.js';
import PropTypes from 'prop-types';

function HelloWorldComponent({ name }) {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
}

HelloWorldComponent.defaultProps = {
  name: 'Ana',
};

HelloWorldComponent.propTypes = {
  name: PropTypes.string,
};

export default HelloWorldComponent;

ReactDOM.render(
  <HelloWorldComponent name="Ana" />,
  document.getElementById('root'),
);
