import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Workspace from './pages/Workspace';

const Container = styled.div`
  border: 1px solid red;
`
function App() {
  return (
    <div className="App">
      <header> This is Header</header>
      <Container>
        <Router>
          <Routes>
            <Route path="/workspace/*" element={<Workspace />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
