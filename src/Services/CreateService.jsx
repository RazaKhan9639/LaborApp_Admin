import React, { useState } from "react";
import axios from "axios";
import "./createSer.scss";
import Navbar from "../components/navbar/Navbar";

function CreateService() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/services", { name, description, price, categories });
    setName("");
    setDescription("");
    setPrice("");
    setCategories([]);
  };

  const addCategory = () => {
    const category = document.querySelector(".categoriesClass").value;
    setCategories([...categories, category]);
    document.querySelector(".categoriesClass").value = "";
    console.log(categories);
  };

  const removeCategory = (category) => {
    const newCategories = categories.filter((c) => c !== category);
    setCategories(newCategories);
  };

  return (
    <>
      <Navbar />
      <div className="create-service">
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
        <h1>Create New Service</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          <br />
          {/* <label>
            Image:
            <input type="file" />
          </label> */}
          <label>
            Delivery Time/ Days:
            <input type="number" min="1" max="3" />
          </label>
          <br />
          <label>
            Categories:
            <input
              type="text"
              className="categoriesClass"
              placeholder="Add Categories here "
            />
            <button onClick={addCategory}>Add</button>
            <div className="categories">
              {categories.map((category) => (
                <div className="category" key={category}>
                  <span>{category}</span>
                  <button onClick={() => removeCategory(category)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </label>
          <br />
          <button type="submit">Create Service</button>
        </form>
      </div>
    </>
  );
}

export default CreateService;
