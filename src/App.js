import React from 'react'; 
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
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
              <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>}/>
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
