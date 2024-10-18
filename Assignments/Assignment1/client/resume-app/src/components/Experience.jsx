import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then((response) => response.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <Container className="my-4">
      <h2>Experience</h2>
      <ListGroup>
        {experience.map((exp, index) => (
          <ListGroup.Item key={index}>
            <strong>{exp.role}</strong> - {exp.company} ({exp.duration})
            {exp.responsibilities && (
              <ul className="mt-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li> // Loop through and display responsibilities
                ))}
              </ul>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Experience;
