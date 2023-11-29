import './App.css';
import  Products  from './Components/Products/Products';
import { Route ,Routes} from 'react-router-dom';
import DataGridDemo from './Components/Products/DataGridDemo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Products/>} />
        <Route path='/DataGridDemo' element = {<DataGridDemo/>} />
      </Routes>
    </div>
  );
}

export default App;
