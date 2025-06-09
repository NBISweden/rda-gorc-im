import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App, {parseAppConfig} from "./App.tsx";
import { Documentation } from "./pages/Documentation.tsx";


async function loadApp(url: string) {
  let config = parseAppConfig();
  try {
    const appConfigData = await (await fetch(url)).json();
    config = parseAppConfig(appConfigData);
  } catch (_e) {
    console.warn(`No config found at: ${url}`);
  }
  document.title = config.title;
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App config={config}/>} />
          <Route path="documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );

}

loadApp("config.json")
