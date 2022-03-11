import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';

import './vendors/bootstrap/css/bootstrap.css';
// import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import Index from "./components/tuiter/index";



// import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/tuiter"
                         exact={true}
                         element={<Index/>}/>
              </Routes>
          </div>
      </BrowserRouter>


  );
}

export default App;
