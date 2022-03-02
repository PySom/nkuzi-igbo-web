import React from "react";
import Nav from "./components/Nav/Nav"
import Form from "./components/Content/Form"
import "./App.css"
import Footer from "./components/Foter/Footer";
import Body from "./components/Content/Body";
import Body2 from "./components/Content/Body2";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Body />
        <Body2 />
        <Form />
        <Footer />
      </div>
    )
  }
}
 

export default App;
