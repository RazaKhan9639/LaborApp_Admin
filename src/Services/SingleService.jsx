// import React from "react";
// import "./singleService.scss";
// import { useLocation } from "react-router-dom";

// function SingleService() {
//   const location = useLocation(); // get the current location
//   const service = location.state; // access the state object to get the data passed from the previous page
//   console.log(service.name);

//   if (!service) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="service-details">
//       <h1>{service.name}</h1>
//       <p>{service.description}</p>
//       <p>Price: ${service.price}</p>
//       <p className="categories ">
//         Categories:{" "}
//         {service.categories.map((category, index) => (
//           <span key={index}>{category}</span>
//         ))}
//       </p>
//     </div>
//   );
// }

// export default SingleService;


import React from "react";
import "./singleService.scss";
import { useLocation } from "react-router-dom";
function SingleService() {
  const location = useLocation(); // get the current location
  const service = location.state; // access the state object to get the data passed from the previous page
  console.log(service.name);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="service-details">
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <img src={service.image} alt={service.name} />
      <p>Category: {service.category}</p>
      <p>Categories: {service.categories.join(", ")}</p>
      <p>Rating: {service.rating}</p>
      <p>Reviews: {service.reviews}</p>
      <p>Delivery Time: {service.deliveryTime} days</p>
      <p>Delivery Charge: ${service.deliveryCharge}</p>
      <p>Availability: {service.isAvailable ? "Available" : "Not Available"}</p>
      <p>Popular: {service.isPopular ? "Yes" : "No"}</p>
      <p>Recommended: {service.isRecommended ? "Yes" : "No"}</p>
    </div>
  );
}

export default SingleService;
