// ArticleForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/articles', {
        title,
        content,
        category,
    });

      console.log('Article created:', response.data);

      // Clear the input fields
      setTitle('');
      setContent('');
      setCategory('');

      // Show success message
      setSuccessMessage('Article was created successfully');

      // Clear the success message after a few seconds (optional)
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear after 5 seconds (adjust the time as needed)

    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <div className="container my-5">
    <div className="flex justify-center">
      <div className="w-1/2">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-center text-2xl mb-4 font-bold">Add Article</h2>
          {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full border p-2 rounded"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-bold mb-2">Select Category:</label>
              <select
                id="category"
                className="w-full border p-2 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
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

export default ArticleForm;
