import React, { Component } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Excercise from "./excercises";

export default class extends Component {
  render() {
    return (
      <>
        <Header />
        <Excercise />
        <Footer />
      </>
    );
  }
}
