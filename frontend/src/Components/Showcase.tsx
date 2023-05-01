import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Showcase = () => {
  const [students, setStudents] = useState<any>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/student");
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudents();
  }, []);

  const handleDelete = async (id: number) => {
    console.log("handleDelet");
    try {
      await axios.delete("http://localhost:3000/api/student/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <div className="students">
          {students.map((student: any) => (
            <div key={student.id}>
              <div className="student">
                {student.name}
                {student.id}
                {student.class}
                {student.district}
              </div>
              <button>
                <Link to={`/update/${student.id}`}>Update</Link>
              </button>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </div>
          ))}
        </div>
        <button>
          <Link to="/add"> Add </Link>
        </button>
      </div>
    </>
  );
};

export default Showcase;
