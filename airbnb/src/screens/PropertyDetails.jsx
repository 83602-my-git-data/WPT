import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { findId } from "../services/property";
import Amenity from "../components/amenity";
import { config } from "../services/config";

function PropertyDetails() {
  const { index } = useParams();
  const [title, setTitle] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState("");
  const [guests, setGuests] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");

  const [isLakeView, setLakeView] = useState(false);
  const [isTV, setTV] = useState(false);
  const [isAC, setAC] = useState(false);
  const [isWiFi, setWifi] = useState(false);
  const [isMinibar, setMinibar] = useState(false);
  const [isBreakfast, setBreakfast] = useState(false);
  const [isParking, setParking] = useState(false);
  const [isImageChange, setIsImageChange] = useState(false);

  const [bathrooms, setBathrooms] = useState("");
  const [rent, setRent] = useState("");

  const [image, setImage] = useState(undefined);

  const navigate = useNavigate();

  const getInfo = async () => {
    const result = await findId(index);
    if (result.status === "success") {
      toast.success("Result is fetched successfully!!");
      setTitle(result.data[0].title);
      setDetails(result.data[0].details);
      setAddress(result.data[0].address);
      setContactName(result.data[0].ownerName);
      setContactNumber(result.data[0].contactNo);
      setLakeView(result.data[0].isLakeView === 1);
      setTV(result.data[0].isTV === 1);
      setAC(result.data[0].isAC === 1);
      setWifi(result.data[0].isWifi === 1);
      setMinibar(result.data[0].isMiniBar === 1);
      setBreakfast(result.data[0].isBreakfast === 1);
      setParking(result.data[0].isParking === 1);
      setGuests(result.data[0].guests);
      setBedrooms(result.data[0].bedrooms);
      setBeds(result.data[0].beds);
      setBathrooms(result.data[0].bathrooms);
      setRent(result.data[0].rent);
      setImage(result.data[0].profileImage); // Assuming profileImage is a URL or file object
    } else {
      toast.error(result.error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []); // Only run once on mount

  const onSave = () => {
    // Add validation
    navigate("/properties");
  };

  return (
    <div>
      <Navbar />
      <h2 className="page-header">Property Details</h2>
      <div className="form">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Contact Name</label>
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Contact Number</label>
              <input
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor=""># Guests</label>
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor=""># Bedrooms</label>
            <input
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor=""># Beds</label>
            <input
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="form-control"
            ></textarea>
          </div>
          <div className="col">
            <label htmlFor="">Details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={3}
              className="form-control"
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor=""># Bathrooms</label>
            <input
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="">Rent</label>
            <input
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <h3>Amenities </h3>
        <div className="row mb-3">
          <div className="row">
            <div className="col">
              <Amenity
                value={isLakeView}
                onChange={(status) => setLakeView(status)}
                title="Lake View"
                icon="bi-water"
              />
              <Amenity
                value={isTV}
                onChange={(status) => setTV(status)}
                title="TV"
                icon="bi-tv"
              />
              <Amenity
                value={isAC}
                onChange={(status) => setAC(status)}
                title="AC"
                icon="bi-activity"
              />
              <Amenity
                value={isWiFi}
                onChange={(status) => setWifi(status)}
                title="WiFi"
                icon="bi-wifi"
              />
              <Amenity
                value={isMinibar}
                onChange={(status) => setMinibar(status)}
                title="Minibar"
                icon="bi-droplet-half"
              />
              <Amenity
                value={isBreakfast}
                onChange={(status) => setBreakfast(status)}
                title="Breakfast"
                icon="bi-egg-fried"
              />
              <Amenity
                value={isParking}
                onChange={(status) => setParking(status)}
                title="Parking"
                icon="bi-p-circle"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          {(!isImageChange && (
            <div>
              <img
                style={{ width: 500, height: 500 }}
                src={`${config.serverUrl}/image/${image}`}
                alt=""
              />
              <hr />
              <Amenity
                value={isImageChange}
                onChange={(status) => setIsImageChange(status)}
                title="Change the Image"
                icon="bi-p-circle"
              />
            </div>
          )) || (
            <div>
              <label htmlFor="">Image</label>
              <input
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                className="form-control"
              />
              <Amenity
                value={isImageChange}
                onChange={(status) => setIsImageChange(status)}
                title="Change the Image"
                icon="bi-p-circle"
              />
            </div>
          )}
        </div>

        <div className="mb-3">
          <button onClick={onSave} className="btn btn-success me-2">
            Save
          </button>
          <Link to="/properties" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
