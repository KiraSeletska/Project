import "./App.css";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { Contact } from "./components/Contact";
import { UpDownButton } from "./components/UpDownButton";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Outlet />
      <Contact />
      <UpDownButton />
    </div>
  );
}

export default App;
