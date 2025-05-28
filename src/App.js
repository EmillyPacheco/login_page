import './App.css';
import Input from './components/ui/input/Input';
import ButtonText from './components/ui/input/ButtonText';
import BtnEnter from './components/ui/btn_text/BtnEnter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Input/>
      <Input/>
      <ButtonText id={'senha'}/>
       <BtnEnter text={'ENTRAR'} />
       <h2>OU</h2>
      </header>
     
    </div>
  );
}

export default App;
