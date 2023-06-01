import React,{useEffect} from "react";
import "./list.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
// import axios from "axios";


const List = () => {
  let title = [];
  let link = [];
  let active = "";

  switch (window.location.pathname) {
    case "/users":
      title = ["Add New Users"];
      active = "users";
      break;
    case "/labour":
      title = ["Add New Service Provider"];
      active = "labour";
      break;
      default:
        break;

  }



  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable title={title} link = {link} active = {active}/>
      </div>
    </div>
  );
};

export default List;
