
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { Contact } from "./components/Contact";
import { UpDownButton as UpButton } from "./components/UpButton";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Outlet />
      <Contact />
      <UpButton />
    </div>
  );
}

export default App;
