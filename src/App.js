import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { LaborInputs, userInput } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import Services from "./Services/Services";
import CreateService from "./Services/CreateService";
import SingleService from "./Services/SingleService";
import AddCategories from "./Services/AddCategories";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInput} title="Add New User" />}
              />
            </Route>
            <Route path="labour">
              <Route index element={<List />} />
              <Route path=":labourId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={LaborInputs} title="Add New Service Provider" />
                }
              />
            </Route>
            <Route path="/services">
              <Route index element={<Services />} />
              <Route path=":serviceId" element={<SingleService />} />
              <Route path=":serviceId/categories" element={<AddCategories />} />
              <Route path="createService" element={<CreateService />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
