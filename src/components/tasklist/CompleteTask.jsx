import React from "react";

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[349px] bg-yellow-400 rounded-xl">
      <div className="flex justify-between text-sm items-center">
        <h3 className="bg-red-600 px-3 text-black  py-1 rounded-md">High</h3>
        <h4 className="text-black ">20 feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl text-black  font-semibold">
        Make a website
      </h2>
      <p className="text-sm mt-2 text-black ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        sapiente earum excepturi dolore reiciendis, architecto minus dolorem
        quibusdam itaque fuga?
      </p>
      <div className="mt-2">
        <button className="w-full">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
