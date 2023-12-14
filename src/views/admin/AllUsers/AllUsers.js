import React from 'react';
import { useState } from 'react';
import {
    Table,
    Input,
    FormControl,
    FormLabel,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Text,
    Box,
    IconButton,
    Button,
    Flex,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons';

// Sample data for the table
const users = [
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  {
    id: 'JDU-211134',
    name: 'Mansurov Muhammadali',
    year: '4th',
    address: 'Chilanzar 24-2',
    phone: '+998(00)000-00-00',
  },
  // ... more users
];

function InitialFocus(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <>
      <Button onClick={onOpen}>
                     <IconButton
                        aria-label="Edit user"
                        icon={<EditIcon />}
                        size="sm"
                      />
                      </Button>
      

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change an account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Student id</FormLabel>
              <Input value={props.user.id} placeholder="Student id"/>
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} value={props.user.name} placeholder="Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Student Year</FormLabel>
              <Input placeholder="Student Year" value={props.user.year}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Student Address</FormLabel>
              <Input placeholder="Student Address" value={props.user.address}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Student Phone</FormLabel>
              <Input placeholder="Student Phone" value={props.user.phone}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="brand" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const UserCard = ({ user }) => (
    <VStack
      align="stretch"
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mb={4}
      key={user.id}
      bg="white"
    >
      <Flex justify="space-between">
        <Text fontWeight="bold">{user.id}</Text>
        <IconButton
          aria-label="Edit user"
          icon={<EditIcon />}
          size="sm"
        />
      </Flex>
      <Text>{user.name}</Text>
      <Text>{user.year}</Text>
      <Text>{user.address}</Text>
      <Text>{user.phone}</Text>
    </VStack>
  );

const AllUsers = () => {
        const [visibleUsersCount, setVisibleUsersCount] = useState(8);
        // Determine if the device is mobile size
        const showTable = useBreakpointValue({ base: false, md: true });
        const handleShowMoreUsers = () => {
            setVisibleUsersCount(users.length); // Set to total number of users
          };

    return (       
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }} padding="5">
        {showTable ? (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Student ID</Th>
                  <Th>Student Name</Th>
                  <Th>Student Year</Th>
                  <Th>Address</Th>
                  <Th>Phone Number</Th>
                  <Th>Edit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.slice(0, visibleUsersCount).map((user) => (
                  <Tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.year}</Td>
                    <Td>{user.address}</Td>
                    <Td>{user.phone}</Td>
                    <Td>
                      <InitialFocus user={user}>
                      
                      </InitialFocus>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          users.slice(0, visibleUsersCount).map((user) => (
            <UserCard user={user} key={user.id} />
          ))
        )}
        {visibleUsersCount < users.length && (
          <Button onClick={handleShowMoreUsers} mt={4}>More</Button>
        )}
      </Box>
      );
};

export default AllUsers;