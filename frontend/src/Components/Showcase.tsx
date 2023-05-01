import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <>
      <div>
        <div>Student table</div>
        <button>
          <Link to="/add"> Add </Link>
        </button>
      </div>
    </>
  );
};

export default Showcase;
