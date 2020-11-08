import React from "react";
import "./App.css";
import Header from "./components/Header";
import CardArea from "./components/CardArea";
import Footer from "./components/Footer";
import { Button, Card } from "@material-ui/core";
import MediaControlCard from "./components/MediaControlCard";

function App() {
  return (
    <div className="App">
      <div class="background-image"></div>
      <Header />
      <MediaControlCard />
      <CardArea />
      <Footer />
    </div>
  );
}

export default App;
