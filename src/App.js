import './App.css';
import  Products  from './Components/Products/Products';
import { Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Products/>} />
      </Routes>
    </div>
  );
}

export default App;
