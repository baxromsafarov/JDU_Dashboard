import React from 'react';
import { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  import {
    MdEdit,
    MdDelete,
  } from "react-icons/md";
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

const GroupDetails = () => {

    const [visibleData, setVisibleData] = useState(initialData.slice(0, 10)); // Показать первые 10 элементов
    const [dataIndex, setDataIndex] = useState(10); // Индекс для следующих элементов
  
    const loadMore = () => {
      const nextItems = initialData.slice(dataIndex, dataIndex + 10); // Получить следующие 10 элементов
      setVisibleData(prev => [...prev, ...nextItems]); // Добавить их к текущему отображаемому списку
      setDataIndex(prev => prev + 10); // Увеличить индекс
    };
  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
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
    </Box>
  );
};

export default GroupDetails;