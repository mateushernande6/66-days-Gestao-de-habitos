import "./App.css";
import Routes from "./components/routes";
import Menu from "./components/Menu";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.logged);

  return (
    <div className="App">
      {/* {isLogged && <Menu />} */}
      <Routes />
    </div>
  );
}

export default App;
