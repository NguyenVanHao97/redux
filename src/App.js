import logo from './logo.svg';
import './App.css';
import Home from './GioHangRedux';
import Header from './GioHangRedux/Header';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
