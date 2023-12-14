import React from 'react';
import { useState } from 'react';
import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
    Button,
  } from "@chakra-ui/react";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
  import {
    MdEdit,
    MdDelete,
  } from "react-icons/md";
  import { useDisclosure } from '@chakra-ui/react';

// Заглушка данных
const allGroupsData = [
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  { id: '20A', members: 21, leader: 'Komilov Ibrohim' },
  { id: '20B', members: 19, leader: 'Sirojiddin Halilov' },
  // Добавьте остальные группы здесь
];

// const GroupCard = ({ group }) => {
//   return (
//     <div className="group-card">
//       <div className="group-id">{group.id}</div>
//       <div className="group-members">👥 {group.members}</div>
//       <div className="group-leader">{group.leader}</div>
//     </div>
//   );
// };
const initialData = [
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  { id: 1, firstName: 'Ali', lastName: 'Ismailov', idNumber: 'JDU-21136', address: 'Chilanzar 24-43', phoneNumber: '+998(20)100-01-36' },
  // Добавьте больше данных здесь
];

function SizeExample(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('full')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  const [visibleData, setVisibleData] = useState(initialData.slice(0, 10)); // Показать первые 10 элементов
  const [dataIndex, setDataIndex] = useState(10); // Индекс для следующих элементов

  const loadMore = () => {
    const nextItems = initialData.slice(dataIndex, dataIndex + 10); // Получить следующие 10 элементов
    setVisibleData(prev => [...prev, ...nextItems]); // Добавить их к текущему отображаемому списку
    setDataIndex(prev => prev + 10); // Увеличить индекс
  };

  return (
    <>
      
        <Button
          onClick={() => handleSizeClick(size)}
          m={4}
        >{`Open Group`}</Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.group.id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <SimpleGrid
        columns={{ }}
        gap='20px'
        mb='20px'>
    <div className='table-responsive'>
        <h2>21A Group</h2>
        <table>
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID Number</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {visibleData.map((item, index) => (
            <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.idNumber}</td>
                <td>{item.address}</td>
                <td>{item.phoneNumber}</td>
                <td>
                    <a href='/edit-profile'>
                        <Icon
                            as={MdEdit}
                            width='20px'
                            height='20px'
                            color='inherit'
                        />
                    </a>
                </td>
                <td>
                    <a href='/delete-profile'>
                        <Icon
                            as={MdDelete}
                            width='20px'
                            height='20px'
                            color='inherit'
                        />
                    </a>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
                {dataIndex < initialData.length && (
                <Button onClick={loadMore}>More...</Button>
            )}
    </div>
    </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


const GroupCard = ({ groups }) => {
  return (
    <div className="group-list">
      {groups.map(group => (
        <CardView key={group.id} group={group} />
      ))}
    </div>
  );
};
const GroupList = ({ groups }) => {
    return (
      <div className="">
        <table>
            <thead>
                <tr>
                    <th>Group</th>
                    <th>Leader</th>
                    <th>Members</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                
                    {groups.map(group => (
                      
                        <ListView key={group.id} group={group} />
                      
                    ))}
                
            </tbody>
        </table>
      </div>
    );
  };

const ToggleButton = ({ onViewChange }) => (
    <div className='toggle-buttons'>
      <button onClick={() => onViewChange('card')}>
        <span class="material-symbols-outlined">
            cards
        </span>
      </button>
      <button onClick={() => onViewChange('list')}>
        <span class="material-symbols-outlined">
            list
        </span>
      </button>
    </div>
  );
  const ListView = ({ group }) => (
    
        <tr>
          <td>{group.id}</td>
          <td>{group.leader}</td>
          <td>
            {group.members}
            <span class="material-symbols-outlined groups-icon">
                 group
            </span>
          </td>
          <td><SizeExample group={group}></SizeExample></td>
        </tr>
   
);
  
  const CardView = ({ group }) => (
    
    <div className="group-card">
      <div className="group-id">{group.id}</div>
      <div className="group-members">
        {group.members}
        <span class="material-symbols-outlined groups-icon">
                 group
        </span>
    </div>
      <div className="group-leader">{group.leader}</div>
      <SizeExample group={group}></SizeExample>
    </div>
  );
  
const AllGroups = () => {

    
    const [viewMode, setViewMode] = useState('card');
    const [groupsToShow, setGroupsToShow] = useState(allGroupsData.slice(0, 16));
    const [showAll, setShowAll] = useState(false);
  
    const handleShowMore = () => {
      setGroupsToShow(allGroupsData);
      setShowAll(true);
    };

    const handleToggleView = () => {
        setViewMode(viewMode === 'card' ? 'row' : 'card');
    };
    const handleViewChange = (newView) => setViewMode(newView);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
        columns={{ }}
        gap='20px'
        mb='20px'>
             
            <div className="app-container">
            <ToggleButton onViewChange={handleViewChange} />
            {viewMode === 'card' ? <GroupCard groups={groupsToShow} /> : <GroupList groups={groupsToShow} />}
                {/* <GroupList groups={groupsToShow} /> */}
                {!showAll && (
                    <div className="show-more-container">
                        <Button onClick={handleShowMore} className="">More</Button>
                    </div>
                )}
            </div>
    </SimpleGrid>
    </Box>
  );
};

export default AllGroups;