import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { Icon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'

const SearchGroup = () => {
  return (
    <div className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Select Groups..."
        aria-label="Search"
      />
      <button className="btn btn-outline-primary" type="button">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchGroup;