import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const BookingModal = ({ isOpen, onClose, station, onBook }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({
      stationId: station.id,
      stationName: station.name,
      date: selectedDate,
      time: selectedTime,
      status: "Pending",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl p-6 w-full max-w-md'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            Book Charging Slot
          </h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Station Name
            </label>
            <p className='text-gray-900 font-medium'>{station.name}</p>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Select Date
            </label>
            <input
              type='date'
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Select Time Slot
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]'
              required
            >
              <option value=''>Select a time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <button
            type='submit'
            className='w-full bg-[#F97316] text-white py-2 px-4 rounded-md hover:bg-[#EA580C] transition-colors'
          >
            Book Slot
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
