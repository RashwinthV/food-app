import { React } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Storeprovider from "./context/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Storeprovider>
    <App/>
    
  </Storeprovider>
);

