import React from "react";
import { useNavigate } from "react-router-dom";

const GotoBack = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={handler} className="p-2 m-2 bg-yellow-300 rounded-lg">
        Go Back
      </button>
    </>
  );
};

export default GotoBack;
