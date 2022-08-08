import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Delete from './pages/Delete';
import Get from './pages/Get';
import Home from './pages/Home';
import Post from './pages/Post';
import Put from './pages/Put';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/put" element={<Put />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </>
    
  );
}

export default App;