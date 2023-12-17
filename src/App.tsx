/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlpinistsPage from "./AlpinistsPage/AlpinistsPage";
import AlpinistPage from "./AlpinistPage/alpinistPage";
import Header from "./Header.tsx";
import { invoke } from "@tauri-apps/api";
const App: React.FC = () => {
  useEffect(() => {
    // Create a new Tauri window
    invoke("tauri", { cmd: "create" })
      .then((response: any) => console.log(response))
      .catch((error: any) => console.error(error));

    return () => {
      // Optionally, close the Tauri window when the component unmounts
      invoke("tauri", { cmd: "close" })
        .then((response: any) => console.log(response))
        .catch((error: any) => console.error(error));
    };
  }, []);
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/rip_front" element={<AlpinistsPage />} />
        <Route path="/rip_front/alpinist/:id" element={<AlpinistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
