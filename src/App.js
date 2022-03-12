import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import React from "react";

import './vendors/bootstrap/css/bootstrap.css';
import './vendors/fontawesome/css/all.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import ExploreScreen from "./components/tuiter/explore-screen/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen/homeScreen";

import './explore.css';

const NavigationBar = () => {
    return (
        <>
            <Link to='/hello' className='d-block'>HelloWorld</Link>
            <Link to='/labs' className='d-block'>Labs</Link>
            <Link to='/tuiter/home' className='d-block'>Tuiter Home</Link>
            <Link to='/tuiter/explore' className='d-block'>Tuiter Explore</Link>
        </>
    )
}

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/" exact={true}
                         element={<NavigationBar/>} />
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/labs"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/tuiter/home"
                         element={<HomeScreen/>} />
                  <Route path="/tuiter/explore"
                         element={<ExploreScreen/>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
