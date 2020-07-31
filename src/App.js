import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Photo from './components/Photo';

function App() {
  return (
    
    <BrowserRouter>
      <div className="app">
      <Home />
      <Photo />
      </div>
  </BrowserRouter>
 
  );
}

export default App;
