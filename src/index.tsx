import { render } from "react-dom";
import "./styles/common.css";
import "./styles/containers.css";
import "./styles/layout.css";
import "./styles/card.css";
import "./styles/aside.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
