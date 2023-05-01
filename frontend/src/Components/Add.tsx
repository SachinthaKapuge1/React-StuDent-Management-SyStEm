import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    grade: "",
    district: "",
  });

  const handleChange = (e: any) => {
    console.log(e.target.name);
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(student);

  const handleClick = async (e: any) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:3000/api/student", student);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="add">
        <div className="Header">
          <h1>Add Student</h1>
        </div>
        <div className="add-body">
          <input
            type="text"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Grade"
            value={student.grade}
            onChange={handleChange}
            name="grade"
          />
          <input
            type="text"
            placeholder="District"
            value={student.district}
            onChange={handleChange}
            name="district"
          />
        </div>
        <button onClick={handleClick}>Add to DataBase</button>
      </div>
    </>
  );
};

export default Add;
