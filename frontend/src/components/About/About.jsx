import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div>
        <h1>Fetched Data:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>quantity</th>
              </tr>
            </thead>
            <tbody>
             {data.map((item) => (
                 <tr>
                   <td>{item.id}</td>
                   <td>{item.name}</td>
                   <td>{item.quantity}</td>
                 </tr>
               ))}
            </tbody>
          </Table>
    </div>
  );
};

export default About;
