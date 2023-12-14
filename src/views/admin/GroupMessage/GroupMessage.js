import React, { useState } from 'react';
import { Box, VStack, Text, Heading, Divider, Button, Stack } from '@chakra-ui/react';
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

  
const initialMessages = [
    {
        id: 'MSG-1',
        groupId: '21A',
        title: 'Mamat',
        content: 'First  content...',
        date: '29.12.2022',
        read: false,
      },
      {
        id: 'MSG-2',
        groupId: '21B',
        title: 'Mamat',
        content: 'First  content...',
        date: '29.12.2022',
        read: false,
      },
      {
        id: 'MSG-3',
        groupId: '21A',
        title: 'Mamat',
        content: 'First  content...',
        date: '29.12.2022',
        read: false,
      },


];


function BasicUsage(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Viewed Students 80%</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.data.groupId}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                
              <Text fontWeight='bold' mb='1rem'>
                Axmadjom Xolmedov
                <CheckIcon color={props.data.read ? "green.500" : "gray.500"} />
                  {props.data.read && <CheckIcon color="green.500" ml="-6px" />}
              </Text>
              <Text fontWeight='bold' mb='1rem'>
                Axmadjom Xolmedov
                <CheckIcon color={props.data.read ? "green.500" : "gray.500"} />
                  {props.data.read && <CheckIcon color="green.500" ml="-6px" />}
              </Text>
              <Text fontWeight='bold' mb='1rem'>
                Axmadjom Xolmedov
                <CheckIcon color={props.data.read ? "green.500" : "gray.500"} />
                  {props.data.read && <CheckIcon color="green.500" ml="-6px" />}
              </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }



const GroupMessage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [activeGroupId, setActiveGroupId] = useState(null);
  const [visibleMessagesCount, setVisibleMessagesCount] = useState(4);

  const handleSelectMessage = (groupId) => {
    // Mark all messages from the user as read
    const updatedMessages = messages.map((msg) =>
      msg.groupId === groupId ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    setActiveGroupId(groupId);
  };

  const handleShowMoreMessages = () => {
    setVisibleMessagesCount(messages.length); // Set to total number of messages
    };
  // Filter messages by the active user
  const activeUserMessages = messages.filter((msg) => msg.groupId === activeGroupId);

  const visibleMessages = activeGroupId ? activeUserMessages : messages.slice(0, visibleMessagesCount);
  return (
    <Box pt={{ base: "150px", md: "80px", xl: "80px" }}>
      {activeGroupId ? (
        // Messages from a single user view
        <Box padding="5" bg="white" boxShadow="xl" borderRadius="lg">
          <Heading mb={4} size="md">Messages from {activeGroupId}</Heading>
          {activeUserMessages.map((message) => (
            <VStack key={message.id} align="stretch" spacing={4}>
              <Text fontWeight="bold" fontSize="18px">Title: {message.title}</Text>
              <Text fontSize="sm">Date: {message.date}</Text>
              <Text mt={4}>Content: {message.content}</Text>
              <BasicUsage data={message}/>
              <Divider />
              

            </VStack>
          ))}
          <Button mt={4} onClick={() => setActiveGroupId(null)}>Back to all messages</Button>
        </Box>
      ) : (
        // All messages list view
        <Box padding="5" bg="white" boxShadow="xl" borderRadius="lg">
          <Heading mb={4} size="md">Messages</Heading>
          <VStack divider={<Divider />} spacing={4}>
          {visibleMessages.map((message) => (
              <Stack
                key={message.id}
                p={4}
                w="full"
                borderWidth="1px"
                borderRadius="lg"
                direction="row"
                justify="space-between"
                align="center"
                onClick={() => handleSelectMessage(message.groupId)}
                cursor="pointer"
              >
                <Box flex={1} minW={0}>
                  <Text fontWeight="bold" isTruncated>{message.groupId}</Text>
                  <Text fontWeight="bold" isTruncated>TItle: {message.title}</Text>
                  <Text color="gray.600" isTruncated>Content: {message.content}</Text>
                  <Text color="gray.500" fontSize="sm">Date: {message.date}</Text>
                </Box>
                
                <Box pl={2}>
                    
                    <span className='per-span'>
                        80%
                    </span>
                  <CheckIcon color={message.read ? "green.500" : "gray.500"} />
                  {message.read && <CheckIcon color="green.500" ml="-6px" />}
                </Box>
              </Stack>
            ))}
          </VStack>
          {visibleMessagesCount < messages.length && ( // Only show the "More" button if there are more messages to show
            <Button mt={4} onClick={handleShowMoreMessages}>More</Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default GroupMessage;