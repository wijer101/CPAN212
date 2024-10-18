import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then((response) => response.json())
      .then((data) => setEducation(data));
  }, []);

  return (
    <Container className="my-4">
      <h2>Education</h2>
      <ListGroup>
        {education.map((edu, index) => (
          <ListGroup.Item key={index}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
            {edu.additionalInfo && (
              <p className="mt-2">{edu.additionalInfo}</p> // Display additional info
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Education;
