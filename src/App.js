import logo from './logo.svg';
import Card from '../src/components/card/card';
import Buttons from '../src/components/buttons/buttons';
import Modal from '../src/components/modal/modal';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Employee Directory
        </p>
        <p className="App-link">
          Employee management at your finger tips
        </p>
        <Buttons />
      </header>
      <Modal />
      <div className="test">
        <section className="CardSection">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </div>
  );
}

export default App;
