
import {
    Avatar,
    Box,
    Button,
  } from "@chakra-ui/react";


import React, { useState } from 'react';
import Select from 'react-select';


const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // Add more options as needed
];

function SearchableSelect() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSearchTerm('');
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <input
        type="text"
        placeholder="Search.."
        value={searchTerm}
        onChange={handleChange}
      />
      {filteredOptions.map((option) => (
        <p key={option.value} onClick={() => handleSelect(option)}>
          {option.label}
        </p>
      ))}
      {selectedOption && <p>Selected: {selectedOption.label}</p>}
    </div>
  );
}





const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [groupTeacher, setGroupTeacher] = useState('Mahmudova Lola');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [teachers, setTeachers] = useState(['Mahmudova Lola', 'Mamat1', 'Mamat2']);
  const [groupStudents, setGroupStudents] = useState([
    { id: 'JDU-211131', name: 'Mamataka' },
    { id: 'JDU-123122', name: 'Rahimov Kamolidin' },
    { id: 'JDU-938243', name: 'Ken Takabe' },
    { id: 'JDU-211134', name: 'Mamataka' },
    { id: 'JDU-123125', name: 'Rahimov Kamolidin' },
    { id: 'JDU-938246', name: 'Ken Takabe' },
    { id: 'JDU-211137', name: 'Mamataka' },
    { id: 'JDU-123128', name: 'Rahimov Kamolidin' },
    { id: 'JDU-938249', name: 'Ken Takabe' },
    { id: 'JDU-211130', name: 'Mamataka' },
    { id: 'JDU-123111', name: 'Rahimov Kamolidin' },
    { id: 'JDU-938222', name: 'Ken Takabe' },
    { id: 'JDU-123533', name: 'Miller John' }
  ]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleStudentChange = (e) => {
    const selectedStudentId = e.target.value;
    const selectedStudent = groupStudents.find((student) => student.id === selectedStudentId);
  
    if (
      selectedStudent &&
      !selectedMembers.some((member) => member.value === selectedStudent.id)
    ) {
      setSelectedMembers((prevSelectedMembers) => [
        ...prevSelectedMembers,
        { value: selectedStudent.id, label: selectedStudent.name },
      ]);
    }
  };
  
  const groupTeacherDeleteHandler = (teacher) => {
    setSelectedTeacher(null);
  };
  
  const groupStudentDeleteHandler = (studentId) => {
    setSelectedMembers((prevSelectedMembers) =>
      prevSelectedMembers.filter((student) => student.value !== studentId)
    );
  };
  

  

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
    <div className="group-create-container">
      <h2 className="create-title">Create New Group</h2>
      
        <div className="form-group">
          <label>Choose Teacher:</label>
          <Select
            value={selectedTeacher}
            onChange={(selectedOption) => setSelectedTeacher(selectedOption.label)}
            options={teachers.map((teacher) => ({ value: teacher, label: teacher }))}
          />
        </div>
        <div className="form-group">
          <label>Choose Students:</label>
          
          <Select
            isMulti
            value={selectedMembers}
            onChange={(selectedOptions) => setSelectedMembers(selectedOptions)}
            options={groupStudents.map((student) => ({ value: student.id, label: student.name }))}
          />
        </div>
     
      <div className="selected-mem">
          <div className="teach">
            <h3 className="chosen-teach">Chosen Teachers:</h3>
            <ul>
              {selectedTeacher && (
                <li>
                  {selectedTeacher}
                  <button className="btn btn-danger" onClick={() => groupTeacherDeleteHandler(selectedTeacher)}>
                    Delete
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div className="teach">
            <h3 className="chosen-teach">Chosen Students:</h3>
            <ul>
              {selectedMembers.map((student) => (
                <li key={student.value}>
                  <span>{student.label}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => groupStudentDeleteHandler(student.value)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      <div className="form-actions">
        <button className="delete-btn">Delete Group</button>
        <button className="create-btn">Create Group</button>
      </div>
    </div>
    
    </Box>
  );
};

export default CreateGroup;


