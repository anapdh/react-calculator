import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  return (
    <div className="App">
      <Display result={Calculate.total} />
      <ButtonPanel />
    </div>
  );
}

export default App;
