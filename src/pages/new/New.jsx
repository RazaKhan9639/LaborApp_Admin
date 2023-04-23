import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import  DriveFolderUploadOutlinedIcon  from "@mui/icons-material/DriveFolderUploadOutlined";
const New = ({inputs,title}) => {

  const [file,setFile] = React.useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://imgs.search.brave.com/FPiphScer587N3A2iwoy-2Fq7MYyjrGHJTHbiq6GpMw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/NGVjaUYtRk0yLTNX/ZGh2eFRtR0VnSGFI/YSZwaWQ9QXBp"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
            <label htmlFor="file" >Image: <DriveFolderUploadOutlinedIcon className="icon"/></label>
            <input type="file" id="file" style={{display:'none'}} onChange={e=>setFile(e.target.files[0])}/>
          </div>

          {inputs.map((input)=>(
            <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input type={input.type} placeholder={input.placeholder} />
          </div>
          ))  
          }
              
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
