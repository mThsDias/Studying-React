import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase'



function App() {

  const name = 'Matheus'
  const newName = name.toUpperCase()
  const age = 23
  const button = 'click'
  const buttonCase = button.toUpperCase()
  const url = 'https://via.placeholder.com/150'

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
      <img src= {url} alt='img'/>
      <HelloWorld/>
      <Frase/>
    </div>
  );
}

export default App;
