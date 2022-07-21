import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home,About,Contact, Details} from './Pages/index.jsx';


function App() {
  return (
        <BrowserRouter>
          <Routes>
                  <Route path="*" element={<Home />}/>  
                  <Route path="/" element={<Home />}/>  
                  <Route path="/About" element={<About />}/>
                  <Route path="/Contact" element={<Contact />}/>
                  <Route path="/Details/:id" element={<Details />}/> 
          </Routes>        
        </BrowserRouter>
  );
}

export default App;
