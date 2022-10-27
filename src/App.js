
import './App.css';
import Navbar from './components/Header/Navbar';

import Banner from './components/Header/Background';
import Sologan from './components/Body/Sologan/Sologan';
import Maincontent from './components/Body/Maincontent';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Maincontent/>    
    </div>
  );
}

export default App;
