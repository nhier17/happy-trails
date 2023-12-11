import React from "react";
import About from "./pages/aboutus";
//import pages
import GlobalStyle from "./Components/globalstyle";
import Nav from "./Components/nav";
import ContactUs from "./pages/contactus";
import OurWork from "./pages/ourwork";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import MovieDetail from "./pages/moviedetails";
import {AnimatePresence,motion} from "framer-motion"
import ScrollTop from "./Components/scrolltop";


function App() {
  return (
    <AnimatePresence mode="wait">
    <motion.div className="App" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      
    <GlobalStyle/>
    
      <BrowserRouter>
      <Nav/>
      <ScrollTop/>
    <Routes>
      <Route path="/" exact element={<About/>}> 
    </Route>
      <Route path="/work" exact element={ <OurWork/>}>
    </Route>
    <Route path="/work/:id" element={<MovieDetail/>}>
    </Route>
      <Route path="/contact" element={<ContactUs />}>
    </Route>
    </Routes>
    </BrowserRouter>
    </motion.div>
    </AnimatePresence>
    
  );
}

export default App;
