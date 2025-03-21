// admin-panel-uniformes/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UniformesList from './components/UniformesList';
import UniformesForm from './components/UniformesForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UniformesList />} />
        <Route path="/nuevo" element={<UniformesForm />} />
        <Route path="/editar/:id" element={<UniformesForm />} />
      </Routes>
    </Router>
  );
}

export default App;