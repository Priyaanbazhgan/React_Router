import { Link,Outlet } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
       <div>
        <h1>Topnotch!</h1>
       </div>
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="invoices">Invoices</Link> |{" "}
        <Link to="expenses">Expenses</Link> |{" "}
        <Link to="inexpense">Inexpense</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
