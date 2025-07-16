import React, { useState } from 'react';
import { Datepicker, Card } from '../src/components';

const DatepickerDemo = () => {
  const [selectedDates, setSelectedDates] = useState({
    birthdate: null,
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (field) => (date) => {
    setSelectedDates(prev => ({
      ...prev,
      [field]: date
    }));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Datepicker Component Demo
      </h1>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <Datepicker
              placeholder="Select your birthdate"
              value={selectedDates.birthdate}
              onChange={handleDateChange('birthdate')}
            />
            {selectedDates.birthdate && (
              <p className="text-xs text-gray-500 mt-1">
                Age: {Math.floor((new Date() - selectedDates.birthdate) / (365.25 * 24 * 60 * 60 * 1000))} years
              </p>
            )}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Date Range Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <Datepicker
              placeholder="Select start date"
              value={selectedDates.startDate}
              onChange={handleDateChange('startDate')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <Datepicker
              placeholder="Select end date"
              value={selectedDates.endDate}
              onChange={handleDateChange('endDate')}
            />
          </div>
        </div>
        
        {selectedDates.startDate && selectedDates.endDate && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <p className="text-sm">
              <strong>Duration:</strong> {' '}
              {Math.ceil((selectedDates.endDate - selectedDates.startDate) / (24 * 60 * 60 * 1000))} days
            </p>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Selected Dates Summary</h2>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Birthdate:</strong>{' '}
            {selectedDates.birthdate ? selectedDates.birthdate.toLocaleDateString() : 'Not selected'}
          </p>
          <p>
            <strong>Start Date:</strong>{' '}
            {selectedDates.startDate ? selectedDates.startDate.toLocaleDateString() : 'Not selected'}
          </p>
          <p>
            <strong>End Date:</strong>{' '}
            {selectedDates.endDate ? selectedDates.endDate.toLocaleDateString() : 'Not selected'}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default DatepickerDemo;
