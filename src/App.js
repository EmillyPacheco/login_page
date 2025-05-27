import './App.css';
import Input from './components/ui/input/Input';
import InputText from './components/ui/input/InputText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Input/>
      <Input/>
      <InputText id={'senha'} text={"Esqueceu a sua senha?"}/>
      
      </header>
    </div>
  );
}

export default App;
