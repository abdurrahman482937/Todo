"use client";
import React, { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [close, setClose] = useState("close");

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("I Love You Raisa 😘");
  };
  return (
    <div className="">
      <h1 className="bg-zinc-900 text-zinc-100 text-center text-5xl font-semibold font-mono py-5 px-10">
        Todo App
      </h1>
      <form className="flex items-center justify-evenly" onSubmit={submitHandle}>
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
          onClick={(e)=>{
            set
          }}
        >
          Add Task
        </button>
      </form>
      <div className="flex items-center justify-evenly" >
        <h1>{title}</h1>
        <h1>{desc}</h1>
        <h1>close</h1>
      </div>
    </div>
  );
}
