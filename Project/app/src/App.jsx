import './App.css';
import { Header } from './components/Header';
import { Sales } from './components/Sales';
import { Outlet } from 'react-router-dom'
import { SmallCataloge } from './components/SmallCatalog';
import { CuponForm } from './components/CuponForm';
function App() {
  return (
    <div className="App">
          <Outlet/>
          <Header/>
<Sales/>
<SmallCataloge/>
<CuponForm/>
    </div>
  );
}

export default App;
