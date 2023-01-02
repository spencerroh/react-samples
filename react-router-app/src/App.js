import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Workspace from './pages/Workspace';

const Container = styled.div`
  border: 1px solid red;
`
const Div = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid blue;
  box-sizing: border-box;
`
function App() {
  return (
    <Div>
      <Container>
        <Router>
          <Routes>
            <Route path="/workspace/*" element={<Workspace />} />
            <Route path="/" element={<Navigate to="/workspace/banana" />} />
          </Routes>
        </Router>
      </Container>
    </Div>
  );
}

export default App;
