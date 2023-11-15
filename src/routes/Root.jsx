import * as React from "react";
import "../index.css";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Loader from "../loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className={navigation.state === "loading" ? <Loader /> : ""}></div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
