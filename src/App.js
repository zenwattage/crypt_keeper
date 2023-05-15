import React from "react";
import "./App.css";
import { Container } from 'react-bootstrap';
import Header from "./components/Header/Header";
import Main from "./components/Main";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LandingPage from './LandingPage';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const App = () => {
  return (

    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<LandingPage />} /> */}
    //     <Route path="/main" element={<Main />} />
    //   </Routes>
    // </BrowserRouter>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header />
        <Container>
          <div className="inputContainers">
            <Main />
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
