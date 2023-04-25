import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overzicht from "./pages/Overzicht";
import {Facturen, Factuur1, Factuur2, Factuur3} from "./pages/Facturen";
import Team from "./pages/Team";
import "./App.css";

function App() {
  return (
      <>
        <Sidebar/>
        <Routes>
          <Route path="/overzicht" exact component={Overzicht}/>
          <Route path="/facturen" exact component={Facturen}/>
          <Route path="/facturen/factuur1" exact component={Factuur1}/>
          <Route path="/facturen/factuur2" exact component={Factuur2}/>
          <Route path="/facturen/factuur3" exact component={Factuur3}/>
          <Route path="/team" exact component={Team}/>
        </Routes>
      </>
  );
}

export default App;
