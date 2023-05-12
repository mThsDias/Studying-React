import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase'
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return(
    <Form />
  )
}


/*
function App() {

  return (
    <div className="App"> 
      <Frase/>
      <List marca='BMW' ano={2022}/>
      <List marca='AUDI' ano={2019}/>
      <List marca='MERCEDEZ' ano={2023}/>
      <Evento />
      <Form />
    </div>
  )

  const name = 'Matheus'
  const newName = name.toUpperCase()
  const age = 23
  const button = 'click'
  const buttonCase = button.toUpperCase()

  function sum (a, b) {
    return a + b
  }

  return (
    <div className="App">
     <h1>Olá, React</h1>
      <p>Name: {newName}</p>
      <p>Age: {age}</p>
      <p>A soma é: {sum(5, 5)}</p>
      <button>{buttonCase}</button>
      <HelloWorld/>
      <Frase/>
      <Pessoa
      name = 'Matheus'
      age = '23'
      profession ='Futuro programador'
      />
    </div>
  );
}
*/

export default App;