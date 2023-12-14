// DatePickerPost.js
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="mb-3">
      
      
      <div className="input-group">
        <DatePicker
          id="datepicker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="form-control"
          dateFormat="dd/MM/yyyy"
          placeholderText='Schedule:'
        />
        <label htmlFor="datepicker" className="form-label">
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="bi bi-calendar"></i>
          </span>
        </div>
        </label>
      </div>
    </div>
  );
};

export default CustomDatePicker;

