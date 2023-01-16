import React from 'react'; 
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import RecommededVideos from './RecommededVideos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/search/:searchTerm'
            element={
              <h2>tesssss</h2>
            }
          />
          <Route path='/' 
            element={
            <div className="app__page">
              <Sidebar/>
              <RecommededVideos/>
            </div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
