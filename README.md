##  Create React App
1) create a repo for React_router.
2) clone repo & change config file tokens.

#  NPM & Express setup
3) open->cmd-> run-> npx create-react-app Router(it will generate package.json& nodemodules)
4) create index.js file.
5) inside the index.js insert a code.

```
    import ReactDOM from "react-dom/client";
    import App from "./App";

    const root = ReactDOM.createRoot(
    document.getElementById("root")
    );
    root.render(<App />);
```

6)Then create & edit your App.js to be:
```
    export default function App() {
    return (
        <div>
        <h1>Bookkeeper!</h1>
        </div>
    );
    }
```

7)Start Your React App as "NPM start" and see the changes

## Connect To The URL
8)import BrowserRouter in index.js file and render it around your whole app.
```
    import { BrowserRouter } from "react-router-dom"
    ...
    ...
    <BrowserRouter>
        <App />
    </BrowserRouter>
```
## Add links
9)Add some links with app.js to that we need to Route
10)Now made some changes in app.js 
```
    import { Link } from "react-router-dom";
    ...
    ...
    <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            }}
        >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
        </nav>
```

## Add Some Routes
11)Create a new folder and add some files that is useful to route & as be like below mentioned:
    (i)src/routes/invoices.jsx
    (ii)src/routes/expenses.jsx
    (iii)src/routes/inexpense.jsx
12)Now edit invoices.jsx file to 
```
    export default function Invoices() {
    return (
        <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
        </main>
    );
    }
```
13)Now edit expenses.jsx file to
```
    export default function Expenses() {
    return (
        <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
        </main>
    );
    }
```
14)Now edit inexpense.jsx file to
```
    export default function Inexpense() {
        return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Inexpense</h2>
        </main>
        );
    }
```
15)Finally change Router how to render & run our app at different URLs by creating our first "Route Config" inside index.js.
16)Made the changes made in index.js like as below
```
    import {BrowserRouter,Routes,Route,} from "react-router-dom"
    ...
    ...
    import Expenses from "./routes/expenses"
    import Invoices from "./routes/invoices"
    import Inexpense from "./routes/inexpense"
    ...
    ...
    root.render(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="inexpense" element={<Inexpense />} />
        />
        </Routes>
    </BrowserRouter>
    );

```
17)Now run the Router And see the changes.

As it look likes:
<img src="./Screenshots/Screenshots(331).png" style="height: 600x; max-width: 100%;">
