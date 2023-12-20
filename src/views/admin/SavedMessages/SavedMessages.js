// Import Bootstrap CSS
import { Box } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import necessary hooks and Bootstrap components
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Button, Modal, Form, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';

// Define a Post component
const Post = ({ post, onDelete, onEdit, onSend }) => (
  <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{post.title}</div>
      {post.description}
    </div>
    <Button variant="outline-primary" size="sm" onClick={() => onSend(post.id)}>Send</Button>
    <Button variant="outline-danger" size="sm" onClick={() => onDelete(post.id)}>Delete</Button>
    <Button variant="outline-primary" size="sm" onClick={() => onEdit(post)}>Edit</Button>
  </ListGroup.Item>
);
const SendModal = ({ show, handleClose, groups, individuals, postId }) => {

    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedIndividual, setSelectedIndividual] = useState([]);

    const handleSend = () => {
        // Prepare the body data
        const bodyData = {
          message: postId,
          students: selectedIndividual ? [...selectedIndividual] : [],
          groups: selectedGroup ? [selectedGroup] : []
        };

        console.log(bodyData);
    
        // Retrieve the item from local storage
        const userItem = localStorage.getItem('user'); // Replace with your actual key

        // Parse the item if it exists
        const user = userItem ? JSON.parse(userItem) : null;

        // Access the token if the user object is not null
        const token = user ? user.token : null;

        console.log('my token is: ', token); // This will log the token or null if not found

        // Send the POST request
        fetch('https://fsv55ldvld.execute-api.ap-northeast-1.amazonaws.com/default/api/message/send', {
          method: 'POST',
          mode:'cors',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify(bodyData)
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          console.log('Post sent successfully:', data);
          handleClose();
        })
        .catch(error => {
          console.error('Failed to send post:', error);
        });
      };
    
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Send Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="groupSelect">
                <Form.Label>Group</Form.Label>
                <Form.Select aria-label="Group select" value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)}>
                  <option value="">Select Group</option>
                  {groups.map(group => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="individualSelect">
                <Form.Label>Individual</Form.Label>
                <Form.Select aria-label="Individual select" value={selectedIndividual} onChange={e => setSelectedIndividual([Number.parseInt(e.target.value)])}>
                  <option value="">Select Individual</option>
                  {individuals.map(individual => (
                    <option key={individual.student.id} value={individual.student.id}>{individual.student.student_number}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleSend}>Send Post</Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    };



// Define the App component
const SavedMessages = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [individual, setIndividual] = useState([]);
  
  useEffect(() => {
    // Retrieve the item from local storage
    const userItem = localStorage.getItem('user'); // Replace with your actual key

    // Parse the item if it exists
    const user = userItem ? JSON.parse(userItem) : null;

    // Access the token if the user object is not null
    const token = user ? user.token : null;

    fetch('https://fsv55ldvld.execute-api.ap-northeast-1.amazonaws.com/default/api/student/all', {
      method: 'GET',
      mode:'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log('all students:', data.data);
      setIndividual(data.data);
    })
    .catch(error => {
      console.error('failed to fetch students:', error);
    });

    fetch('/api/message/all/', {
      method: 'GET',
      mode:'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log('all messages:', data.data.messages);
      setPosts(data.data.messages);
    })
    .catch(error => {
      console.error('Failed to send post:', error);
    });
    // (() => {}());
  }, []);

  const groups = [{ id: 'group1', name: 'Group 1' }, { id: 'group2', name: 'Group 2' }];
  // const individuals = [{ id: 'ind1', name: 'John Doe' }, { id: 'ind2', name: 'Jane Smith' }];

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPost(null);
    setIsEditMode(false);
  };

  const handleAddPost = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const newPost = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content
    };

    setPosts([...posts, newPost]);
    handleCloseModal();
  };
  
  const openSendModal = () => {
    setShowSendModal(true);
  };

  const handleCloseSendModal = () => {
    setShowSendModal(false);
  };
  const handleEditPost = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;

    setPosts(posts.map(post => {
      if (post.id === currentPost.id) {
        return { ...post, title, content };
      }
      return post;
    }));
    handleCloseModal();
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };
  const handleSendPost = (id) => {
    // Set the current post ID to be sent
    setCurrentPost(posts.find(post => post.id === id));
    setShowSendModal(true);
  };


  const openEditModal = (post) => {
    setCurrentPost(post);
    setIsEditMode(true);
    setShowModal(true);
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Post Management</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="my-4">
        <Button variant="primary" onClick={() => setShowModal(true)}>Add New Post</Button>
        <ListGroup as="ul" className="my-4">
          {posts.map(post => (
            <Post key={post.id} post={post} onSend={handleSendPost} onDelete={handleDeletePost} onEdit={openEditModal} />
          ))}
          
        </ListGroup>
        
        <SendModal
            show={showSendModal}
            handleClose={handleCloseSendModal}
            groups={groups}
            individuals={individual}
            postId={currentPost?.id} // Pass the current post ID here
            />
      </Container>

      {/* Modal for adding/editing posts */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Edit Post' : 'Add Post'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={isEditMode ? handleEditPost : handleAddPost}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter post title" defaultValue={currentPost?.title} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter post content" defaultValue={currentPost?.content} required />
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            <Button variant="primary" type="submit">{isEditMode ? 'Save Changes' : 'Add Post'}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Box>
  );
};

export default SavedMessages;
