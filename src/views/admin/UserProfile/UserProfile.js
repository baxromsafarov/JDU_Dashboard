import React, { useState } from 'react';
import { Box, Flex, Input, Button, Radio, RadioGroup, Stack, Heading, Avatar, Text, InputGroup, InputRightElement} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    firstName: 'Mamat',
    lastName: 'Samatov',
    email: 'mamatasamat@gmail.com',
    userId: '',
    address: 'Qoshqamish tumani Soramay kochasi',
    password: '123456',
    role: 'Admin',
    university: 'Some University',
    profileImage: null,
  });
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, profileImage: file });
  };
  
  return (
    <Flex direction={{ base: 'column', md: 'row' }} pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* User Card Display */}
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }} mr={5} shadow="md" borderWidth="1px" borderRadius="lg" width={{ base: 'full', md: '30%' }} align="center">
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
        <Text fontWeight="bold" fontSize="xl" mb={2}>
          {userData.firstName + ' ' + userData.lastName}
        </Text>
        <Text fontSize="md" color="gray.600">{userData.role}</Text>
        </Box>

      {/* User Form */}
      <Box flex="1" shadow="md" borderWidth="1px" borderRadius="lg" p={5}>
        <Heading mb={5}>Edit Profile</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Input placeholder="First Name" value={userData.firstName} name="firstName" onChange={handleInputChange} />
            <Input placeholder="Last Name" value={userData.lastName} name="lastName" onChange={handleInputChange} />
            <Input placeholder="Email" value={userData.email} name="email" onChange={handleInputChange} />
            <Input placeholder="Address" value={userData.address} name="address" onChange={handleInputChange} />
            <Input type="file" name="profileImage" onChange={handleImageChange} accept="image/*" />
            <InputGroup>
              <Input
                placeholder="Create Password"
                name="password"
                value={userData.password}
                type={showPassword ? 'text' : 'password'}
                onChange={handleInputChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handlePasswordVisibility}>
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="blue" type="submit">Update Profile</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default UserProfile;