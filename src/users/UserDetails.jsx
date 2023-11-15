import React from "react";
import GotoBack from "../backButton/GotoBack";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className="bg-fuchsia-300 rounded-md text-center p-2">
      <p className="text-3xl font-bold m-5">User Details</p>
      <div className="flex items-center justify-center">
        <div className="font-bold text-xl text-left">
          <p>Id : {user.id}</p>
          <p>Name : {user.name}</p>
          <p>Company : {user.company}</p>
          <p>Email : {user.email}</p>
          <p>Address : {user.address}</p>
          <p>State : {user.state}</p>
          <p>Country : {user.country}</p>
          <p>Phone : {user.phone}</p>
          <GotoBack />
        </div>
        <img className="w-96" src={user.photo} alt="picture" />
      </div>
    </div>
  );
};

export default UserDetails;
