import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <div className="text-center mt-4 text-3xl font-bold">
        All users is here: {users.length}
      </div>
      <div className="m-4 grid grid-cols-4 gap-5">
        {users.map((user, i) => (
          <User key={i} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
