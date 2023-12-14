// LinkForm.js
import React, { useState } from 'react';
import {
  Box,
  FormControl,
  SimpleGrid,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LinkForm = () => {
  const [link, setLink] = useState({
    name: '',
    url: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLink((prevLink) => ({ ...prevLink, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submit logic here, e.g., send data to a server
    console.log('Link submitted:', link);
    // Reset the form after submission
    setLink({ name: '', url: '', image: '' });
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
        columns={{ }}
        gap='20px'
        mb='20px'>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Link Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={link.name}
                onChange={handleInputChange}
                className="form-control"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Link URL</FormLabel>
              <Input
                type="text"
                name="url"
                value={link.url}
                onChange={handleInputChange}
                className="form-control"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Link Image</FormLabel>
              <Input
                type="file"
                name="image"
                value={link.image}
                onChange={handleInputChange}
                className="form-control"
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" mt={4}>
              Add Link
            </Button>
          </form>
        </div>
      </div>
    </div>
    </SimpleGrid>
    </Box>
  );
};

export default LinkForm;
