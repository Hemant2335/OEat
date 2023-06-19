import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Homepage , Login  , Register , Navbar , Footer , About ,Password ,  Dashboard , Custom , Order , Sucess} from "./components" ;

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
          <Route exact path="/order" element={<Order/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/dashboard" element={< Dashboard/>} />
          <Route exact path="/custom" element={<Custom/>} />
          <Route exact path="/success" element={<Sucess/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App