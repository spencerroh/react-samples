import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Workspace from './pages/Workspace';

const Div = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`
function App() {
  return (
    <Div>
      <div className="h-full">
        <Router>
          <Routes>
            <Route path="/workspace/*" element={<Workspace />} />
            <Route path="/" element={<Navigate to="/workspace/banana" />} />
          </Routes>
        </Router>
      </div>
    </Div>
  );
}

export default App;
