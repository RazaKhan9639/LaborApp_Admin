import React, { useState, useEffect } from "react";
import "./addcat.scss";
import { useParams } from "react-router-dom";

function AddCategories() {
  const { serviceId } = useParams();
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    // Fetch the service with the given serviceId from your API or database
    // and set its categories in the state
    const fetchService = async () => {
      try {
        const response = await fetch(`/api/services/${serviceId}`);
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchService();
  }, [serviceId]);

  const handleNewCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleAddCategory = () => {
    setCategories([...categories, newCategory]);
    setNewCategory("");
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setCategories(categories.filter((category) => category !== categoryToRemove));
  };

  return (
    <div className="add-category">
      <h1>Add Categories to Service #{serviceId}</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          New Category:
          <input type="text" value={newCategory} onChange={handleNewCategoryChange} />
        </label>
        <button type="button" onClick={handleAddCategory}>
          Add Category
        </button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category} >
            {category}
            <button type="button" onClick={() => handleRemoveCategory(category)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddCategories;
