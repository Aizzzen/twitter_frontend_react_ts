import React from 'react';
import {SignIn} from "./pages/SignIn";
import {Index} from "./pages/Home";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/' element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
