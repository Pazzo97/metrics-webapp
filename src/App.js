import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Metrics from './components/Metrics';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Metrics />} />
        <Route path="/CountryDetails/:id" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
