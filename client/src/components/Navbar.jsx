import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar text-white">
        <div className="flex justify-between items-center px-5 py-3 bg-zinc-800">
          <ul className="flex space-x-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#myBlogs">My Blogs</a>
            </li>
            <li>
              <a href="#profile">Profile</a>
            </li>
          </ul>
          <ul className="flex">
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
