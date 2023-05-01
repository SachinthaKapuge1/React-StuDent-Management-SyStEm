import React from "react";

const Update = () => {
  return (
    <>
      <div className="add">
        <div className="Header">
          <h1>Update Student</h1>
        </div>
        <div className="add-body">
          <input type="text" placeholder="ID" />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Grade" />
          <input type="text" placeholder="District" />
        </div>
      </div>
    </>
  );
};

export default Update;
