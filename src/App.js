import logo from './logo.svg';
import Card from '../src/components/card/card'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Employee Directory
        </p>
        <p className="App-link">
          Employee management at the tip of your finger
        </p>
      </header>
      <section className="CardSection">
        <Card />
      </section>
    </div>
  );
}

export default App;
