import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Properties from "./screens/Properties";
import Users from "./screens/Users";
import UserDetails from "./screens/UserDetails";
import Bookings from "./screens/Bookings";
import PropertyDetails from "./screens/PropertyDetails";
import AddProperty from "./screens/AddProperty";

function App() {
  return (
    <div className="container">
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property-details/:index" element={<PropertyDetails />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
