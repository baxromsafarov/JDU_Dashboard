// LinkTable.js
import React, { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LinkTable = () => {
  const [links, setLinks] = useState([
    {
      id: 1,
      name: 'Link 1',
      url: 'https://www.example.com/link1',
      image: 'https://www.example.com/link1-image.jpg',
    },
    {
      id: 2,
      name: 'Link 2',
      url: 'https://www.example.com/link2',
      image: 'https://www.example.com/link2-image.jpg',
    },
    // Add more link data as needed
  ]);

  const [selectedLinkId, setSelectedLinkId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newLinkData, setNewLinkData] = useState({
    name: '',
    url: '',
    image: '',
  });

  const openModal = (linkId) => {
    setSelectedLinkId(linkId);
    setShowModal(true);
    const selectedLink = links.find((link) => link.id === linkId);
    setNewLinkData({ ...selectedLink });
  };

  const closeModal = () => {
    setSelectedLinkId(null);
    setShowModal(false);
    setNewLinkData({
      name: '',
      url: '',
      image: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLinkData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    // Perform logic to save changes to the selected link
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === selectedLinkId ? { ...link, ...newLinkData } : link
      )
    );
    closeModal();
  };

  const handleDelete = (linkId) => {
    // Perform logic to delete the selected link
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== linkId));
  };

  return (
    <div className="container mt-5">
      <Box>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Link Title</Th>
              <Th>Link Image</Th>
              <Th>Link URL</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {links.map((link) => (
              <Tr key={link.id}>
                <Td>{link.name}</Td>
                <Td>
                  <img
                    src={link.image}
                    alt={`${link.name} Image`}
                    style={{ width: '50px', height: '50px' }}
                  />
                </Td>
                <Td>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.url}
                  </a>
                </Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    size="sm"
                    mr={2}
                    onClick={() => openModal(link.id)}
                  >
                    Change
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleDelete(link.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Modal isOpen={showModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Link Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={newLinkData.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Link URL</FormLabel>
              <Input
                type="text"
                name="url"
                value={newLinkData.url}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Link Image</FormLabel>
              <Input
                type="text"
                name="image"
                value={newLinkData.image}
                onChange={handleChange}
              />
            </FormControl>

            <Button colorScheme="teal" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LinkTable;
const [links, setLinks] = useState([
    {
      id: 1,
      name: 'YouTube',
      url: 'https://www.youtube.com/',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png',
    },
    {
      id: 2,
      name: 'Line',
      url: 'https://line.me/en/',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/1200px-LINE_logo.svg.png',
    },
    {
        id: 3,
        name: 'Link 2',
        url: 'https://www.example.com/link2',
        image: 'https://www.example.com/link2-image.jpg',
      },
      {
        id: 4,
        name: 'Link 2',
        url: 'https://www.example.com/link2',
        image: 'https://www.example.com/link2-image.jpg',
      },
    // Add more link data as needed
  ]);