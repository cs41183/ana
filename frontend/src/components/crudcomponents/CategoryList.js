import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

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

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:8000/categories/${categoryId}`);
      setCategories(prevCategories => prevCategories.filter(category => category._id !== categoryId));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div className="container my-5">
  <div className="flex justify-center">
    <div className="w-1/2">
      <div className="bg-white p-4 border rounded">
        <h2 className="text-center text-2xl mb-4 font-bold">Categories</h2>
        <ul className="list-group list-none">
          {categories.map((category) => (
            <li className="flex justify-between items-center py-2 border-b" key={category._id}>
              <span>{category.name}</span>
              <div>
                <button className="bg-red-500 text-white px-3 py-1 rounded mx-2" onClick={() => handleDelete(category._id)}>
                  Delete
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

  );
};

export default CategoryList;
