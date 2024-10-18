import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getSkills')
      .then((response) => response.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <Container className="my-4">
      <h2>Summary of Skills</h2>
      <ListGroup>
        {skills.map((skill, index) => (
          <ListGroup.Item key={index}>{skill}</ListGroup.Item> // Display each skill as a list item
        ))}
      </ListGroup>
    </Container>
  );
}

export default Skills;
