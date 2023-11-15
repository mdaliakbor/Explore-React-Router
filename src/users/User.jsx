import React from "react";
import GotoBack from "../backButton/GotoBack";
import { Link, useNavigate } from "react-router-dom";

const User = (props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/user/${id}`);
  };
  const { id, name } = props.user;
  return (
    <div className="bg-fuchsia-300 rounded-md text-center p-2">
      <p>Id : {id}</p>
      <p>Name : {name}</p>
      <span
        onClick={handleNavigate}
        className="bg-gray-500 p-2 m-2 rounded-md pointer cursor-pointer"
      >
        more...
      </span>
      <Link to={`/user/${id}`} className="bg-blue-500 p-2 m-2 rounded-md">
        More...
      </Link>
      <GotoBack />
    </div>
  );
};

export default User;
