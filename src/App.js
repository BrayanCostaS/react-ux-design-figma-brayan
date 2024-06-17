import logo from './logo.svg';
import './App.css';
import Botao1 from './componentesbrayan/Botao';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Botao1 nome="brayan"/> 
        <Botao1 teste=" testando"/> 
        <Botao1 qualquercoisa=" aqui esta qualquer coisa"/> 


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        <Botao1> 
        Esse aqui tem o children
        </Botao1>

      </header>

    </div>
  );
}

export default App;
