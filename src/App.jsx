import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Homepage , Cart  , Login  , Register , Navbar , Footer , About ,Password ,  Dashboard} from "./components" ;

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/Password" element={<Password/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/dashboard" element={< Dashboard/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App