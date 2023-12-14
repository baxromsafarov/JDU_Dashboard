import React, { useState } from 'react';
import { Box, Flex, Input, Button, Radio, RadioGroup, Stack, Heading, Avatar, Text, InputGroup, InputRightElement} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const AddAdmin = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userId: '',
    password: '',
    role: 'Admin',
    profileImage: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, profileImage: file });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', userData);
    // Logic for submitting user data, such as an API call, goes here
  };
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <Flex direction={{ base: 'column', md: 'row' }} pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* User Card Display */}
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} mr={5} shadow="md" borderWidth="1px" borderRadius="lg" width={{ base: 'full', md: '30%' }} align="center">
        {userData.profileImage ? (
          <Avatar
            size="xl"
            name={userData.firstName + ' ' + userData.lastName}
            mb={4}
            src={URL.createObjectURL(userData.profileImage)}
          />
        ) : (
          <Avatar size="xl" name={userData.firstName + ' ' + userData.lastName} mb={4} />
        )}
        <Text fontWeight="bold" fontSize="xl" mb={2}>{userData.firstName + ' ' + userData.lastName}</Text>
        <Text fontSize="md" color="gray.600">{userData.role}</Text>
      </Box>

      {/* User Form */}
      <Box flex="1" shadow="md" borderWidth="1px" borderRadius="lg" p={5}>
        <Heading mb={5}>Add Admin</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Input placeholder="First Name" name="firstName" onChange={handleInputChange} />
            <Input placeholder="Last Name" name="lastName" onChange={handleInputChange} />
            <Input placeholder="Email" name="email" onChange={handleInputChange} />
            {/* {userData.role !== 'Admin' && (
              <Input placeholder="User ID" name="userId" onChange={handleInputChange} />
            )} */}
            <InputGroup>
              <Input
                placeholder="Create Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleInputChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handlePasswordVisibility}>
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            
            <Input placeholder="Repeat Password" type="password" onChange={handleInputChange} />
            <Input type="file" name="profileImage" onChange={handleImageChange} accept="image/*" />

            <Button colorScheme="blue" type="submit">Add User</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default AddAdmin;