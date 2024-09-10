import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
}

export default App;
