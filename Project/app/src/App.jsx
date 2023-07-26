import "./App.css";
import { Header } from "./components/Header";
import { Sales } from "./components/SalesSection";
import { Outlet } from "react-router-dom";
import { SmallCataloge } from "./components/SmallCatalog";
import { Contact } from "./components/Contact";
import { MainPage } from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Contact />
    </div>
  );
}

export default App;
