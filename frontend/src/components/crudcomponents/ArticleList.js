// ArticleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  // const navigate = useNavigate(); // Added useNavigate

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    console.log(`Deleting article with ID: ${id}`);
    try {
      await axios.delete(`http://localhost:8000/articles/${id}`);
      console.log(`Article with ID ${id} deleted successfully`);
      setArticles(articles.filter(article => article._id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
      console.error('Error response:', error.response); // Log the response for further information
    }
  };

  // const handleEdit = (id) => {
  //   navigate(`/edit/${id}`); // Use navigate to redirect to the edit page
  // };
  

  return (
    <div className="container mt-5 mx-auto">
  <div className="flex flex-wrap justify-center">
    {articles.map((article) => (
      <div className="md:w-1/3 px-4 mb-4" key={article._id}>
        <div className="bg-white border rounded shadow">
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">{article.title}</h5>
            <p className="text-gray-700 mb-4">{article.content}</p>
            <p className="text-sm text-gray-500">Kategoria: {article.category}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(article._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ArticleList;