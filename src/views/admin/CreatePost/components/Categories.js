import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { Icon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'

const Categories = () => {
  return (
    <div className="d-flex">
      <select class="form-select" aria-label="Default select example">
        <option selected>Choose Category</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

    </div>
  );
};

export default Categories;