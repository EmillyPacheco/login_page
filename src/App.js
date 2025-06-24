import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login_page/LoginPage';
import Home from './pages/home_page/Home';
import Header from './components/models/header/Header';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
       <div className='App'>
     <Header/>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        } />
      </Routes>
    </div>
       </AuthProvider>
   
  );
}

export default App;

// import LoginPage from "./pages/login_page/LoginPage";
// import { Link, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Input from './components/ui/input/Input';
// import ButtonText from './components/ui/btn_text/ButtonText';
// import BtnEnter from './components/ui/btn_text/BtnEnter';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <Input/>
//       <Input/>
//       <ButtonText id={'senha'}/>
//        <BtnEnter text={'ENTRAR'} />
//        {/* <h2>OU</h2> */}
//       </header>
     
//     </div>
//   );
// }

// export default App;
