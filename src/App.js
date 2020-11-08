import React from "react";
import "./App.css";
import Header from "./components/Header";
import CardArea from "./components/CardArea";
import { Button, Card } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div class="background-image"></div>
      <Header />
      <CardArea />
    </div>
  );
}

export default App;
