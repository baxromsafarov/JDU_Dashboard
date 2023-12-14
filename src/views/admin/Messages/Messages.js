import React, { useState } from 'react';
import { Box, VStack, Text, Heading, Divider, Button, Stack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const initialMessages = [
    {
        id: 'MSG-1',
        userId: 'JDU-211120',
        title: 'Mamat',
        content: 'First  content...',
        date: '29.12.2022',
        read: false,
      },
      {
        id: 'MSG-2',
        userId: 'JDU-211120',
        title: 'Axmat',
        content: 'Second message content...',
        date: '12.11.2022',
        read: false,
      },
      {
        id: 'MSG-3',
        userId: 'JDU-211122',
        title: 'Tolov',
        content: 'Second message content...',
        date: '12.11.2022',
        read: false,
      },
      {
        id: 'MSG-4',
        userId: 'JDU-211122',
        title: 'Qarz',
        content: 'Second message content...',
        date: '12.11.2022',
        read: false,
      },
      {
        id: 'MSG-5',
        userId: 'JDU-211120',
        title: 'Qarz',
        content: 'Second message content...',
        date: '12.11.2022',
        read: false,
      },


];

const MessageList = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [activeUserId, setActiveUserId] = useState(null);
  const [visibleMessagesCount, setVisibleMessagesCount] = useState(4);

  const handleSelectMessage = (userId) => {
    // Mark all messages from the user as read
    const updatedMessages = messages.map((msg) =>
      msg.userId === userId ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    setActiveUserId(userId);
  };

  const handleShowMoreMessages = () => {
    setVisibleMessagesCount(messages.length); // Set to total number of messages
    };
  // Filter messages by the active user
  const activeUserMessages = messages.filter((msg) => msg.userId === activeUserId);

  const visibleMessages = activeUserId ? activeUserMessages : messages.slice(0, visibleMessagesCount);
  return (
    <Box pt={{ base: "150px", md: "80px", xl: "80px" }}>
      {activeUserId ? (
        // Messages from a single user view
        <Box padding="5" bg="white" boxShadow="xl" borderRadius="lg">
          <Heading mb={4} size="md">Messages from {activeUserId}</Heading>
          {activeUserMessages.map((message) => (
            <VStack key={message.id} align="stretch" spacing={4}>
              <Text fontWeight="bold" fontSize="lg">Title: {message.title}</Text>
              <Text fontSize="sm">Date: {message.date}</Text>
              <Text mt={4}>Content: {message.content}</Text>
              <Divider />
            </VStack>
          ))}
          <Button mt={4} onClick={() => setActiveUserId(null)}>Back to all messages</Button>
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
                onClick={() => handleSelectMessage(message.userId)}
                cursor="pointer"
              >
                <Box flex={1} minW={0}>
                  <Text fontWeight="bold" isTruncated>{message.userId}</Text>
                  <Text fontWeight="bold" isTruncated>Title: {message.title}</Text>
                  <Text color="gray.600" isTruncated>Content: {message.content}</Text>
                  <Text color="gray.500" fontSize="sm">Date: {message.date}</Text>
                </Box>
                <Box pl={2}>
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

export default MessageList;