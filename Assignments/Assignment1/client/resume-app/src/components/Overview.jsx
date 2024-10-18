import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

function Overview() {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then((response) => response.json())
      .then((data) => setOverview(data));
  }, []);

  return (
    <Container className="my-4">
      <h1>{overview.name}</h1>
      <p>{overview.summary}</p>
    </Container>
  );
}

export default Overview;
