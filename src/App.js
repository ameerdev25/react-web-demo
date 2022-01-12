import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import styled from "styled-components";

class App extends React.Component {

  render() {

    const Wrapper = styled.div`
      padding: 0 10px 0 10px;
    `;

    return (    
      <Router>        
          <NaviBar />
          <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>   
        </Wrapper>       
      </Router>
    );
  }
}

export default App;