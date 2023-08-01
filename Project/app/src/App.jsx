import "./App.css";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { Contact } from "./components/Contact";
import {UpDownButton} from './components/UpDownButton'


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Contact />
      <UpDownButton/>
    </div>
  );
}

export default App;
