// DeliveryActivities.tsx
"use client"
import { useState } from 'react';

const DeliveryActivities = () => {
  // State variables for form fields
  const [commodityDescription, setCommodityDescription] = useState('');
  const [destination, setDestination] = useState('');
  const [deliveryNoteNumber, setDeliveryNoteNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [condition, setCondition] = useState('');
  const [quantityCondition, setQuantityCondition] = useState('');
  const [picture, setPicture] = useState<File | null>(null);
  const [pictureDescription, setPictureDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle form submission goes here
  };

  // Function to handle picture upload
  const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setPicture(files[0]);
    }
  };

  return (
    <div>
      <h2>Delivery Activities</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Commodity Description:</label>
          <input type="text" value={commodityDescription} onChange={(e) => setCommodityDescription(e.target.value)} />
        </div>
        <div>
          <label>Destination:</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div>
          <label>Delivery Note Number:</label>
          <input type="text" value={deliveryNoteNumber} onChange={(e) => setDeliveryNoteNumber(e.target.value)} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div>
          <label>Condition:</label>
          <select value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value="">Select Condition</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
        </div>
        <div>
          <label>Quantity Condition:</label>
          <select value={quantityCondition} onChange={(e) => setQuantityCondition(e.target.value)}>
            <option value="">Select Quantity Condition</option>
            <option value="correct">Correct</option>
            <option value="incorrect">Incorrect</option>
          </select>
        </div>
        <div>
          <label>Upload Picture:</label>
          <input type="file" accept="image/*" onChange={handlePictureUpload} />
        </div>
        <div>
          <label>Picture Description:</label>
          <input type="text" value={pictureDescription} onChange={(e) => setPictureDescription(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DeliveryActivities;
