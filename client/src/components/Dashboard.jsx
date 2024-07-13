import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Navbar from "./Navbar";
import Form from "./Form";

function Dashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.log("error fetching blogs", error);
    }
  };

  const updateBlogList = async () => {
    await fetchBlogs();
  };

  return (
    <>
      <Navbar/>
      <div className="p-5 flex flex-wrap gap-3">
        {blogs.map((blog) => (
          <Card
            key={blog._id}
            title={blog.title}
            desc={blog.desc}
            author={blog.author}
            time={blog.createdAt}
          />
        ))}
      </div>
      <Form updateBlogList={updateBlogList} />
    </>
  );
}

export default Dashboard;
