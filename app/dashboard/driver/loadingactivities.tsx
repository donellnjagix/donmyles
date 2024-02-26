"use client"
import { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const LoadingActivities = () => {
  // State variables for form fields
  const [commodityDescription, setCommodityDescription] = useState('');
  const [areaOfLoading, setAreaOfLoading] = useState('');
  const [quantityLoaded, setQuantityLoaded] = useState('');
  const [supervisorInfo, setSupervisorInfo] = useState('');
  const [condition, setCondition] = useState('');
  const [quantityCondition, setQuantityCondition] = useState('');
  const [picture, setPicture] = useState<File | null>(null);
  const [pictureDescription, setPictureDescription] = useState('');
  const [signatureRef, setSignatureRef] = useState(null); // Reference to SignatureCanvas component

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

  // Function to handle saving the signature
  const handleSaveSignature = () => {
    if (signatureRef) {
      // Convert signature to base64 image data
      const signatureData = signatureRef.toDataURL();
      // You can save the signature data or perform other actions with it
      console.log('Signature Data:', signatureData);
    }
  };

  return (
    <div>
      <h2>Loading Activities</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div>
          <label>Commodity Description:</label>
          <input type="text" value={commodityDescription} onChange={(e) => setCommodityDescription(e.target.value)} />
        </div>
        {/* Add other form fields here */}
        <div>
          <label>Area of Loading:</label>
          <input type="text" value={areaOfLoading} onChange={(e) => setAreaOfLoading(e.target.value)} />
        </div>
        <div>
          <label>Quantity Loaded:</label>
          <input type="text" value={quantityLoaded} onChange={(e) => setQuantityLoaded(e.target.value)} />
        </div>
        <div>
          <label>Supervisor Information:</label>
          <input type="text" value={supervisorInfo} onChange={(e) => setSupervisorInfo(e.target.value)} />
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
        

        {/* Signature pad */}
        <div>
          <h3>Sign Here:</h3>
          <SignatureCanvas
            ref={(ref) => setSignatureRef(ref)} // Set reference to SignatureCanvas component
            penColor="black" // Set pen color
            canvasProps={{ width: 400, height: 200, className: 'signature-canvas' }} // Set canvas size and class
          />
          <button onClick={handleSaveSignature}>Save Signature</button> {/* Button to save signature */}
        </div>

        <button type="submit">Submit</button> {/* Submit button for the form */}
      </form>
    </div>
  );
};

export default LoadingActivities;

      