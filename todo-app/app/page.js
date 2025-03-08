"use client";
import React, { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("I Love You Raisa 😘");
  };
  let renderTask = <h2 className="mt-10 h-20 pl-67 bg-zinc-100 flex items-center text-2xl font-mono ">No Task Available</h2>;
  if (mainTask.length > 0) 
    renderTask = mainTask.map((task, i) => {
    return (
      <div
        key={i}
        className="mt-10 h-20 px-20 bg-zinc-100 flex justify-between items-center text-2xl font-mono "
      >
        <h3>{task.title}</h3>
        <h3>{task.desc}</h3>
      </div>
    );
  });
  return (
    <div className="">
      <h1 className="bg-zinc-900 text-zinc-100 text-center text-5xl font-semibold font-mono py-5 px-10">
        Todo App
      </h1>
      <form
        className="flex items-center justify-evenly"
        onSubmit={submitHandle}
      >
        <input
          className=" text-xl font-mono border-4 border-zinc-800 text-zinc-950 outline-0 h-12 w-80 px-2 my-10 mx-5"
          type="text"
          placeholder="Enter Title Here.."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="text-xl font-mono border-4 border-zinc-800 text-zinc-950 outline-0 h-12 w-80 px-2 my-10 mx-5"
          type="text"
          placeholder="Enter Description Here.."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className="bg-zinc-800 text-white text-lg px-12 h-12 cursor-pointer"
          onClick={() => {
            setMainTask([...mainTask, { title, desc }]);
            setTitle("");
            setDesc("");
          }}
        >
          Add Task
        </button>
      </form>
      <hr />
      <div className="my-10 h-auto">{renderTask}</div>
    </div>
  );
}
