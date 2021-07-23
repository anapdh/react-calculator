import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(button) {
    const prev = this.state;
    this.setState(
      Calculate(prev, button),
    );
  }

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;
    return (
      <div className="calculator">
        <Display
          result={total}
          next={next}
          operation={operation}
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
