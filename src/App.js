import React from "react"
import GlobalStyle from "./globalStyles"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Test from './pages/Testpage'
import About from './pages/About/index'
import {Navbar,Footer} from "./components"
import Form from "./pages/form/Form";
import './App.css'


function App() {    
  return (
    <Router>
      <GlobalStyle/>  
      <Navbar/> 
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Prayer_Request" exact component={Form}/>
        <Route path="/Testimonial" exact component={Test}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
