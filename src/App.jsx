import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Homepage , Login  , Register,Profile , Navbar , Footer , About ,Password ,  Dashboard , Custom , Order,AdminOrder , Sucess , Shop} from "./components" ;
import State from './context/State';

const App = () => {
  return (
    <div>
      <State>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/Password" element={<Password/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/order" element={<Order/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/dashboard" element={< Dashboard/>} />
          <Route exact path="/custom" element={<Custom/>} />
          <Route exact path="/success" element={<Sucess/>} />
          <Route exact path="/shop" element={<Shop/>} />
          <Route exact path="/adminorder" element={<AdminOrder/>} />
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>
        <Footer/>
      </Router>
      </State>
    </div>
  )
}

export default App