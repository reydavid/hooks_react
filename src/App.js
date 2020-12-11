import './App.css';
import Inventory from './Components/Inventory';
import Backstock from './Components/Backstock';
import Overstock from './Components/Overstock';
import Backordered from './Components/Backordered';

function App() {
  return (
    <div className="App">
      <h2>hooks_react</h2>
      <Inventory />
      <Backstock />
      <Overstock />
      <Backordered />
    </div>
  );
}

export default App;
