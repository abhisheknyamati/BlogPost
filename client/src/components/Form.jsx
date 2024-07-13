import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import axios from "axios";

const Form = ({updateBlogList}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    author: "",
  });

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
    if (isFormOpen) {
      setFormData({
        title: "",
        desc: "",
        author: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try{
        const response = await axios.post("http://localhost:5000/api/createBlog", formData);
        console.log("Form Submitted: ", response.data);
        setFormData({
          title: "",
          desc: "",
          author: "",
        });
        setIsFormOpen(false);
        updateBlogList();
    }catch(error){
      console.log("there was error in subbmitting the form", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <button
        className="font-semibold text-xl h-8 w-8 bg-white rounded-full border-2 border-zinc-700 flex items-center justify-center fixed bottom-8 right-8"
        onClick={toggleForm}
      >
        {isFormOpen ? <FaTimes /> : <FaPlus />}
      </button>
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 p-6 bg-white border border-gray-300 rounded-lg shadow-lg relative">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={toggleForm}
            >
              <FaTimes />
            </button>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Title</span>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Description
                </span>
                <input
                  type="text"
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Author
                </span>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-2 rounded-md transition duration-300"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
