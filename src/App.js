import "./App.css";


import {Route, Routes } from "react-router-dom";

import Home from './Components/Home'
import Error from './Components/Error'
import About from './Components/About'
import SharedLayout from './Components/SharedLayout'
import ComMembers from './Components/ComMembers'
import FounDocum from './Components/FounDocum'
import GenMeeting from './Components/GenMeeting'

function App() {

  

  return (
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="FounDocum" element={<FounDocum />} />
          <Route path="GenMeeting" element={<GenMeeting />} />
          <Route path="ComMembers" element={<ComMembers />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;
