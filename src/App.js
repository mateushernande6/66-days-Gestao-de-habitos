import "./App.css";
import Group from "./components/groups";
import ModalGroup from "./components/group/modal";
import CreateGroup from "./components/group/modal/modalCreateGroup";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Group />
      </header>
    </div>
  );
}

export default App;
