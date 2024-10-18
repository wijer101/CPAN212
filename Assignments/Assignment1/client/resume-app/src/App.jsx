import React, { useState } from 'react';
import Overview from './components/Overview';
import Education from './components/Education';
import Experience from './components/Experience';
import { Container, Navbar } from 'react-bootstrap';
import Skills from './components/Skills';
import './App.css';  // Keep your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State if you want to use it for other things in your app
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar at the top */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Arman Randhawa Resume</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main content: Overview, Education, and Experience */}
      <Container className="section">
        <Overview />
      </Container>
      <Container className="section">
        <Skills />
      </Container>
      <Container className="section">
        <Education />
      </Container>
      <Container className="section">
        <Experience />
      </Container>

      {/* Optional footer or extra sections */}
      <div className="footer">
        <p>References available upon request</p>
      </div>
    </>
  );
}

export default App;
