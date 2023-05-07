// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./services.scss";


// import data from "./../servicesData";

// function Services() {
//   const [services, setServices] = useState(data);
 

//   //   useEffect(() => {
//   //     axios.get("/api/services").then((response) => {
//   //       setServices(response.data);
//   //     });
//   //   }, []);

//   return (
//     <div className="services">
//       <h1>Services</h1>
//       <Link to="/services/createService" style={{marginLeft:'8px'}}>Add New Service</Link>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {services.map((service) => (
//             <tr key={service.id}>
//               <td>{service.name}</td>
//               <td>{service.description}</td>
//               <td>${service.price}</td>

//               <td>
                
//                 <Link to={`/services/${service.id}`} state={service} className="EditButton" >View And Edit</Link>
                
//                 <button onClick={() => deleteService(service.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   async function deleteService(serviceId) {
//     const confirmation = window.confirm(
//       "Are you sure you want to delete this service?"
//     );
//     if (confirmation) {
//       await axios.delete(`/api/services/${serviceId}`);
//       setServices(services.filter((service) => service.id !== serviceId));
//     }
//   }
// }

// export default Services;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./services.scss";
import data from "./../servicesData";

function Services() {
  const [services, setServices] = useState(data);

  useEffect(() => {
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <div className="services">
      <h1>Services</h1>
      <Link to="/services/createService" style={{ marginLeft: "8px" }}>
        Add New Service
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>${service.price}</td>
              <td>
              <Link to={`/services/${service.id}`} state={service} className="EditButton" >View And Edit</Link>

                {console.log(service)}
                <button onClick={() => deleteService(service.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  async function deleteService(serviceId) {
    const confirmation = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (confirmation) {
      await axios.delete(`/api/services/${serviceId}`);
      setServices(services.filter((service) => service.id !== serviceId));
    }
  }
}

export default Services;
