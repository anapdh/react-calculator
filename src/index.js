import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import PropTypes from 'prop-types';

// function HelloWorldComponent({ name }) {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// }

// HelloWorldComponent.defaultProps = {
//   name: 'Ana',
// };

// HelloWorldComponent.propTypes = {
//   name: PropTypes.string,
// };

// export default HelloWorldComponent;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
