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

  // const handleCategoryChange = (event) => {
  //   const category = event.target.value;
  //   setCategories((prevCategories) => [...prevCategories, { name: category }]);
  // };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    const subcategory = event.target.getAttribute("data-subcategory");

    // check if the category already exists in the categories array
    const existingCategory = categories.find((c) => c.name === category);

    if (existingCategory) {
      // if the category already exists, add the subcategory to its subcategories array
      setCategories((prevCategories) =>
        prevCategories.map((c) =>
          c.name === category
            ? { ...c, subcategories: [...c.subcategories, subcategory] }
            : c
        )
      );
    } else {
      // if the category doesn't exist, add it to the categories array with the subcategory
      setCategories((prevCategories) => [
        ...prevCategories,
        { name: category, subcategories: [subcategory] },
      ]);
    }
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
          <label>
            Image:
            <input type="file" />
          </label>
          <label>
            Delivery Time/ Days:
            <input type="number" min="1" max="3" />
          </label>
          <br />
          <label>
            Categories:
            <select multiple onChange={handleCategoryChange}>
              <option value="Plumbing" data-subcategory="Sink Repair">
                Plumbing - Sink Repair
              </option>
              <option value="Plumbing" data-subcategory="Pipe Cleaning">
                Plumbing - Pipe Cleaning
              </option>
              <option value="Electrical" data-subcategory="Wiring">
                Electrical - Wiring
              </option>
              <option value="Electrical" data-subcategory="Fuse Replacement">
                Electrical - Fuse Replacement
              </option>
              <option value="Carpentry" data-subcategory="Furniture Repair">
                Carpentry - Furniture Repair
              </option>
              <option value="Carpentry" data-subcategory="Door Installation">
                Carpentry - Door Installation
              </option>
              <option value="Cleaning" data-subcategory="House Cleaning">
                Cleaning - House Cleaning
              </option>
              <option value="Cleaning" data-subcategory="Carpet Cleaning">
                Cleaning - Carpet Cleaning
              </option>
            </select>
          </label>
          <br />
          <button type="submit">Create Service</button>
        </form>
      </div>
    </>
  );
}

export default CreateService;
