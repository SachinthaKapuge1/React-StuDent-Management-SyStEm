import React from "react";

const Add = () => {
  return (
    <>
      <div className="add">
        <div className="Header">
          <h1>Add Student</h1>
        </div>
        <div className="add-body">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Grade" />
          <input type="text" placeholder="District" />
        </div>
        <button>Add to DataBase</button>
      </div>
    </>
  );
};

export default Add;
