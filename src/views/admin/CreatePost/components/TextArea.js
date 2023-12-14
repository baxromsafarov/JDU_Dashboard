// RichTextArea.js

import React, { useState } from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RichTextArea = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState('14px');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontColor, setFontColor] = useState('#000000');

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const handleFontFamilyChange = (family) => {
    setFontFamily(family);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  const handleDownloadImage = () => {
    // Dummy function for image download
    alert('Image download functionality will be implemented here.');
  };

  return (
    <div>
      <Form.Group controlId="textarea">
        <Form.Label>Text Area</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          style={{ fontSize, fontFamily, color: fontColor }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <Dropdown className="mb-2">
        <Dropdown.Toggle variant="secondary" id="dropdown-font-size">
          Font Size
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFontSizeChange('12px')}>12px</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFontSizeChange('16px')}>16px</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFontSizeChange('20px')}>20px</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="mb-2">
        <Dropdown.Toggle variant="secondary" id="dropdown-font-family">
          Font Family
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFontFamilyChange('Arial')}>Arial</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFontFamilyChange('Times New Roman')}>
            Times New Roman
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFontFamilyChange('Courier New')}>
            Courier New
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="mb-2">
        <Dropdown.Toggle variant="secondary" id="dropdown-font-color">
          Font Color
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFontColorChange('#000000')}>Black</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFontColorChange('#ff0000')}>Red</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFontColorChange('#0000ff')}>Blue</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="primary" onClick={handleDownloadImage} className="mb-2">
        Download Image
      </Button>
    </div>
  );
};

export default RichTextArea;
