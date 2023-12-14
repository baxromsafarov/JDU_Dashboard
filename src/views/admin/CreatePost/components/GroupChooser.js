// GroupChooser.js

import React, { useState } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GroupChooser = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  const groupOptions = ['Group A', 'Group B', 'Group C'];

  return (
    <Form>
      <Form.Group controlId="groupChooser">
        <Form.Label>Choose a Group:</Form.Label>
        <Dropdown onSelect={handleGroupSelect}>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            {selectedGroup || 'Select Group'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {groupOptions.map((group, index) => (
              <Dropdown.Item key={index} eventKey={group}>
                {group}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default GroupChooser;
