import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage'
import Homepage from './Homepage';
import Explore from './Explore';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Homepage' element={<Homepage/>}></Route>
        <Route path='/Mainpage' element={<Mainpage/>}></Route>
        <Route path='/Explore' element={<Explore/>}></Route>
      </Routes>
      {/* <Mainpage/> */}
      {/* <Homepage/> */}
    </>
  );
}

export default App;
