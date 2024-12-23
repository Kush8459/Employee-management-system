import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[349px] bg-red-400 rounded-xl">
      <div className="flex justify-between text-sm items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded-md">{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-2">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
