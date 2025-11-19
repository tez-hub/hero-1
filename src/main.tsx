import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initLenis } from "./components/LenisProvider.tsx";

initLenis(); // start smooth scroll ONCE

createRoot(document.getElementById("root")!).render(<App />);
