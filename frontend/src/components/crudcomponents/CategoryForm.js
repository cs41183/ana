// CategoryForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const[successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/categories', {
        name,
      });

      console.log('Category created:', response.data);

      //Reset the input field after successful submission
      setName('');

      //Display success message
      setSuccessMessage('Category was added succesfully');


      // Clear the success message after a few seconds (optional)
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear after 5 seconds (adjust the time as needed)

    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className="container my-5">
  <div className="flex justify-center">
    <div className="w-1/2">
      <div className="bg-white p-4 border rounded shadow-md">
        <h2 className="text-center text-2xl mb-4 font-bold">Add Category</h2>
        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default CategoryForm;
