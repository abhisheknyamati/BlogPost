import React from "react";

function Card({ title, desc, author, time }) {
  return (
    <div className="w-52 border-2 p-4 border-black font-mono flex flex-col justify-between">
      <div>
        <div className="title text-xl font-bold">{title}</div>
        <div className="desc text-sm text-justify">{desc}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="author text-sm font-semibold">{author}</div>
        <div className="time text-sm">{time}</div>
      </div>
    </div>
  );
}

export default Card;