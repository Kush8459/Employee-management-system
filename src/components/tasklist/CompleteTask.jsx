import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[349px] bg-green-400 rounded-xl">
      <div className="flex justify-between text-sm items-center">
        <h3 className="bg-red-600 px-3 text-black  py-1 rounded-md">{data.category}</h3>
        <h4 className="text-black ">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl text-black  font-semibold">
      {data.taskTitle}
      </h2>
      <p className="text-sm mt-2 text-black ">
      {data.taskDescription}
      </p>
      <div className="mt-2 bg-yellow-400">
        <button className="w-full">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
