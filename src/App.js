import "./App.css";
import Routes from "./components/routes";
import Menu from "./components/Menu";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const isLogged = useSelector((state) => state.logged);
  const [local, setLocal] = useState("");

  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      setLocal(location.pathname);
    }, [location]);
  }

  usePageViews();
  console.log(local);
  return (
    <div className="App">
      {isLogged && local !== "/" && local !== "/register" && <Menu />}
      <Routes />
    </div>
  );
}

export default App;
