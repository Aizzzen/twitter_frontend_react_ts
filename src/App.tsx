import React from 'react';
import {SignIn} from "./pages/SignIn";
import {Home} from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import {UserPage} from "./pages/UserPage";
import {Layout} from "./pages/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/signin' element={<SignIn />} />
                <Route path='*' element={
                    <Layout>
                        <Route path='/home/*' element={<Home/>}/>
                        <Route path='/user/*' element={<UserPage/>}/>
                    </Layout>
                }/>
            </Routes>
        </div>
  );
}

export default App;
