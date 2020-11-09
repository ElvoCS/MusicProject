import React from "react";
import "../App.css";
import Header from "../components/Header";
import CardArea from "../components/CardArea";
import Footer from "../components/Footer";

function Song() {
  return (
    <div className="App">
      <div class="background-image"></div>
      <Header />
      <CardArea />
      <Footer />
    </div>
  );
}

export default Song;
