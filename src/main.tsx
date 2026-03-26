import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
// per tr Sh, En, De, It -> import "./i18n";

createRoot(document.getElementById("root")!).render(<App />);
