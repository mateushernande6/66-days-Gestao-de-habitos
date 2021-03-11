import "./App.css";
import Routes from "./routes";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
