
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App