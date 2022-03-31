import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import React from "react";
import Tuiter from "./components/tuiter";

import './vendors/bootstrap/css/bootstrap.css';
import './vendors/fontawesome/css/all.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import ExploreScreen from "./components/tuiter/explore-screen/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen/homeScreen";
import ProfileScreen from "./components/tuiter/profile-screen";

import './explore.css';

const NavigationBar = () => {
    return (
        <>
            <Link to='/hello' className='d-block'>HelloWorld</Link>
            <Link to='/labs' className='d-block'>Labs</Link>
            <Link to='/tuiter' className='d-block'>Tuiter</Link>
        </>
    )
}

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route index element={<NavigationBar />} />
                      <Route path="labs" element={<Labs />} />
                      <Route path="hello" element={<HelloWorld />} />
                      <Route path="tuiter" element={<Tuiter />}>
                          <Route index element={<HomeScreen />} />
                          <Route path="explore" element={<ExploreScreen />} />
                          <Route path="profile" element={<ProfileScreen />} />
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
