import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import HomeContainer from './container/HomeContainer';
import Coin from './components/Coin'




function App() {
  return (
    <div>
      <h1>React Redux</h1>
     
      <HomeContainer />
     
      <Coin />

      
   </div>
  );
}

export default App;
